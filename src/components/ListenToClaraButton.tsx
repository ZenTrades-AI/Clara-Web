import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { CallListeningPopup } from "./CallListeningPopup";
import { cn } from "@/lib/utils";

interface ListenToClaraButtonProps {
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export const ListenToClaraButton = ({ className, variant = "outline" }: ListenToClaraButtonProps) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            <Button
                variant={variant}
                className={cn(
                    "px-8 py-6 rounded-full text-lg font-semibold transition-all group",
                    className
                )}
                onClick={() => setIsPopupOpen(true)}
            >
                <Play className="mr-2 w-5 h-5 fill-current" /> Listen to Clara
            </Button>
            <CallListeningPopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
        </>
    );
};
