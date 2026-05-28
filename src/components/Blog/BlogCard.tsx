import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <article className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 overflow-hidden flex flex-col h-full group relative">
            {post.coverImage && (
                <div className="h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gray-200" />
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}

            <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-gray-500 mb-6">
                    <span className="bg-clara-red/5 text-clara-red border border-clara-red/10 px-3 py-1 rounded-full uppercase tracking-wide text-[10px]">
                        {post.category}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-clara-red transition-colors line-clamp-2 leading-tight">
                    <Link to={`/resources/blogs/${post.slug}`} className="before:absolute before:inset-0">
                        {post.title}
                    </Link>
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                </p>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-gray-900 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-[10px]">
                            {post.author.charAt(0)}
                        </div>
                        {post.author}
                    </span>
                    <div className="inline-flex items-center text-clara-red font-bold text-sm group-hover:gap-2 transition-all gap-1">
                        Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
