import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";

const Fotage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['OurHeroe'],
        queryFn: async () => {
            const res = await axiosSecure.get('/footage/accepted');
            return res.data;
        }
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-2xl font-bold mb-3 text-center">Footage</h1>
            <hr className='flex mb-5 h-[1px] border-none bg-green-300 mx-auto w-[100%] ' />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((video) => (
                    <div
                        key={video._id}
                        className="border border-gray-300 rounded-t-lg overflow-hidden bg-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fotage;
