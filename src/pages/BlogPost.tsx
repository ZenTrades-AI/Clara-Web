import { useParams, Navigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Linkedin, Twitter, Facebook, ChevronRight } from "lucide-react";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { useEffect, useState } from "react";

const InContentCTA = () => (
    <div className="relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-clara-navy via-[#0F172A] to-clara-navy p-1">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-clara-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative bg-[#0B1121] rounded-[2.3rem] p-8 md:p-12 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-clara-red/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-left max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clara-red/10 text-clara-red text-xs font-bold uppercase tracking-wider mb-4 border border-clara-red/20">
                        Top Rated Software
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        Stop losing revenue to <span className="text-transparent bg-clip-text bg-gradient-to-r from-clara-red to-orange-400">inefficiency</span>
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Join 500+ top-performing contractors who use Clara to automate scheduling, calls, and cash flow.
                    </p>
                </div>
                <Button
                    onClick={openHubSpotForm}
                    className="group bg-white hover:bg-gray-50 text-clara-navy px-8 py-7 rounded-2xl font-bold text-lg transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] hover:scale-105 shrink-0 w-full md:w-auto flex items-center justify-center gap-2"
                >
                    Book a Demo
                    <ChevronRight className="w-5 h-5 text-clara-red group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    </div>
);

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);
    const [progress, setProgress] = useState(0);

    // Scroll Progress Logic
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setProgress(Number(scroll));
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update Meta Title and Description
    useEffect(() => {
        if (post) {
            document.title = `${post.title} | Clara`;

            // Update Meta Description
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', post.excerpt);
        }
    }, [post]);

    if (!post) {
        return <Navigate to="/resources/blogs" replace />;
    }

    // Split content logic for CTA injection
    // We'll split after the second <h2> tag
    const splitContent = () => {
        const splitMarker = '<h2>';
        const parts = post.content.split(splitMarker);

        // If we have enough sections, inject CTA after the 3rd section (index 3)
        // Note: split removes the delimiter, so we need to add it back

        if (parts.length > 3) {
            const firstPart = parts.slice(0, 3).join(splitMarker);
            // Re-add the <h2> to the second part since split removed it from the start of subsequent parts
            const secondPart = splitMarker + parts.slice(3).join(splitMarker);

            return {
                hasSplit: true,
                part1: firstPart,
                part2: secondPart
            };
        }

        return { hasSplit: false, part1: post.content, part2: '' };
    };

    const { hasSplit, part1, part2 } = splitContent();

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 h-1.5 bg-gray-100 w-full z-50">
                <div
                    className="h-full bg-clara-red transition-all duration-150 ease-out"
                    style={{ width: `${progress * 100}%` }}
                />
            </div>

            <article className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <Link to="/resources/blogs" className="inline-flex items-center text-gray-500 hover:text-clara-red mb-8 transition-colors text-sm font-medium bg-gray-50 px-4 py-2 rounded-full">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-500 border-b border-gray-100 pb-12">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readingTime}
                            </span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="text-clara-red font-semibold">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="max-w-7xl mx-auto">
                        <div className="prose prose-xl prose-slate max-w-none 
                            prose-headings:font-bold prose-headings:text-gray-900 
                            prose-p:text-gray-600 prose-p:leading-relaxed 
                            [&_p]:mb-6 [&_h2]:mt-20 [&_h2]:mb-4 [&_li]:mb-2 [&_ul]:my-8 
                            prose-img:rounded-3xl prose-img:shadow-xl">
                            <div dangerouslySetInnerHTML={{ __html: part1 }} />
                        </div>

                        {hasSplit && (
                            <div className="my-16">
                                <InContentCTA />
                            </div>
                        )}

                        {hasSplit && (
                            <div className="prose prose-xl prose-slate max-w-none 
                                prose-headings:font-bold prose-headings:text-gray-900 
                                prose-p:text-gray-600 prose-p:leading-relaxed 
                                [&_p]:mb-6 [&_h2]:mt-20 [&_h2]:mb-4 [&_li]:mb-2 [&_ul]:my-8 
                                prose-img:rounded-3xl prose-img:shadow-xl">
                                <div dangerouslySetInnerHTML={{ __html: part2 }} />
                            </div>
                        )}
                    </div>

                    {/* Bottom CTA */}
                    <div className="max-w-5xl mx-auto mt-32 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-clara-red to-orange-500 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="relative bg-white border border-gray-100 rounded-[3rem] p-12 md:p-16 text-center shadow-2xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-clara-red via-orange-500 to-clara-red" />
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-clara-red/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10 tracking-tight">
                                Ready to modernize your field service business?
                            </h2>
                            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
                                Join hundreds of contractors using Clara to streamline operations, improve cash flow, and grow their revenue.
                            </p>
                            <Button
                                className="bg-clara-navy hover:bg-[#0B1121] text-white px-12 py-8 text-xl rounded-full font-bold relative z-10 shadow-xl shadow-clara-navy/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-clara-navy/30"
                                onClick={openHubSpotForm}
                            >
                                Book a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPost;
