import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import useBlog from "../../Hooks/useBlog";
import BlogPost from "./BlogPost";

const Blog = () => {
    const { posts, isLoading, error, refetch } = useBlog();
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();
    const imageHostingApi = 'https://api.imgbb.com/1/upload?key=fe740aa3ec54bedc61f2e7320ed14d7d';

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    // Handle image file change and preview
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                // Preview the selected image
                const imageUrlPreview = URL.createObjectURL(file);
                setPreviewImage(imageUrlPreview);

                const formData = new FormData();
                formData.append('image', file);

                // Upload the image to ImgBB
                const response = await axios.post(imageHostingApi, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                const imageUrl = response.data.data.url;
                setValue("attachImage", imageUrl); // Update form with the image URL
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    // Remove image preview
    const handleRemoveImage = () => {
        setPreviewImage('');
        setValue("attachImage", '');
    };

    // Handle form submission
    const onSubmit = async (data) => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString(); // You can format the date as needed
        const formattedTime = currentDate.toLocaleTimeString();

        try {
            const response = await axiosSecure.post("/blog", {
                ...data,
                status: 'pending',
                attachImage: data.attachImage || '',
                date: formattedDate,   // Insert current date
                time: formattedTime ,   // Insert current time
                support: 0,   
            });

            console.log('Blog submitted:', response.data);
            reset();
            closeModal();
        } catch (error) {
            console.error('Error submitting blog:', error);
        }
    };

    // Open Modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Close Modal
    const closeModal = () => {
        setIsModalOpen(false);
        setPreviewImage(''); // Reset the preview image when closing the modal
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading posts: {error.message}</p>;
    refetch()
    return (
        <div className="font-Poppins mt-6  container mx-auto">
            {/* Input field to trigger the modal */}
            <div className="flex justify-center mb-4">
                
                <input
                    type="text"
                    placeholder="Share Your Story with Us"
                    className="border w-[60%] border-gray-400 p-3 rounded-lg cursor-pointer"
                    onClick={openModal}
                />
            </div>
            <hr className='flex h-[1px] border-none bg-green-300 mx-auto w-[100%] ' />
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-red-500 text-lg font-bold"
                            onClick={closeModal}
                        >
                            &times;
                        </button>

                        <form
                            className="flex flex-col gap-6"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            {/* Story Field */}
                            <div>
                                <label htmlFor="details" className="block mb-2 font-bold">Share Your Story with Us</label>
                                <textarea
                                    id="post"
                                    placeholder="Share Your Story with Us"
                                    className="w-full h-36 p-3 border rounded"
                                    {...register("post", { required: "Please share your story." })}
                                />
                                {errors.post && <p className="text-red-500">{errors.post.message}</p>}
                            </div>

                            {/* Image Upload with Preview and Remove Option */}
                            <div>
                                {previewImage && (
                                    <div className="relative mt-4 flex flex-col items-center">
                                        <img
                                            src={previewImage}
                                            alt="Preview"
                                            className="w-full h-32 object-cover rounded-lg mx-auto mb-2"
                                        />
                                        {/* Remove Image Button */}
                                        <button
                                            type="button"
                                            className="absolute top-0 right-0 text-red-500 text-3xl"
                                            onClick={handleRemoveImage}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                )}
                                <label htmlFor="attachImage" className="block mb-2 font-bold">Attach Image</label>
                                <input
                                    id="attachImage"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="block w-full p-2 border rounded"
                                />
                                {errors.attachImage && <p className="text-red-500">{errors.attachImage.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-[#0B4838] text-white py-2 px-6 rounded hover:bg-green-900 transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="lg:grid mt-5 grid-cols-3 container mx-auto gap-5">
                {posts?.map(post => (
                    <BlogPost key={post._id} post={post} refetch={refetch} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
