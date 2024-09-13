import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Label, TextInput } from "flowbite-react";
import axios from 'axios';
import useAxiosSecure, { axiosSecure } from '../../Hooks/useAxiosSecure';

const Add = () => {
    const { register, handleSubmit, reset, formState: { errors }, setValue, watch } = useForm();
    const [isStudent, setIsStudent] = useState(false); // State to track if occupation is student
    const imageHostingApi = 'https://api.imgbb.com/1/upload?key=fe740aa3ec54bedc61f2e7320ed14d7d';

    // Watch the occupation field to conditionally enable the institute field
    const occupation = watch("occupation");

    // Handle file input change
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append('image', file);

                const response = await axios.post(imageHostingApi, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                const imageUrl = response.data.data.url;
                setValue("martyrsImage", imageUrl); // Update the value in react-hook-form
            } catch (error) {
                console.error('Error uploading image to ImgBB', error);
            }
        }
    };

    const onSubmit = async (data) => {
        try {
            const response = await axiosSecure.post("/addmartyr", {
                ...data,
                status: 'pending',
                martyrsImage: data.martyrsImage 
            });

            console.log(response.data);
            reset();
        } catch (error) {
            console.error('Error submitting form data', error);
        }
    };

    // Update state when occupation changes
    useEffect(() => {
        // Convert occupation to lowercase for comparison
        setIsStudent(occupation?.toLowerCase() === 'student');
    }, [occupation]);

    return (
        <div className='font-Poppins mt-2 container mx-auto'>
            <form className="flex max-w-2xl border border-green-300 bg-gray-100 shadow-xl p-12 flex-col gap-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-xl font-semibold text-center">
                    <h1>Please Provide Information <br /> <span className="text-[#2F7955] text-2xl font-bold">About Martyr's</span> </h1>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="yourName" value="Your Name" />
                    </div>
                    <TextInput
                        id="yourName"
                        required
                        type="text"
                        placeholder="Your Name"
                        {...register("yourName")}
                    />
                    {errors.yourName && <p className="text-red-500 ml-1">Your Name is required.</p>}
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="martyrsName" value="Martyr's Name" />
                    </div>
                    <TextInput
                        id="martyrsName"
                        type="text"
                        required
                        placeholder="Martyr's Name"
                        {...register("martyrsName")}
                    />
                    {errors.martyrsName && <p className="text-red-500 ml-1">Martyr's Name is required.</p>}
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="MartyrsAddress" value="Martyr's Address" />
                    </div>
                    <TextInput
                        id="MartyrsAddress"
                        type="text"
                        placeholder="Martyr's Address"
                        {...register("MartyrsAddress")}
                    />
                    {errors.MartyrsAddress && <p className="text-red-500 ml-1">Martyr's Address is required.</p>}
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="age" value="Age" />
                    </div>
                    <TextInput
                        id="age"
                        type="number"
                        placeholder="Age"
                        {...register("age", )}
                    />
                    {errors.age && <p className="text-red-500 ml-1">Age is required.</p>}
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="occupation" value="Occupation" />
                    </div>
                    <TextInput
                        id="occupation"
                        type="text"
                        placeholder="Occupation"
                        {...register("occupation")}
                    />
                    {errors.occupation && <p className="text-red-500 ml-1">Occupation is required.</p>}
                </div>

                {/* Institute Field */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="institute" value="Martyr's Institute" />
                    </div>
                    <TextInput
                        id="institute"
                        type="text"
                        placeholder="Institute"
                        disabled={!isStudent} // Disable if occupation is not student
                        {...register("institute")}
                    />
                    {errors.institute && isStudent && <p className="text-red-500 ml-1">Institute is required if occupation is student.</p>}
                </div>

                {/* File Upload */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="martyrsImage" value="Upload Martyr's Image" />
                    </div>
                    <input
                        id="martyrsImage"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full mt-1"
                    />
                    {errors.martyrsImage && <p className="text-red-500 ml-1">Martyr's Image is required.</p>}
                </div>

                {/* Date Field */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="date" value="Date of martyrdom" />
                    </div>
                    <input
                        id="date"
                        type="date"
                        {...register("date")}
                        className="block w-full mt-1"
                    />
                    {errors.date && <p className="text-red-500 ml-1">Date is required.</p>}
                </div>

                {/* Details */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="details" value="How he/she became a MARTYR" />
                    </div>
                    <textarea
                        id="details"
                        placeholder="How he/she became a MARTYR"
                        className="textarea textarea-bordered w-full"
                        {...register("details")}
                    />
                    {errors.details && <p className="text-red-500 ml-1">Details are required.</p>}
                </div>

                {/* New Fields */}
                

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="biography" value="short Biography" />
                    </div>
                    <textarea
                        id="biography"
                        placeholder="Biography"
                        className="textarea textarea-bordered w-full"
                        {...register("biography")}
                    />
                    {errors.biography && <p className="text-red-500 ml-1">Biography is required.</p>}
                </div>

                {/* Submit Button */}
                <div className='flex items-center justify-center'>
                    <Button className='bg-[#0B4838]' type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default Add;
