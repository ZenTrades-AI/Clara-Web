import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const StayUpdated = () => {
    return (
        <section className="py-20 px-6 bg-[hsl(var(--deep-black))]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Stay Updated with Clara Insights
                </h2>
                <p className="text-lg text-white/70 mb-8">
                    Get monthly insights on AI trends, customer success stories, and product updates
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white border-white h-12"
                    />
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary-dark text-white px-8 h-12 font-semibold whitespace-nowrap"
                    >
                        Subscribe
                    </Button>
                </div>

                <p className="text-sm text-white/50 mt-4">
                    No spam. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
};

export default StayUpdated;
