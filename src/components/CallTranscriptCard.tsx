import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause } from "lucide-react";
import WaveForm from "./WaveForm";
import { CallTranscript, TranscriptMessage } from "./CallTranscriptSection";

interface CallTranscriptCardProps {
  transcript: CallTranscript;
}

const CallTranscriptCard: React.FC<CallTranscriptCardProps> = ({ transcript }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showFullTranscript, setShowFullTranscript] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  const totalDuration = transcript.transcript.reduce((acc, msg) => acc + msg.duration, 0);

  // Inline styles
  const cardStyle = {
    background: 'linear-gradient(145deg, hsl(240 10% 12%), hsl(240 10% 8%))',
    border: '1px solid hsl(240 10% 18%)',
    boxShadow: '0 8px 25px hsl(240 10% 3% / 0.6)',
    transition: 'all 0.3s ease',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    display: 'flex',
    flexDirection: 'column' as const
  };

  const playButtonStyle = {
    background: 'hsl(240 10% 25%)',
    color: 'white',
    border: 'none',
    transition: 'all 0.3s ease',
    width: '4rem',
    height: '4rem',
    borderRadius: '9999px',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const transcriptScrollStyle = {
    height: '200px',
    marginBottom: '1rem',
    overflowY: 'auto' as const,
    overflowX: 'hidden' as const,
    paddingRight: '0.5rem',
    scrollBehavior: 'smooth' as const
  };

  const speakerAIStyle = {
    color: 'hsl(15 100% 60%)',
    fontWeight: 600,
    fontSize: '0.8rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '0.25rem'
  };

  const speakerCustomerStyle = {
    color: 'hsl(210 100% 70%)',
    fontWeight: 600,
    fontSize: '0.8rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '0.25rem'
  };

  const messageActiveStyle = {
    background: 'hsl(240 10% 20%)',
    border: '1px solid hsl(15 100% 60% / 0.3)',
    borderRadius: '0.5rem',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontWeight: 400,
    marginBottom: '0.75rem',
    transition: 'all 0.3s ease-in-out',
    color: 'hsl(240 10% 90%)'
  };

  const messageHoverStyle = {
    background: 'transparent',
    borderRadius: '0.5rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    marginBottom: '0.75rem',
    color: 'hsl(240 10% 80%)',
    fontSize: '0.875rem',
    lineHeight: '1.4'
  };

  const viewTranscriptButtonStyle = {
    background: 'hsl(240 10% 20%)',
    border: '1px solid hsl(240 10% 30%)',
    color: 'hsl(240 10% 90%)',
    fontWeight: 500,
    width: '100%',
    transition: 'all 0.3s ease',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    marginTop: 'auto'
  };

  useEffect(() => {
    // Initialize audio element
    if (transcript.audioUrl && !audioRef.current) {
      audioRef.current = new Audio(transcript.audioUrl);
      audioRef.current.addEventListener('loadedmetadata', () => {
        if (audioRef.current) {
          setAudioDuration(audioRef.current.duration);
        }
      });
      audioRef.current.addEventListener('timeupdate', () => {
        if (audioRef.current) {
          const newTime = audioRef.current.currentTime;
          setCurrentTime(newTime);

          // Find current message based on actual audio timestamp
          let messageIndex = 0;
          for (let i = 0; i < transcript.transcript.length; i++) {
            const message = transcript.transcript[i];
            const messageEndTime = message.timestamp + message.duration;
            if (newTime >= message.timestamp && newTime < messageEndTime) {
              messageIndex = i;
              break;
            }
            if (newTime >= message.timestamp) {
              messageIndex = i;
            }
          }
          setCurrentMessageIndex(messageIndex);

          // Auto-scroll to current message if user isn't manually scrolling
          if (!isUserScrolling && messageRefs.current[messageIndex] && scrollAreaRef.current) {
            const messageElement = messageRefs.current[messageIndex];
            const container = scrollAreaRef.current;
            if (container && messageElement) {
              const containerRect = container.getBoundingClientRect();
              const messageRect = messageElement.getBoundingClientRect();

              if (messageRect.top < containerRect.top || messageRect.bottom > containerRect.bottom) {
                const scrollTop = messageElement.offsetTop - container.offsetTop - (container.clientHeight / 2) + (messageElement.clientHeight / 2);
                container.scrollTo({
                  top: scrollTop,
                  behavior: 'smooth'
                });
              }
            }
          }
        }
      });
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
        setCurrentMessageIndex(0);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [transcript.audioUrl, transcript.transcript]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getVisibleMessages = () => {
    return showFullTranscript ? transcript.transcript : transcript.transcript.slice(0, 3);
  };

  const progress = audioDuration > 0 ? (currentTime / audioDuration) * 100 : 0;

  // Handle manual scrolling detection
  const handleScrollStart = () => {
    setIsUserScrolling(true);
  };

  const handleScrollEnd = () => {
    // Reset user scrolling flag after a delay
    setTimeout(() => setIsUserScrolling(false), 2000);
  };

  // Initialize message refs
  useEffect(() => {
    messageRefs.current = messageRefs.current.slice(0, getVisibleMessages().length);
  }, [showFullTranscript, transcript.transcript.length]);

  return (
    <Card style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.875rem', color: 'hsl(240 10% 70%)' }}>{transcript.duration}</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePlayPause}
          style={playButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'hsl(240 10% 30%)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'hsl(240 10% 25%)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isPlaying ? (
            <Pause style={{ width: '1.5rem', height: '1.5rem' }} />
          ) : (
            <Play style={{ width: '1.5rem', height: '1.5rem', marginLeft: '0.25rem' }} />
          )}
        </Button>

        <WaveForm progress={progress} isPlaying={isPlaying} />
      </div>

      <div
        style={transcriptScrollStyle}
        ref={scrollAreaRef}
        onMouseEnter={handleScrollStart}
        onMouseLeave={handleScrollEnd}
        onTouchStart={handleScrollStart}
        onTouchEnd={handleScrollEnd}
      >
        <div>
          {(showFullTranscript ? transcript.transcript : transcript.transcript.slice(0, 3)).map((message, index) => (
            <div
              key={index}
              ref={(el) => messageRefs.current[index] = el}
            >
              <div style={message.speaker === "Clara AI" ? speakerAIStyle : speakerCustomerStyle}>
                {message.speaker}
              </div>
              <p style={currentMessageIndex === index && isPlaying ? messageActiveStyle : messageHoverStyle}>
                {message.text}
              </p>
            </div>
          ))}
          {!showFullTranscript && transcript.transcript.length > 3 && (
            <div style={{ textAlign: 'center', color: 'hsl(240 10% 60%)', padding: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem' }}>...</span>
            </div>
          )}
        </div>
      </div>

      <Button
        variant="outline"
        style={viewTranscriptButtonStyle}
        onClick={() => setShowFullTranscript(!showFullTranscript)}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'hsl(240 10% 25%)';
          e.currentTarget.style.borderColor = 'hsl(240 10% 40%)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'hsl(240 10% 20%)';
          e.currentTarget.style.borderColor = 'hsl(240 10% 30%)';
        }}
      >
        {showFullTranscript ? "Hide" : "View"} Full Transcript
      </Button>
    </Card>
  );
};

export default CallTranscriptCard;