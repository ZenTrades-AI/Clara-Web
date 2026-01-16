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
    background: isPlaying ? 'linear-gradient(135deg, #FFFFFF 0%, #FFF5F5 100%)' : 'white',
    border: isPlaying ? '1px solid #D32F2F' : '1px solid hsl(240 5% 90%)',
    boxShadow: isPlaying ? '0 10px 25px -5px rgba(211, 47, 47, 0.1), 0 8px 10px -6px rgba(211, 47, 47, 0.05)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.5s ease',
    padding: '1.5rem',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column' as const
  };

  const playButtonStyle = {
    background: 'hsl(240 5% 96%)',
    color: '#D32F2F',
    border: '1px solid hsl(240 5% 90%)',
    transition: 'all 0.3s ease',
    width: '4rem',
    height: '4rem',
    borderRadius: '9999px',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: isPlaying ? '0 0 0 4px rgba(211, 47, 47, 0.1)' : 'none'
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
    color: '#D32F2F',
    fontWeight: 700,
    fontSize: '0.75rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '0.25rem'
  };

  const speakerCustomerStyle = {
    color: 'hsl(240 5% 40%)',
    fontWeight: 700,
    fontSize: '0.75rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '0.25rem'
  };

  const messageActiveStyle = {
    background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
    border: 'none',
    borderRadius: '0.5rem',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontWeight: 500,
    marginBottom: '0.75rem',
    transition: 'all 0.3s ease-in-out',
    color: 'white',
    boxShadow: '0 4px 6px -1px rgba(211, 47, 47, 0.2), 0 2px 4px -1px rgba(211, 47, 47, 0.1)'
  };

  const messageHoverStyle = {
    background: 'transparent',
    borderRadius: '0.5rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    marginBottom: '0.75rem',
    color: 'hsl(240 5% 40%)',
    fontSize: '0.875rem',
    lineHeight: '1.5'
  };

  const viewTranscriptButtonStyle = {
    background: 'white',
    border: '1px solid hsl(240 5% 90%)',
    color: 'hsl(240 5% 40%)',
    fontWeight: 600,
    width: '100%',
    transition: 'all 0.3s ease',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    marginTop: 'auto',
    fontSize: '0.875rem'
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
        <span style={{ fontSize: '0.875rem', color: isPlaying ? 'rgba(255,255,255,0.7)' : 'hsl(240 10% 70%)' }}>{transcript.duration}</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePlayPause}
          style={playButtonStyle}
          onMouseEnter={(e) => {
            if (!isPlaying) {
              e.currentTarget.style.background = 'hsl(240 5% 92%)';
              e.currentTarget.style.transform = 'scale(1.05)';
            } else {
              e.currentTarget.style.transform = 'scale(1.05)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isPlaying) {
              e.currentTarget.style.background = 'hsl(240 5% 96%)';
              e.currentTarget.style.transform = 'scale(1)';
            } else {
              e.currentTarget.style.transform = 'scale(1)';
            }
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
            <div style={{ textAlign: 'center', color: isPlaying ? 'rgba(255,255,255,0.6)' : 'hsl(240 10% 60%)', padding: '0.5rem' }}>
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
          if (!isPlaying) {
            e.currentTarget.style.background = 'hsl(240 5% 96%)';
            e.currentTarget.style.borderColor = 'hsl(240 5% 80%)';
            e.currentTarget.style.color = 'hsl(240 5% 20%)';
          } else {
            e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isPlaying) {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.borderColor = 'hsl(240 5% 90%)';
            e.currentTarget.style.color = 'hsl(240 5% 40%)';
          } else {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
          }
        }}
      >
        {showFullTranscript ? "Hide" : "View"} Full Transcript
      </Button>
    </Card>
  );
};

export default CallTranscriptCard;