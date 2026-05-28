import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import CallTranscriptCard from "@/components/CallTranscriptCard";
import { mockTranscripts } from "@/data/transcripts";

interface AudioPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const AudioPopup = ({ isOpen, onClose }: AudioPopupProps) => {
    // Using the "Fire Protection Services Call" (ID: 2) as it's a concise example
    const transcript = mockTranscripts.find((t) => t.id === "2") || mockTranscripts[0];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-4">
                        Hear Clara Live
                    </DialogTitle>
                </DialogHeader>
                <div className="p-4">
                    <CallTranscriptCard transcript={transcript} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AudioPopup;
