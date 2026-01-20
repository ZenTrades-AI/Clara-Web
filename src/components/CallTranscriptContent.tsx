import CallTranscriptCard from "./CallTranscriptCard";
import { mockTranscripts } from "@/data/transcripts";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CallTranscriptContentProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

export const CallTranscriptContent = ({
    title = "Never miss a call again.",
    subtitle = "Hear how Clara turns real calls into booked jobs.",
    className = ""
}: CallTranscriptContentProps) => {
    const navigate = useNavigate();

    const handleNavigateToCaseStudies = () => {
        navigate("/case-studies");
        window.scrollTo(0, 0);
    };

    return (
        <div className={`w-full ${className}`}>
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {mockTranscripts.map((transcript) => (
                    <CallTranscriptCard key={transcript.id} transcript={transcript} />
                ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
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
    );
};
