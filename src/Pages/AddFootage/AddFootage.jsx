
import { useForm } from 'react-hook-form';
import { Button, Label, TextInput } from "flowbite-react";
import { axiosSecure } from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const AddFootage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axiosSecure.post("/addFootage", {
                ...data,status:"pending",
                
            });

            if(response.data){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Video Added Succefully. wait for admin response",
                    showConfirmButton: false,
                    timer: 8500
                  });
                reset();
            }
            
        } catch (error) {
            console.error('Error submitting form data', error);
        }
    };

    return (
        <div className='font-Poppins mt-10 container mx-auto'>
            <form className="flex max-w-2xl border border-green-300 bg-gray-100 shadow-xl p-12 flex-col gap-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                

                {/* Video Title Field */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="videoTitle" value="Video Title" />
                    </div>
                    <TextInput
                        id="videoTitle"
                        type="text"
                        placeholder="Video Title"
                        {...register("videoTitle", { required: "Video Title is required." })}
                    />
                    {errors.videoTitle && <p className="text-red-500 ml-1">{errors.videoTitle.message}</p>}
                </div>

                {/* Google Drive Link Field */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="driveLink" value="Google Drive Link" />
                    </div>
                    <TextInput
                        id="driveLink"
                        type="text"
                        placeholder="Google Drive Link"
                        {...register("driveLink", { required: "Google Drive Link is required." })}
                    />
                    {errors.driveLink && <p className="text-red-500 ml-1">{errors.driveLink.message}</p>}
                </div>

                {/* Date of Martyrdom Field */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="date" value="Date of Event" />
                    </div>
                    <input
                        id="date"
                        type="date"
                        {...register("date", { required: "Date of Martyrdom is required." })}
                        className="block w-full mt-1"
                    />
                    {errors.date && <p className="text-red-500 ml-1">{errors.date.message}</p>}
                </div>

                {/* Submit Button */}
                <div className='flex items-center justify-center'>
                    <Button className='bg-[#0B4838]' type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default AddFootage;
