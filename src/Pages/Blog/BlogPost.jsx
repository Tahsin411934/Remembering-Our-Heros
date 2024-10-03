import React, { useState } from 'react';

const BlogPost = ({ post, refetch }) => {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    // Helper function to calculate time ago
    const timeAgo = (dateString) => {
        const now = new Date();
        const postDate = new Date(dateString); // Convert the date string to a Date object
        const secondsAgo = Math.floor((now - postDate) / 1000); // Calculate the difference in seconds

        if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
        const minutesAgo = Math.floor(secondsAgo / 60);
        if (minutesAgo < 60) return `${minutesAgo} minutes ago`;
        const hoursAgo = Math.floor(minutesAgo / 60);
        if (hoursAgo < 24) return `${hoursAgo} hours ago`;
        const daysAgo = Math.floor(hoursAgo / 24);
        return `${daysAgo} days ago`;
    };

    return (
        <div className="max-w-lg p-4 shadow-md bg-gray-200 dark:text-gray-800">
            <div className="flex justify-between pb-4 border-b">
                <span className="text-sm text-gray-600">{timeAgo(`${post.date} ${post.time}`)}</span>
            </div>
            <div className="">
                <img 
                    src={post.attachImage} 
                    alt="Blog Post" 
                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" 
                />
                <div className="space-y-2 mt-2">
                    <p className="leading-snug dark:text-gray-600">
                        {isReadMore ? post.post : `${post.post.substring(0, 180)}...`}
                    </p>
                    <button
                        onClick={toggleReadMore}
                        className="text-blue-500 hover:underline"
                    >
                        {isReadMore ? 'Show Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
