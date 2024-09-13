// ModalForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Button, Label, TextInput } from "flowbite-react";
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure'; // Adjust the import path as needed

const ModalForm = ({ onClose }) => {
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
        try {
            await axiosSecure.post("/AddPerpetrator", data);
            Swal.fire('Success', 'Form submitted successfully!', 'success');
            reset();
            onClose(); // Close the modal after successful submission
        } catch (error) {
            console.error('Error submitting form data', error);
            Swal.fire('Error', 'There was an error submitting the form.', 'error');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] md:w-[50%] max-h-[90vh] overflow-auto">
                <h2 className="text-xl font-semibold mb-4">Submit a Report</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <Label htmlFor="perpetratorName1" value="Perpetrator's Name" />
                        <TextInput
                            id="perpetratorName1"
                            type="text"
                            placeholder="Perpetrator's Name"
                            {...register("perpetratorName1", { required: true })}
                        />
                        {errors.perpetratorName1 && <p className="text-red-500">Perpetrator's Name is required.</p>}
                    </div>
                    
                    <div className="mb-4">
                        <Label htmlFor="perpetratorAge1" value="Perpetrator's Age" />
                        <TextInput
                            id="perpetratorAge1"
                            type="number"
                            placeholder="Perpetrator's Age"
                            {...register("perpetratorAge1", { required: true })}
                        />
                        {errors.perpetratorAge1 && <p className="text-red-500">Perpetrator's Age is required.</p>}
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="position" value="Position/Designation" />
                        <TextInput
                            id="position"
                            type="text"
                            placeholder="Position/Designation"
                            {...register("position", { required: true })}
                        />
                        {errors.position && <p className="text-red-500">Position/Designation is required.</p>}
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="address1" value="Address" />
                        <TextInput
                            id="address1"
                            type="text"
                            placeholder="Address"
                            {...register("address1", { required: true })}
                        />
                        {errors.address1 && <p className="text-red-500">Address is required.</p>}
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="socialProfileLink" value="Social Profile Link" />
                        <TextInput
                            id="socialProfileLink"
                            type="text"
                            placeholder="Social Profile Link"
                            {...register("socialProfileLink")}
                        />
                        {errors.socialProfileLink && <p className="text-red-500">Social Profile Link is required.</p>}
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="phoneNumber" value="Perpetrator's Phone Number" />
                        <TextInput
                            id="phoneNumber"
                            type="text"
                            placeholder="Perpetrator's Phone Number"
                            {...register("phoneNumber")}
                        />
                        {errors.phoneNumber && <p className="text-red-500">Perpetrator's Phone Number is required.</p>}
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="description" value="Description of the Incident" />
                        <textarea
                            id="description"
                            placeholder="Description of the Incident"
                            className="textarea textarea-bordered w-full"
                            {...register("description", { required: true })}
                        />
                        {errors.description && <p className="text-red-500">Description of the Incident is required.</p>}
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="perpetratorPhoto" value="Upload Photo of the Perpetrator" />
                        <input
                            id="perpetratorPhoto"
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, "perpetratorPhoto")}
                            className="block w-full mt-1"
                        />
                        {errors.perpetratorPhoto && <p className="text-red-500">Photo of the Perpetrator is required.</p>}
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="incidentPhoto" value="Upload Photo of the Incident" />
                        <input
                            id="incidentPhoto"
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, "incidentPhoto")}
                            className="block w-full mt-1"
                        />
                        {errors.incidentPhoto && <p className="text-red-500">Photo of the Incident is required.</p>}
                    </div>

                    <div className="flex justify-end">
                        <Button type="button" onClick={onClose} className="mr-2">Close</Button>
                        <Button type="submit" className="bg-red-800 text-white">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;
