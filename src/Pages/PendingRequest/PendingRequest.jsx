import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/useAuth";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { toast, ToastContainer } from "react-toastify";

const PendingRequest = () => {
    const { user } = UseAuth();
    // Destructure axiosSecure from useAxiosSecure

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['PendingRequest'],
        queryFn: async () => {
            const res = await axiosSecure.get('/Martyrs/panding'); // Ensure this endpoint is correct
            return res.data;
        }
    });

    const { data: perpetratorsData, isLoading: perpetratorsLoading, error: perpetratorsError, refetch: refetchPerpetrators } = useQuery({
        queryKey: ['PendingRequestPerpetrators'],
        queryFn: async () => {
            const res = await axiosSecure.get('/AddPerpetrator/panding');
            return res.data;
        }
    });
console.log(perpetratorsData)
    if (isLoading || perpetratorsLoading) return <p>Loading...</p>;
    if (error || perpetratorsError) return <p>Error: {error.message}</p>;

    const handleAccept = async (id) => {
        console.log(id)
        try {
            await axiosSecure.put(`/Martyr/${id}`, { role: 'user' });
            toast.success('Request accepted successfully!');
            refetch()
        } catch (error) {
            console.error("Failed to accept request:", error);
        }
    };

    const handleReject = async (id) => {
        try {
            await axiosSecure.delete(`/Martyr/${id}`);

        } catch (error) {
            console.error("Failed to reject request:", error);
        }
    };

    return (
        <div>
            <div className="text-center md:w-full  mt-16">
                <h1 className="text-4xl  font-bold text-[#0A3E32]">Pending Martyrs </h1>
            </div>
            <hr className='hidden lg:flex h-[1px] border-none bg-blue-500 mt-5 mx-auto w-[70%]' />
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {data?.map((martyr, index) => (
                    <div key={index} className="max-w-xs container w-[95%] mx-auto rounded-md dark:bg-gray-50 dark:text-gray-800">
                        <img width={250} height={250} src={martyr.martyrsImage || 'download.png'} alt="" className="object-cover object-center w-full rounded-t-md h-[230px] dark:bg-gray-500" />
                        <div className="flex flex-col justify-between space-y-8">
                            <div className="flex text-center justify-between item-center bg-green-700">
                                <h2 className="lg:text-xl text-base w-full text-white p-1 font-semibold tracking-wide">{martyr.martyrsName || 'Unknown'}</h2>
                                <div className='pt-2'>
                                    <Link to={`/MartyrDetails/${martyr._id}`}>
                                        <button type="button" className="float-end"> ➡️</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-10 mt-5">
                            <button
                                onClick={() => handleAccept(martyr._id)}
                                className={`btn rounded-md px-3 py-1 text-gray-50 font-bold ${user ? 'bg-green-500' : 'bg-green-500 opacity-50'}`}
                                disabled={!user}
                                title={!user ? "Only an admin can accept or reject." : ""}
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => handleReject(martyr._id)}
                                className={`btn rounded-md px-3 py-1 text-gray-50 font-bold ${user ? 'bg-red-500' : 'bg-red-500 opacity-50'}`}
                                disabled={!user}
                                title={!user ? "Only an admin can accept or reject." : ""}
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />







            <div className="text-center md:w-full  mt-16">
                <h1 className="text-4xl  font-bold text-[#0A3E32]">Pending perpetrators </h1>
            </div>
            <hr className='hidden lg:flex h-[1px] border-none bg-blue-500 mt-5 mx-auto w-[70%]' />
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {perpetratorsData?.map((perpetrator, index) => (
                    <div key={index} className="max-w-xs container w-[95%] mx-auto rounded-md dark:bg-gray-50 dark:text-gray-800">
                        <img width={250} height={250} src={perpetrator.perpetratorPhoto || 'download.png'} alt="" className="object-cover object-center w-full rounded-t-md h-[230px] dark:bg-gray-500" />
                        <div className="flex flex-col justify-between space-y-8">
                            <div className="flex text-center justify-between item-center bg-green-700">
                                <h2 className="lg:text-xl text-base w-full text-white p-1 font-semibold tracking-wide">{perpetrator.perpetratorName1 || 'Unknown'}</h2>
                                <div className='pt-2'>
                                    <Link to={`/MartyrDetails/${perpetrator._id}`}>
                                        <button type="button" className="float-end"> ➡️</button>
                                    </Link>
                                </div>
                            </div>
                            <h1>{perpetrator.description}</h1>
                        </div>
                        <div className="flex items-center justify-center gap-10 mt-5">
                            <button
                                onClick={() => handleAccept(martyr._id)}
                                className={`btn rounded-md px-3 py-1 text-gray-50 font-bold ${user ? 'bg-green-500' : 'bg-green-500 opacity-50'}`}
                                disabled={!user}
                                title={!user ? "Only an admin can accept or reject." : ""}
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => handleReject(martyr._id)}
                                className={`btn rounded-md px-3 py-1 text-gray-50 font-bold ${user ? 'bg-red-500' : 'bg-red-500 opacity-50'}`}
                                disabled={!user}
                                title={!user ? "Only an admin can accept or reject." : ""}
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PendingRequest;
