import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { axiosSecure } from "../../Hooks/useAxiosSecure";

const PerpetratorDetails = () => {
    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['PerpetratorDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/PerpetratorDetails/${id}`);
            return res.data;
        },
    });
    console.log(data)
    if (isLoading) return <p className="text-center mt-10">Loading...</p>; // Handle loading state
    if (error) return <p className="text-center text-red-600 mt-10">Error: {error.message}</p>; // Handle error state
    if (!data) return <p className="text-center mt-10">No data available</p>; // Handle case when data is empty

    return (
        <div className="font-Poppins container mx-auto">
            <div className="lg:grid grid-cols-4 gap-10 mt-10">
                {/* Render content if data is not null */}
                {data && (
                    <div className="max-w-xs mb-5 col-span-1 mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img
                            width={250}
                            height={250}
                            src={data.perpetratorPhoto || '/download.png'}
                            alt="Perpetrator"
                            className="object-cover object-center w-full rounded-t-md lg:h-[230px] dark:bg-gray-500"
                            onError={(e) => e.target.src = '/download.png'} // Fallback image on error
                        />
                        <div className="flex flex-col justify-between space-y-8 p-4">
                            <div>
                                <h2 className="text-xl font-semibold tracking-wide">
                                    {data.perpetratorName1 || 'Unknown'}
                                </h2>
                                <p className="dark:text-gray-800">{data.position || 'No position available'}</p>
                                <p className="dark:text-gray-800">Address: {data.address1 || 'No address available'}</p>
                                <p className="dark:text-gray-800">
                                    Social Profile: <a href={data.socialProfileLink || '#'} target="_blank" rel="noopener noreferrer">
                                        {data.socialProfileLink ? 'View Profile' : 'Not available'}
                                    </a>
                                </p>
                                <p className="dark:text-gray-800">Phone Number: {data.phoneNumber || 'Not provided'}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="col-span-3">
                    <div className="rounded-2xl w-[80%] mx-auto bg-[#E7E7E7] p-5">
                        <h1 className="font-semibold text-lg text-gray-700">Involvement in Incident:</h1>
                        <div className="flex item-center justify-center mb-2">
                            <img width={250} height={250} src={data.incidentPhoto
                            } alt="" />
                        </div>

                        <p className="text-gray-700 ml-1">
                            {data.description || `We are seeking more information about ${data.perpetratorName1}. If you have any details or insights, please help us by sharing them.`}
                        </p>
                    </div>

                    <div className="mt-10 rounded-2xl mx-auto w-[80%] bg-[#E7E7E7] p-5">
                        <h1 className="font-semibold text-lg text-gray-700">Additional Information</h1>
                        <p className="dark:text-gray-700 ml-1">
                            {`More details about the individual and the incident are pending. If you have any information about ${data.perpetratorName1}, please assist us by sharing.`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerpetratorDetails;
