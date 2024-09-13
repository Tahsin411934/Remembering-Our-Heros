import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { BiData } from "react-icons/bi";

const MartyrDetails = () => {
    const { id } = useParams(); // Extract 'id' from URL params

    // Use a dynamic query key that includes 'id' to handle data refetching correctly
    const { data, isLoading, error } = useQuery({
        queryKey: ['OurHeroeDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allmartyr/${id}`);
            return res.data;
        },
        enabled: !!id // Only run the query if 'id' exists
    });

    console.log(data); // For debugging purposes

    if (isLoading) return <p>Loading...</p>; // Handle loading state
    if (error) return <p>Error: {error.message}</p>; // Handle error state
    if (!data) return <p>No data available</p>; // Handle case when data is empty

    return (
        <div className="font-Poppins container mx-auto">


            {/* Render content if data is not null */}
            <div className="lg:grid grid-cols-4 gap-10 mt-10">
                {data && (
                    <div className="max-w-xs mb-5 col-span-1 mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                         <img width={250} height={250} src={data.martyrsImage || '/download.png'} alt="" className="object-cover object-center w-full rounded-t-md lg:h-[230px] dark:bg-gray-500" />

                        <div className="flex flex-col justify-between space-y-8 p-4">
                            <div>
                                <h2 className="text-xl font-semibold tracking-wide">{data.martyrsName || 'Unknown'}</h2>
                                <p className="dark:text-gray-800">{data.occupation || 'No description available'}</p>
                                <p className="dark:text-gray-800">{data.institute || 'No institute available'}</p>
                                <p className="dark:text-gray-800">Age: {data.age || '--------------'}</p>
                                <p className="dark:text-gray-800">Address: {data.MartyrsAddress || 'Address not Found'} </p>
                                <p className="dark:text-gray-800">Date of Death :: {data.date || 'No Date of Death Found'} </p>
                            </div>
                        </div>
                    </div>

                )}
                <div className="col-span-3  ">
                    <div className="rounded-2xl w-[80%] mx-auto bg-[#E7E7E7] p-5">
                        <h1 className="font-semibold text-lg text-gray-700">How he/she became a MARTYR:</h1>
                        <p className="text-gray-700 ml-1">
                            {data.details || `We are seeking more information about ${data.martyrsName}. If you have any details or insights, please help us by sharing them.`}
                        </p>
                    </div>

                    <div className=" mt-10  rounded-2xl mx-auto w-[80%] bg-[#E7E7E7] p-5">
                        <h1 className="font-semibold text-lg text-gray-700">Biograpy</h1>
                        <p className="dark:text-gray-700 ml-1">We are seeking more information about {data.martyrsName}. If you have any details or insights, please help us by sharing them. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MartyrDetails;
