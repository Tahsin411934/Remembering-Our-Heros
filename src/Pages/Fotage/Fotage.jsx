
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";

const Fotage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['OurHeroe'], // Corrected key name
        queryFn: async () => {
            const res = await axiosSecure.get('/footage');
            return res.data;
        }
    });

    // Handle loading and error states
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-2xl font-bold mb-4">Footage</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((video) => (
                    <div key={video._id} className="border border-gray-300 p-4 bg-white shadow-lg rounded-md">
                        <h2 className="text-xl font-semibold mb-2">{video.videoTitle}</h2>
                        <p className="text-gray-600 mb-2">Date: {new Date(video.date).toLocaleDateString()}</p>
                        <iframe
                            src={`${video.driveLink}/preview`}
                            width="100%"
                            height="315"
                            allow="autoplay"
                            title={video.videoTitle}
                            className="rounded-md"
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fotage;
