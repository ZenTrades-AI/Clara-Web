import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CallTranscriptContent } from "./CallTranscriptContent";

interface CallListeningPopupProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const CallListeningPopup = ({ open, onOpenChange }: CallListeningPopupProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-[#F8F9FA]">
                <CallTranscriptContent
                    className="py-6"
                />
            </DialogContent>
        </Dialog>
    );
};
