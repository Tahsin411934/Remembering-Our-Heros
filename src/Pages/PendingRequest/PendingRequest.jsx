import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/useAuth";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const PendingRequest = () => {
    const { user } = UseAuth();

    // Fetch pending martyrs
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["PendingRequest"],
        queryFn: async () => {
            const res = await axiosSecure.get("/Martyrs/panding");
            return res.data;
        },
    });

    // Fetch pending perpetrators
    const {
        data: perpetratorsData,
        isLoading: perpetratorsLoading,
        error: perpetratorsError,
        refetch: refetchPerpetrators,
    } = useQuery({
        queryKey: ["PendingRequestPerpetrators"],
        queryFn: async () => {
            const res = await axiosSecure.get("/AddPerpetrator/panding");
            return res.data;
        },
    });

    const { data:footages, isLoading:isLoadingFootages, error:errorFootages, refetch: refetchFootage } = useQuery({
        queryKey: ['Footage'],
        queryFn: async () => {
            const res = await axiosSecure.get('/footage/pending');
            return res.data;
        }
    });

    if (isLoading || perpetratorsLoading) return <p>Loading...</p>;
    if (error || perpetratorsError) return <p>Error: {error.message}</p>;

    // Handle Accept request for martyrs
    const handleAcceptMartyr = async (id) => {
        try {
            await axiosSecure.put(`/Martyr/${id}`, { role: "user" });
            toast.success("Request accepted successfully!");
            refetch();
        } catch (error) {
            console.error("Failed to accept request:", error);
        }
    };

    // Handle Reject request for martyrs
    const handleRejectMartyr = async (id) => {
        console.log(id)

        const response = await axiosSecure.delete(`/allmartyr/${id}`);
        console.log(response.data)
        if (response.data) {
            toast.success("Request rejected successfully!");
            refetch();
        } else {
            toast.error("Failed to reject: No item found to delete.");
        }

    };

    // Handle Accept request for perpetrators
    
    const handleAcceptPerpetrator = async (id) => {
        try {
            await axiosSecure.put(`/Perpetrator/${id}`);
            toast.success("Request accepted successfully!");
            refetchPerpetrators();
        } catch (error) {
            console.error("Failed to accept request:", error);
        }
    };

    // Handle Reject request for perpetrators
    const handleRejectPerpetrator = async (id) => {
        try {
            await axiosSecure.delete(`/Perpetrator/${id}`);
            toast.success("Request rejected successfully!");
            refetchPerpetrators();
        } catch (error) {
            console.error("Failed to reject request:", error);
        }
    };

    const handleAcceptFootage = async (id) => {
        try {
            await axiosSecure.put(`/footage/${id}`);
            toast.success("Request accepted successfully!");
            refetchPerpetrators();
            refetchFootage()
        } catch (error) {
            console.error("Failed to accept request:", error);
        }
    };

    const handleRejectFootage = async (id) => {
        try {
            await axiosSecure.delete(`/footage/${id}`);
            toast.error("Request rejected successfully!");
            refetchFootage()
        } catch (error) {
            console.error("Failed to reject request:", error);
        }
    };
    return (
        <div>
            {/* Martyrs Section */}
            <div className="text-center md:w-full mt-10">
                <h1 className="text-4xl font-bold text-[#0A3E32]">Pending Martyrs</h1>
                <div className="text-center font-bold text-red-500">
                    <p>Only admin can accept or reject</p>
                </div>
            </div>
            <hr className="hidden lg:flex h-[1px] border-none bg-blue-500 mt-5 mx-auto w-[70%]" />
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:w-[85%] mx-auto gap-6 mt-16">
                {data?.map((martyr, index) => (
                    <div
                        key={index}
                        className="max-w-xs container w-[95%] mx-auto rounded-md dark:bg-gray-50 dark:text-gray-800"
                    >
                        <img
                            width={250}
                            height={250}
                            src={martyr.martyrsImage || "download.png"}
                            alt=""
                            className="object-cover object-center w-full rounded-t-md h-[230px] dark:bg-gray-500"
                        />
                        <div className="flex flex-col justify-between space-y-8">
                            <div className="flex text-center justify-between item-center bg-green-700">
                                <h2 className="lg:text-xl text-base w-full text-white p-1 font-semibold tracking-wide">
                                    {martyr.martyrsName || "Unknown"}
                                </h2>
                                <div className="pt-2">
                                    <Link to={`/MartyrDetails/${martyr._id}`}>
                                        <button type="button" className="float-end">
                                            ➡️
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-10 mt-5">
                            <button
                                onClick={() => handleAcceptMartyr(martyr._id)}
                                className={`btn rounded-md px-3 py-1 text-gray-50 font-bold ${user ? "bg-green-500" : "bg-green-500 opacity-50"
                                    }`}
                                disabled={!user}
                                title={!user ? "Only an admin can accept or reject." : ""}
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => handleRejectMartyr(martyr._id)}
                                className={`btn rounded-md px-3 py-1 text-gray-50 font-bold ${user ? "bg-red-500" : "bg-red-500 opacity-50"
                                    }`}
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

            {/* Perpetrators Section */}
            <div className="text-center md:w-full mt-16">
                <h1 className="text-4xl font-bold text-[#0A3E32]">Pending Perpetrators</h1>
                <div className="text-center font-bold text-red-500">
                    <p>Only admin can accept or reject</p>
                </div>
            </div>
            <hr className="hidden  lg:flex h-[1px] border-none bg-blue-500 mt-5 mx-auto w-[70%]" />
            <div className="grid grid-cols-2 w-[80%] mx-auto md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {perpetratorsData?.map((perpetrator, index) => (
                    <div
                        key={index}
                        className="max-w-xs container w-[95%] mx-auto rounded-md dark:bg-gray-50 dark:text-gray-800"
                    >
                        <img
                            width={250}
                            height={250}
                            src={perpetrator.perpetratorPhoto || "download.png"}
                            alt=""
                            className="object-cover object-center w-full rounded-t-md h-[230px] dark:bg-gray-500"
                        />
                        <div className="flex flex-col justify-between space-y-8">
                            <div className="flex text-center justify-between item-center bg-green-700">
                                <h2 className="lg:text-xl text-base w-full text-white p-1 font-semibold tracking-wide">
                                    {perpetrator.perpetratorName1 || "Unknown"}
                                </h2>
                                <div className="pt-2">
                                    <Link to={`/PerpetratorDetails/${perpetrator._id}`}>
                                        <button type="button" className="float-end">
                                            ➡️
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <h1>{perpetrator.description}</h1>
                        </div>
                        <div className="flex items-center justify-center gap-10 mt-5">
                            <button
                                onClick={() => handleAcceptPerpetrator(perpetrator._id)}
                                className={`btn rounded-md px-3 py-1 text-gray-50 font-bold ${user ? "bg-green-500" : "bg-green-500 opacity-50"
                                    }`}
                                disabled={!user}
                                title={!user ? "Only an admin can accept or reject." : ""}
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => handleRejectPerpetrator(perpetrator._id)}
                                className={`btn rounded-md px-3 py-1 text-gray-50 font-bold ${user ? "bg-red-500" : "bg-red-500 opacity-50"
                                    }`}
                                disabled={!user}
                                title={!user ? "Only an admin can accept or reject." : ""}
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center md:w-full mt-16">
                <h1 className="text-4xl font-bold text-[#0A3E32]">Pending Footage</h1>
                <div className="text-center font-bold text-red-500">
                    <p>Only admin can accept or reject</p>
                </div>
            </div>
            <hr className="hidden mb-5 lg:flex h-[1px] border-none bg-blue-500 mt-5 mx-auto w-[70%]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 w-[80%] mx-auto lg:grid-cols-3 gap-6">
                {footages.map((video) => (
                    <div
                        key={video._id}
                        className="border border-gray-300 w-[100%] mx-auto rounded-t-lg overflow-hidden bg-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <a
                            href={video.driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="relative w-full h-48 bg-gray-200">
                                <iframe
                                    src={`${video.driveLink}/preview`}
                                    width="100%"
                                    height="100%"
                                    allow="autoplay"
                                    title={video.videoTitle}
                                    className="absolute top-0 left-0 w-full h-full rounded-t-md"
                                ></iframe>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-1 line-clamp-2">{video.videoTitle}</h2>
                                <p className="text-gray-600 text-sm">Date: {new Date(video.date).toLocaleDateString()}</p>
                            </div>
                        </a>
                        <div className="flex items-center justify-center gap-10 mt-1 pb-5">
                            <button
                                onClick={() => handleAcceptFootage(video._id)}
                                className={`btn rounded-md px-3 py-1 text-gray-50 font-bold ${user ? "bg-green-500" : "bg-green-500 opacity-50"
                                    }`}
                                disabled={!user}
                                title={!user ? "Only an admin can accept or reject." : ""}
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => handleRejectFootage(video._id)}
                                className={`btn rounded-md px-3 py-1 text-gray-50 font-bold ${user ? "bg-red-500" : "bg-red-500 opacity-50"
                                    }`}
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
