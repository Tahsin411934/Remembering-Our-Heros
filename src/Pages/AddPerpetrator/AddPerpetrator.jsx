
import { useForm } from 'react-hook-form';
import { Button, Label, TextInput } from "flowbite-react";
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure'; // Adjust the import path as needed

const AddPerpetrator = () => {
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();
    const imageHostingApi = 'https://api.imgbb.com/1/upload?key=fe740aa3ec54bedc61f2e7320ed14d7d';
    const axiosSecure = useAxiosSecure();

    const handleFileChange = async (event, fieldName) => {
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
                setValue(fieldName, imageUrl); // Update the value in react-hook-form
            } catch (error) {
                console.error('Error uploading image to ImgBB', error);
            }
        }
    };

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await axiosSecure.post("/AddPerpetrator", {...data, status:"panding"});
            console.log(response.data);
            reset();
        } catch (error) {
            console.error('Error submitting form data', error);
        }
    };

    return (
        <div className='font-Poppins mt-2 container mx-auto'>
            <form className="flex max-w-2xl border border-green-300 bg-gray-100 shadow-xl p-12 flex-col gap-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-xl font-semibold text-center">
                    <h1>Please Provide Information <br /> <span className="text-[#2F7955] text-2xl font-bold">About the Perpetrator</span></h1>
                </div>

                {/* Perpetrator's Name */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="perpetratorName1" value="Perpetrator's Name" />
                    </div>
                    <TextInput
                        id="perpetratorName1"
                        type="text"
                        placeholder="Perpetrator's Name"
                        {...register("perpetratorName1")}
                    />
                    {errors.perpetratorName1 && <p className="text-red-500 ml-1">Perpetrator's Name is required.</p>}
                </div>

              

                {/* Perpetrator's Age */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="perpetratorAge1" value="Perpetrator's Age" />
                    </div>
                    <TextInput
                        id="perpetratorAge1"
                        type="number"
                        placeholder="Perpetrator's Age"
                        {...register("perpetratorAge1")}
                    />
                    {errors.perpetratorAge1 && <p className="text-red-500 ml-1">Perpetrator's Age is required.</p>}
                </div>

                

                {/* Photo of the Perpetrator */}
               
                {/* Position/Designation */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="position" value="Position/Designation" />
                    </div>
                    <TextInput
                        id="position"
                        type="text"
                        placeholder="Position/Designation"
                        {...register("position")}
                    />
                    {errors.position && <p className="text-red-500 ml-1">Position/Designation is required.</p>}
                </div>

                {/* Address */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="address1" value="Address" />
                    </div>
                    <TextInput
                        id="address1"
                        type="text"
                        placeholder="Address"
                        {...register("address1")}
                    />
                    {errors.address1 && <p className="text-red-500 ml-1">Address is required.</p>}
                </div>

               

                {/* Social Profile Link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="socialProfileLink" value="Social Profile Link" />
                    </div>
                    <TextInput
                        id="socialProfileLink"
                        type="text"
                        placeholder="Social Profile Link"
                        {...register("socialProfileLink")}
                    />
                    {errors.socialProfileLink && <p className="text-red-500 ml-1">Social Profile Link is required.</p>}
                </div>

                {/* Perpetrator's Phone Number */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="phoneNumber" value="Perpetrator's Phone Number" />
                    </div>
                    <TextInput
                        id="phoneNumber"
                        type="text"
                        placeholder="Perpetrator's Phone Number"
                        {...register("phoneNumber")}
                    />
                    {errors.phoneNumber && <p className="text-red-500 ml-1">Perpetrator's Phone Number is required.</p>}
                </div>

                {/* Description of the Incident */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="description" value="Description of the Incident" />
                    </div>
                    <textarea
                        id="description"
                        placeholder="Description of the Incident"
                        className="textarea textarea-bordered w-full"
                        {...register("description")}
                    />
                    {errors.description && <p className="text-red-500 ml-1">Description of the Incident is required.</p>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="perpetratorPhoto" value="Upload Photo of the Perpetrator" />
                    </div>
                    <input
                        id="perpetratorPhoto"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "perpetratorPhoto")}
                        className="block w-full mt-1"
                    />
                    {errors.perpetratorPhoto && <p className="text-red-500 ml-1">Photo of the Perpetrator is required.</p>}
                </div>

                {/* Photo of the Incident */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="incidentPhoto" value="Upload Photo of the Incident" />
                    </div>
                    <input
                        id="incidentPhoto"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "incidentPhoto")}
                        className="block w-full mt-1"
                    />
                    {errors.incidentPhoto && <p className="text-red-500 ml-1">Photo of the Incident is required.</p>}
                </div>

                {/* Submit Button */}
                <div className='flex items-center justify-center'>
                    <Button className='bg-[#0B4838]' type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default AddPerpetrator;
