import useBlog from "../../Hooks/useBlog";
import React, { useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";

const BlogPost = ({ post, refetch }) => {
    const [isSupported, setIsSupported] = React.useState(false);
    const [supportCount, setSupportCount] = React.useState(post.support);
    const [isOpen, setIsOpen] = useState(false);

    // Check local storage for support status on component mount
    React.useEffect(() => {
        const supportedPosts =
            JSON.parse(localStorage.getItem("supportedPosts")) || [];
        setIsSupported(supportedPosts.includes(post._id));
    }, [post._id]);

    const handleSupport = async (id) => {
        try {
            let updatedSupport = supportCount; // Use the current support count
            let supportedPosts =
                JSON.parse(localStorage.getItem("supportedPosts")) || [];

            if (isSupported) {
                // Remove support
                updatedSupport -= 1;
                supportedPosts = supportedPosts.filter((postId) => postId !== id);
                setIsSupported(false);
            } else {
                // Add support
                updatedSupport += 1;
                supportedPosts.push(id);
                setIsSupported(true);
            }

            await axiosSecure.put(`/blogs/${id}`, { support: updatedSupport });
            localStorage.setItem("supportedPosts", JSON.stringify(supportedPosts));
            setSupportCount(updatedSupport); // Update the support count in local state
            refetch(); // Call refetch after the update is successful
        } catch (error) {
            console.error("Error updating support:", error); // Handle errors appropriately
        }
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

    // Function to toggle the modal
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="max-w-lg p-4 shadow-md bg-gray-200 dark:text-gray-800">
            <div className="flex justify-between pb-4 border-b">
                <span className="text-sm text-gray-600">
                    {timeAgo(`${post.date} ${post.time}`)}
                </span>
            </div>
            <div>
                <img
                    src={post.attachImage}
                    alt="Blog Post"
                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="space-y-2 mt-2">
                    <p className="leading-snug dark:text-gray-600">
                        {post.post.substring(0, 180)}...
                    </p>
                    <button
                        onClick={toggleModal}
                        className="text-blue-500 hover:underline"
                    >
                        Read More
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-between">
                <div className="flex space-x-2 text-sm dark:text-gray-600">
                    <button
                        onClick={() => handleSupport(post._id)}
                        type="button"
                        className={`flex items-center p-1 text-xl space-x-1.5 ${isSupported ? "text-red-500" : "text-blue-700"}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of likes" className="w-6 h-6 fill-current dark:text-violet-600">
                            <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                            <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                        </svg>
                        <div className="flex item-center justify-evenly gap-20">
                            <span>{supportCount}</span> {/* Display the updated support count */}
                        </div>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-black opacity-50 absolute inset-0" onClick={toggleModal}></div>
                    <div className="bg-white p-6 rounded-lg shadow-lg z-10 lg:w-[70%] max-h-[80vh] overflow-hidden">
                        {/* <h2 className="text-xl font-bold mb-4">Modal Title</h2> */}
                        <div className="overflow-y-auto max-h-[60vh]">
                            <p className="mb-4">
                                {post.post}
                            </p>
                        </div>
                        <div className="text-end mt-3">
                            <button
                                onClick={toggleModal}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

const Blog = () => {
    const { posts, isLoading, error, refetch } = useBlog();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading posts...</p>;

    return (
        <div className="font-Poppins mt-16 container mx-auto">
            <div className="md:w-full text-center lg:text-left lg:w-[25%] lg:mt-0 mt-6">
                <h1 className="text-2xl font-bold text-[#0A3E32]">Community</h1>
            </div>
            <hr className='mt-3 lg:flex h-[1px] border-none bg-blue-300 mx-auto w-[100%]' />
            <div className="lg:grid mt-3 grid-cols-3 container mx-auto gap-5">
                {posts?.slice(0, 6).map((post) => (
                    <BlogPost key={post._id} post={post} refetch={refetch} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
