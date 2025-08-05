import React, { useContext } from 'react';
import { blogData } from '../../Data/HeroSectionData';

function Blog() {

    return (
        <div 
            id="blog" 
            className="py-12 px-4 md:px-8 lg:px-12 bg-white"
        >
            <div className="text-center mb-12">
                <h1 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-black"
                >
                    Blog
                </h1>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {blogData.map((blog) => (
                    <div 
                        key={blog.id} 
                        className="relative flex-1 border-2 border-black rounded-[20px] overflow-hidden group p-4"
                    >
                        <div className="relative overflow-hidden rounded-t-xl">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-80 object-cover rounded-[20px] mb-4 transition duration-300 group-hover:brightness-75 group-hover:scale-105 group-active:brightness-75 group-active:scale-105"
                            />
                            
                            <div className="absolute  inset-0 flex flex-col items-center justify-center  bg-black/50 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300 p-4">
                                <p className="text-white text-base font-medium mb-4 px-4">
                                    {blog.description}
                                </p>
                                <a
                                    href={blog.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-semibold px-4 py-2 border-2 border-white rounded hover:bg-white hover:text-black transition-colors duration-300"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                        
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                            <p className="text-sm text-gray-500">{blog.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;