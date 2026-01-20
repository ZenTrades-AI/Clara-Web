import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/Blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { openHubSpotForm } from "@/utils/hubspotForm";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const BlogIndex = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get("category");

    // Map URL param to category name (simple mapping for now, or direct use if names match)
    // The nav uses: product, ai, operations, industry. 
    // Our categories are: All, Operations, Dispatching, Industry Trends, Growth, Technology, Trends.
    // Let's matching broadly or default to All.

    const getCategoryFromParam = (param: string | null) => {
        if (!param) return "All";
        const map: Record<string, string> = {
            "ai": "Technology",
            "operations": "Operations",
            "industry": "Industry Trends",
            "product": "Growth" // Mapping product to Growth as best guess/placeholder
        };
        return map[param.toLowerCase()] || "All";
    };

    const [selectedCategory, setSelectedCategory] = useState(getCategoryFromParam(initialCategory));
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    const categories = [
        "All",
        "Operations",
        "Dispatching",
        "Industry Trends",
        "Growth",
        "Technology",
        "Trends"
    ];

    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    // Calculate pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // Reset page when category changes
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Advanced Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clara-red/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clara-red/10 text-clara-red text-xs font-bold uppercase tracking-wider mb-6 border border-clara-red/20">
                            Start Reading
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            Insights for the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clara-red to-orange-500">
                                Modern Contractor
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
                            Operational strategies, industry trends, and practical guides to help you scale your field service business with confidence.
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryChange(category)}
                                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${selectedCategory === category
                                        ? "bg-clara-navy text-white shadow-lg shadow-clara-navy/25 scale-105"
                                        : "bg-white text-gray-600 border border-gray-200 hover:border-clara-red/30 hover:text-clara-red hover:shadow-md"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                        {currentPosts.length > 0 ? (
                            currentPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20">
                                <p className="text-xl text-gray-500">No posts found for this category.</p>
                                <button
                                    onClick={() => handleCategoryChange("All")}
                                    className="mt-4 text-clara-red font-bold hover:underline"
                                >
                                    View all posts
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-12 mb-20">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 font-medium hover:border-clara-red hover:text-clara-red disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-colors"
                            >
                                Previous
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                <button
                                    key={number}
                                    onClick={() => handlePageChange(number)}
                                    className={`w-10 h-10 rounded-full font-bold transition-all ${currentPage === number
                                        ? "bg-clara-navy text-white shadow-lg"
                                        : "text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    {number}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 font-medium hover:border-clara-red hover:text-clara-red disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    )}

                    {/* Newsletter / CTA Section */}
                    <div className="max-w-5xl mx-auto mt-32 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-clara-red to-orange-500 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="relative bg-white border border-gray-100 rounded-[3rem] p-12 md:p-16 text-center shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-clara-red/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
                                Ready to modernize your operations?
                            </h2>
                            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto relative z-10">
                                Join hundreds of contractors using Clara to streamline their business.
                            </p>
                            <Button
                                className="bg-clara-navy hover:bg-[#0B1121] text-white px-10 py-7 text-lg rounded-full shadow-xl transition-all hover:scale-105"
                                onClick={openHubSpotForm}
                            >
                                Book a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogIndex;
