import React, { useState } from "react";

// Google Apps Script web app (deployed from the AFSA45 bookings sheet) that appends each booking as a row.
const AFSA45_SHEETS_URL = import.meta.env.VITE_AFSA45_SHEETS_URL || "";

interface Props {
  day: string;
  time: string;
  onBack: () => void;
}

type Field = "name" | "email" | "phone" | "company";

const labelStyle: React.CSSProperties = { fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7E7A78" };

const inputStyle = (invalid: boolean): React.CSSProperties => ({
  width: "100%", marginTop: "8px", background: "rgba(255,255,255,0.04)", color: "#fff",
  border: "1px solid " + (invalid ? "#CB2E41" : "rgba(255,255,255,0.18)"), borderRadius: "14px",
  padding: "13px 16px", fontSize: "15px", fontFamily: "inherit", outline: "none", transition: "border-color .25s ease",
});

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isPhone = (v: string) => v.replace(/\D/g, "").length >= 7;

const AfsaBookingDetails = ({ day, time, onBack }: Props) => {
  const [values, setValues] = useState<Record<Field, string>>({ name: "", email: "", phone: "", company: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");

  const update = (field: Field) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<Field, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name";
    if (!isEmail(values.email)) next.email = "Please enter a valid email";
    if (!isPhone(values.phone)) next.phone = "Please enter a valid phone number";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      if (!AFSA45_SHEETS_URL) throw new Error("VITE_AFSA45_SHEETS_URL is not configured");
      // text/plain + no-cors avoids the CORS preflight Apps Script can't answer.
      await fetch(AFSA45_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          source: "AFSA45 Booth Booking",
          day,
          time,
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          company: values.company.trim(),
          page: window.location.href,
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus("done");
    } catch (error) {
      console.error("Error submitting AFSA45 booking:", error);
      setStatus("failed");
    }
  };

  if (status === "done") {
    return (
      <div style={{ marginTop: "28px" }}>
        <div style={{ width: "46px", height: "46px", borderRadius: "999px", background: "#CB2E41", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>✓</div>
        <div style={{ marginTop: "18px", fontSize: "22px", fontWeight: 500, letterSpacing: "-0.02em" }}>You're booked, {values.name.trim().split(" ")[0]}.</div>
        <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: 1.6, color: "#C9C5C3" }}>
          {day} · {time} at Booth 1, Exhibition Hall. Our team will follow up at {values.email.trim()} to confirm.
        </p>
      </div>
    );
  }

  const fields: { key: Field; label: string; type: string; autoComplete: string; optional?: boolean }[] = [
    { key: "name", label: "Name", type: "text", autoComplete: "name" },
    { key: "email", label: "Email", type: "email", autoComplete: "email" },
    { key: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
    { key: "company", label: "Company name", type: "text", autoComplete: "organization", optional: true },
  ];

  return (
    <form onSubmit={submit} noValidate style={{ marginTop: "28px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "14px 16px", borderRadius: "14px", background: "rgba(203,46,65,0.14)", border: "1px solid rgba(203,46,65,0.45)" }}>
        <div>
          <div style={labelStyle}>Your slot</div>
          <div style={{ marginTop: "6px", fontSize: "15px", color: "#fff" }}>{day} · {time} · Booth 1</div>
        </div>
        <button type="button" onClick={onBack} style={{ background: "none", border: "none", color: "#F2A7B0", fontSize: "13px", fontFamily: "inherit", cursor: "pointer", whiteSpace: "nowrap" }}>
          ← Change time
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "22px" }}>
        {fields.map((f) => (
          <label key={f.key} style={{ display: "block" }}>
            <span style={labelStyle}>
              {f.label}
              {f.optional && <span style={{ color: "#5E5A58", letterSpacing: "0.12em" }}> · optional</span>}
            </span>
            <input
              type={f.type}
              name={f.key}
              autoComplete={f.autoComplete}
              value={values[f.key]}
              onChange={update(f.key)}
              aria-invalid={!!errors[f.key]}
              style={inputStyle(!!errors[f.key])}
            />
            {errors[f.key] && <span style={{ display: "block", marginTop: "6px", fontSize: "12.5px", color: "#F2A7B0" }}>{errors[f.key]}</span>}
          </label>
        ))}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="afsa-book"
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "24px", background: "#CB2E41", color: "#fff", padding: "17px 24px", borderRadius: "999px", fontSize: "15px", fontWeight: 500, fontFamily: "inherit", border: "none", cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.7 : 1, transition: "background .3s ease, color .3s ease" }}
      >
        {status === "sending" ? "Booking…" : "Confirm booking →"}
      </button>
      {status === "failed" && (
        <p role="alert" style={{ margin: "14px 0 0", fontSize: "13px", lineHeight: 1.55, color: "#F2A7B0" }}>
          Something went wrong sending your booking. Please try again, or stop by Booth 1 during show hours.
        </p>
      )}
    </form>
  );
};

export default AfsaBookingDetails;
