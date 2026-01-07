import CallTranscriptCard from "./CallTranscriptCard";
import { Button } from "@/components/ui/button";
import { Phone, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface TranscriptMessage {
  speaker: "Clara AI" | "Customer";
  text: string;
  timestamp: number;
  duration: number;
}

export interface CallTranscript {
  id: string;
  title: string;
  duration: string;
  audioUrl?: string;
  transcript: TranscriptMessage[];
}

const mockTranscripts: CallTranscript[] = [
  {
    id: "1",
    title: "Foundation Repair Consultation",
    duration: "2:57",
    audioUrl: "/audio/recording_2.wav",
    transcript: [
      {
        speaker: "Clara AI",
        text: "Keystone Foundation Repair, this is Jeremy on a recorded line.",
        timestamp: 0,
        duration: 5
      },
      {
        speaker: "Customer",
        text: "Hi Jeremy, my name is Chris Walter.",
        timestamp: 5,
        duration: 4
      },
      {
        speaker: "Customer",
        text: "I've gotten your name as a referral. We have a rental unit that we need to get a look at, a foundational question we have.",
        timestamp: 9,
        duration: 10
      },
      {
        speaker: "Customer",
        text: "It's an old building in downtown Carlisle. Looks like there's been some water that's trickling in and kind of eating away at a little bit of the mortar in the stacks.",
        timestamp: 19,
        duration: 13
      },
      {
        speaker: "Clara AI",
        text: "Thanks for sharing that, Chris. I appreciate the details. Could I get the service address for your rental unit in downtown Carlisle?",
        timestamp: 32,
        duration: 7
      },
      {
        speaker: "Clara AI",
        text: "And may I have your best contact number and email address as well? This will help us get a technician out for a free inspection and assessment.",
        timestamp: 39,
        duration: 9
      },
      {
        speaker: "Customer",
        text: "Yep, it's 36 Locust Avenue, Carlisle PA 17013. This number is 717-991-5979.",
        timestamp: 48,
        duration: 18
      },
      {
        speaker: "Clara AI",
        text: "Thank you, Chris. I have the address as 36 Locust Avenue, Carlisle, Pennsylvania 17013, and your contact number is 717-991-5979.",
        timestamp: 66,
        duration: 13
      },
      {
        speaker: "Clara AI",
        text: "Could I get your email address as well? And just to confirm, you're looking for an inspection due to water trickling in and some mortar erosion in the foundation and stacks, correct?",
        timestamp: 79,
        duration: 9
      },
      {
        speaker: "Customer",
        text: "I'd like to get an estimate on it, yes.",
        timestamp: 88,
        duration: 5
      },
      {
        speaker: "Clara AI",
        text: "Absolutely, Chris. We offer a free site visit where one of our technicians will come out, assess the foundation and the water issue, and then provide an accurate estimate based on what they find.",
        timestamp: 93,
        duration: 11
      },
      {
        speaker: "Clara AI",
        text: "Could you please share your email address so I can complete your request? Also, is there a particular day or time you're generally available for the inspection?",
        timestamp: 104,
        duration: 6
      },
      {
        speaker: "Customer",
        text: "Email address is chris C H R I S at newlifecommunity.us.",
        timestamp: 113,
        duration: 10
      },
      {
        speaker: "Clara AI",
        text: "Thank you, Chris. I have your email as chris@newlifecommunity.us. Is there a day or time that works best for you for the inspection?",
        timestamp: 123,
        duration: 7
      },
      {
        speaker: "Clara AI",
        text: "Our business hours are Monday to Friday, 7:30 a.m. to 4:30 p.m. Eastern time. Let me know your general availability, and I will have our team reach out to confirm the details.",
        timestamp: 128,
        duration: 13
      },
      {
        speaker: "Customer",
        text: "General availability would be 9:30 to 4, most weekdays.",
        timestamp: 141,
        duration: 9
      },
      {
        speaker: "Clara AI",
        text: "Perfect, Chris. I've noted your general availability is 9:30 a.m. to 4:00 p.m. on most weekdays. Thanks for sharing all those details.",
        timestamp: 150,
        duration: 8
      },
      {
        speaker: "Clara AI",
        text: "I will get someone on this right away, and a team member will be in touch soon to confirm the inspection and provide your estimate. Is there anything else I can help you with today?",
        timestamp: 158,
        duration: 10
      },
      {
        speaker: "Customer",
        text: "No, all for today.",
        timestamp: 168,
        duration: 4
      },
      {
        speaker: "Clara AI",
        text: "Thanks so much for calling Chris. We look forward to helping you with your foundation concerns. Hope you have a great day ahead.",
        timestamp: 172,
        duration: 5
      }
    ]
  },
  {
    id: "2",
    title: "Fire Protection Services Call",
    duration: "0:25",
    audioUrl: "/audio/clara_montage.mp3",
    transcript: [
      {
        speaker: "Clara AI",
        text: "My main focus is to help you with anything related to fire protection services, appointments, and questions.",
        timestamp: 0,
        duration: 4
      },
      {
        speaker: "Clara AI",
        text: "If you have any questions or need assistance, I am here to help.",
        timestamp: 4,
        duration: 5
      },
      {
        speaker: "Customer",
        text: "Well, that's pretty dang good.",
        timestamp: 9,
        duration: 2
      },
      {
        speaker: "Customer",
        text: "cloudy outside.",
        timestamp: 11,
        duration: 1
      },
      {
        speaker: "Customer",
        text: "What's the weather like where you are?",
        timestamp: 12,
        duration: 2
      },
      {
        speaker: "Clara AI",
        text: "I'm glad to hear you are doing well.",
        timestamp: 14,
        duration: 2
      },
      {
        speaker: "Clara AI",
        text: "I do not actually experience the weather myself, but I am always here with a sunny attitude, rain or shine.",
        timestamp: 16,
        duration: 5
      },
      {
        speaker: "Clara AI",
        text: "Is there something I can help you with today?",
        timestamp: 21,
        duration: 2
      },
      {
        speaker: "Customer",
        text: "Oh, that was pretty cool answer.",
        timestamp: 23,
        duration: 2
      }
    ]
  },
  {
    id: "3",
    title: "Fire Sprinkler Inspection Call",
    duration: "1:31",
    audioUrl: "/audio/fire_protection_call.mp3",
    transcript: [
      {
        speaker: "Customer",
        text: ", how you doing?",
        timestamp: 0,
        duration: 1
      },
      {
        speaker: "Customer",
        text: "I had a fire marshal come by, my property today, and he left a notice saying that I need to get an annual fire sprinkler inspection.",
        timestamp: 1,
        duration: 7
      },
      {
        speaker: "Customer",
        text: "Is this something that you guys do?",
        timestamp: 8,
        duration: 4
      },
      {
        speaker: "Clara AI",
        text: "I'm doing well, thank you for asking.",
        timestamp: 12,
        duration: 3
      },
      {
        speaker: "Clara AI",
        text: "And yes, we absolutely handle annual fire sprinkler inspections.",
        timestamp: 15,
        duration: 3
      },
      {
        speaker: "Clara AI",
        text: "This includes checking water pressure, valves, gauges, and sprinkler heads, as well as testing for leaks or obstructions.",
        timestamp: 18,
        duration: 7
      },
      {
        speaker: "Clara AI",
        text: "We'll also provide a compliance report to meet NFPA 25 standards.",
        timestamp: 25,
        duration: 5
      },
      {
        speaker: "Clara AI",
        text: "Could I get your name, phone number, and the name of your property or business so we can get more question.",
        timestamp: 30,
        duration: 4
      },
      {
        speaker: "Customer",
        text: "He also, he also notified me that apparently the flow switch is not connected.",
        timestamp: 34,
        duration: 7
      },
      {
        speaker: "Customer",
        text: "what exactly is the flow switch?",
        timestamp: 41,
        duration: 3
      },
      {
        speaker: "Clara AI",
        text: "Great question.",
        timestamp: 44,
        duration: 1
      },
      {
        speaker: "Clara AI",
        text: "A flow switch is a critical component of your fire sprinkler system.",
        timestamp: 45,
        duration: 4
      },
      {
        speaker: "Clara AI",
        text: "It detects water movement in the pipes when a sprinkler head activates and it sends a signal to your fire alarm system to alert you and the monitoring center of a potential fire.",
        timestamp: 49,
        duration: 9
      },
      {
        speaker: "Clara AI",
        text: "If it's not connected, your system might not properly notify you in case of an emergency.",
        timestamp: 58,
        duration: 4
      },
      {
        speaker: "Clara AI",
        text: "We can definitely take a look at that during the inspection and ensure everything is functioning as it should.",
        timestamp: 62,
        duration: 5
      },
      {
        speaker: "Clara AI",
        text: "Would you like to go ahead and schedule a visit?",
        timestamp: 67,
        duration: 4
      },
      {
        speaker: "Customer",
        text: "Yes, do you have anything available for this week?",
        timestamp: 71,
        duration: 4
      },
      {
        speaker: "Clara AI",
        text: "Let me gather a few details so we can check availability for you.",
        timestamp: 75,
        duration: 3
      },
      {
        speaker: "Clara AI",
        text: "Could you please share your name, phone number, the name of your property or business, and any specific days or times this week that work best for you?",
        timestamp: 78,
        duration: 8
      },
      {
        speaker: "Customer",
        text: ", yes, my name is John Doe.",
        timestamp: 86,
        duration: 5
      },
      {
        speaker: "Customer",
        text: "And my phone number is 555-555-1212.",
        timestamp: 91,
        duration: 6
      }
    ]
  }
];

interface CallTranscriptSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}

const CallTranscriptSection: React.FC<CallTranscriptSectionProps> = ({
  title = "Never miss a call again.",
  subtitle = "Hear how Clara turns real calls into booked jobs.",
  buttonText = "Try Clara Live +1 (570) 755-4859",
  className = ""
}) => {
  const navigate = useNavigate();

  const handleNavigateToCaseStudies = () => {
    navigate("/case-studies");
    window.scrollTo(0, 0);
  };

  return (
    <section
      id="call-listening-section"
      className={`py-20 md:py-28 px-6 bg-[#F8F9FA] ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {title.split(" ").map((word, index, arr) => {
              const isLast = index === arr.length - 1;
              return isLast ? (
                <span
                  key={index}
                  className="text-primary underline underline-offset-4 decoration-2"
                >
                  {word}{" "}
                </span>
              ) : (
                <span key={index}>{word} </span>
              );
            })}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mockTranscripts.map((transcript) => (
            <CallTranscriptCard key={transcript.id} transcript={transcript} />
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold bg-clara-red text-white shadow-lg hover:shadow-xl hover:bg-clara-red/90 transition-all hover:-translate-y-0.5 hover:scale-[1.02]"
            onClick={() => window.open("tel:+15707554859", "_self")}
          >
            <Phone size={18} className="mr-2" />
            {buttonText}
          </Button>

          <Button
            variant="outline"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold border-2 border-clara-red text-clara-red bg-white hover:bg-clara-red hover:text-white transition-all"
            onClick={handleNavigateToCaseStudies}
          >
            <Play size={18} className="mr-2" />
            See All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallTranscriptSection;
