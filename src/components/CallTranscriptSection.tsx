import { CallTranscriptContent } from "./CallTranscriptContent";

interface CallTranscriptSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}

const CallTranscriptSection: React.FC<CallTranscriptSectionProps> = ({
  title,
  subtitle,
  className = ""
}) => {
  return (
    <section
      id="call-listening-section"
      className={`py-20 md:py-28 px-6 bg-[#F8F9FA] ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <CallTranscriptContent title={title} subtitle={subtitle} />
      </div>
    </section>
  );
};

export default CallTranscriptSection;

