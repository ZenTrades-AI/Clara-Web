import React, { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { mockTranscripts } from "@/data/transcripts";

const call = mockTranscripts.find((t) => t.audioUrl === "/audio/fire_protection_call.mp3")!;
const lines = call.transcript;

const BAR_COUNT = 28;
const IDLE_LEVEL = 0.22;

// Tags light up as the recorded call reaches each moment.
const milestones = [
  { label: "Inspection request", at: 8 },
  { label: "Flow switch explained", at: 45 },
  { label: "Visit being booked", at: 71 },
];

const formatTime = (s: number) => {
  const t = Math.max(0, Math.floor(s));
  return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0");
};

const cleanText = (text: string) => text.replace(/^[\s,]+/, "");

const AfsaCallCard = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const barsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const ctxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number>();

  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(91);

  const setBars = (levels: (i: number) => number) => {
    barsRef.current.forEach((bar, i) => {
      if (bar) bar.style.transform = `scaleY(${levels(i).toFixed(3)})`;
    });
  };

  const stopMeter = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = undefined;
    setBars(() => IDLE_LEVEL);
  };

  const startMeter = () => {
    const analyser = analyserRef.current;
    if (!analyser) return;
    const data = new Uint8Array(analyser.frequencyBinCount);
    const tick = () => {
      analyser.getByteFrequencyData(data);
      // Mirror the voice band (roughly the lower half of the spectrum) out from the
      // centre bar, boosting the quieter high bins so the edges still move.
      const usable = Math.floor(data.length * 0.5);
      const mid = (BAR_COUNT - 1) / 2;
      setBars((i) => {
        const dist = Math.abs(i - mid) / mid;
        const v = (data[Math.min(usable - 1, Math.floor(dist * usable))] / 255) * (1 + dist * 1.2);
        return IDLE_LEVEL + (1 - IDLE_LEVEL) * Math.min(1, v * 0.9);
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
  };

  const ensureAnalyser = () => {
    if (ctxRef.current || !audioRef.current) return;
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 128;
    analyser.smoothingTimeConstant = 0.72;
    ctx.createMediaElementSource(audioRef.current).connect(analyser);
    analyser.connect(ctx.destination);
    ctxRef.current = ctx;
    analyserRef.current = analyser;
  };

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    try {
      ensureAnalyser();
      await ctxRef.current?.resume();
    } catch {
      // Visualiser is optional; playback still works without it.
    }
    audio.play().catch(() => setPlaying(false));
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const r = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - r.left) / r.width) * duration;
    setTime(audio.currentTime);
  };

  useEffect(() => {
    setBars(() => IDLE_LEVEL);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ctxRef.current?.close().catch(() => undefined);
    };
  }, []);

  const started = playing || time > 0;
  let current = -1;
  for (let i = 0; i < lines.length; i++) if (lines[i].timestamp <= time) current = i;
  const line = started && current >= 0 ? lines[current] : null;

  return (
    <div data-tilt="" style={{ position: "relative", zIndex: 1, background: "#0B0B0B", color: "#fff", borderRadius: "24px", padding: "24px", boxShadow: "0 30px 60px -40px rgba(11,11,11,0.6)", transition: "transform .35s cubic-bezier(.2,.7,.2,1),box-shadow .35s ease", willChange: "transform" }}>
      <audio
        ref={audioRef}
        src={call.audioUrl}
        preload="metadata"
        onPlay={() => { setPlaying(true); startMeter(); }}
        onPause={() => { setPlaying(false); stopMeter(); }}
        onEnded={() => { setPlaying(false); stopMeter(); }}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => { if (isFinite(e.currentTarget.duration)) setDuration(e.currentTarget.duration); }}
      />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9C5C3" }}>
          <span style={{ position: "relative", width: "8px", height: "8px", display: "inline-block" }}>
            <span style={{ position: "absolute", inset: 0, borderRadius: "999px", background: "#CB2E41" }} />
            {playing && <span style={{ position: "absolute", inset: 0, borderRadius: "999px", background: "#CB2E41", animation: "clara-ring 1.8s ease-out infinite" }} />}
          </span>
          Clara Answers · Real call
        </div>
        <div style={{ fontSize: "12px", color: "#8E8A88", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
          {formatTime(time)} / {formatTime(duration)}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "20px" }}>
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause call recording" : "Play call recording"}
          className="afsa-play"
          style={{ flex: "none", width: "52px", height: "52px", borderRadius: "999px", background: "#CB2E41", color: "#fff", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}
        >
          {playing ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" style={{ marginLeft: "3px" }} />}
        </button>
        <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: "3px", height: "52px" }}>
          {Array.from({ length: BAR_COUNT }, (_, i) => (
            <span
              key={i}
              ref={(el) => { barsRef.current[i] = el; }}
              style={{ flex: 1, minWidth: "2px", height: "100%", borderRadius: "999px", transformOrigin: "center", transform: `scaleY(${IDLE_LEVEL})`, transition: "transform .08s linear", background: i % 5 === 0 ? "#CB2E41" : "rgba(255,255,255,0.35)" }}
            />
          ))}
        </div>
      </div>

      <div onClick={seek} role="presentation" style={{ marginTop: "14px", height: "14px", display: "flex", alignItems: "center", cursor: "pointer" }}>
        <div style={{ position: "relative", width: "100%", height: "3px", borderRadius: "999px", background: "rgba(255,255,255,0.14)" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${Math.min(100, (time / duration) * 100)}%`, borderRadius: "999px", background: "#CB2E41" }} />
        </div>
      </div>

      <div style={{ marginTop: "14px", minHeight: "92px" }}>
        <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: line?.speaker === "Clara AI" ? "#CB2E41" : "#7E7A78" }}>
          {line ? line.speaker : "Transcript"}
        </div>
        <div aria-live="polite" style={{ marginTop: "10px", fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontSize: "20px", lineHeight: 1.35, color: "#F2F0EF" }}>
          {line
            ? "“" + cleanText(line.text) + "”"
            : "“I had a fire marshal come by my property today…” — press play to hear Clara take the call."}
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px", marginTop: "18px", flexWrap: "wrap" }}>
        {milestones.map((m) => {
          const lit = time >= m.at;
          return (
            <span
              key={m.label}
              style={lit
                ? { background: "#CB2E41", border: "1px solid #CB2E41", borderRadius: "999px", padding: "7px 14px", fontSize: "11px", color: "#fff", transition: "all .4s ease" }
                : { border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "7px 14px", fontSize: "11px", color: "#C9C5C3", transition: "all .4s ease" }}
            >
              {m.label}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AfsaCallCard;
