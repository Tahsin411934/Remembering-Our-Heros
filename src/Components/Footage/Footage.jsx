import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Footage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['Footages'],
        queryFn: async () => {
            const res = await axiosSecure.get('/footage');
            return res.data;
        }
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container mx-auto mt-32 px-4">
            <h1 className="text-4xl font-bold mb-8">Footage</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.slice(0,6).map((video) => (
                    <div
                        key={video._id}
                        className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
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
                                    className="absolute top-0 left-0 w-full h-full rounded-md"
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
            <div className="mx-auto text-center mt-5">
                <Link to={'/fotage'}>
                    <button className="btn border border-red-500 text-lg ml-10 py-3 px-5 text-red-100 bg-red-800 font-semibold rounded-xl mt-3">
                        See All Footage <span className="font-bold"> &rarr;</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Footage;
