import React from 'react';
import { blogData } from '../../Data/HeroSectionData';

function Blog() {
    return (
        <div
            id="blog"
            className="py-16 px-4 md:px-8 lg:px-12 bg-white"
        >
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                    Blogs
                </h1>
                <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {blogData.map((blog) => (
                    <div
                        key={blog.id}
                        className="relative flex-1 border border-gray-200 rounded-lg overflow-hidden group bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-64 object-cover group-hover:grayscale-0 transition-all duration-500"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <p className="text-white text-md font-light mb-6 line-clamp-3">
                                    {blog.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-white text-xs font-medium">{blog.date}</span>
                                    <a
                                        href={blog.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-sm font-medium hover:underline flex items-center"
                                    >
                                        Read Article
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl uppercase font-bold mb-2 text-gray-900 group-hover:text-black transition-colors duration-300">
                                {blog.title}
                            </h3>
                            <div className="flex items-center text-gray-500 text-xs">
                                {/* <span>5 min read</span> */}
                                {/* <span className="mx-2">•</span> */}
                                <span>{blog.category}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="text-center mt-16">
                <a
                    href="#"
                    className="inline-block px-8 py-3 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                >
                    View All Articles
                </a>
            </div> */}
        </div>
    );
}

export default Blog;