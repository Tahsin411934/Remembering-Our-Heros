import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";


const Martyrs = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['OurHeroe'], // Corrected key name
        queryFn: async () => {
            const res = await axiosSecure.get('/allmartyr');
            return res.data;
        }
    });

    if (isLoading) return <p>Loading...</p>; // Handle loading state
    if (error) return <p>Error: {error.message}</p>; // Handle error state

    return (
        <div className="font-Poppins container mx-auto">
            <div className="text-center mt-6">
                <h1 className="text-4xl font-bold text-[#0A3E32]">All <span className="text-red-700">Martyrs</span> </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {data?.map((martyr, index) => (
                    <div key={index} className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={martyr.martyrsImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between  space-y-8">
                            <div className="">
                                <h2 className="text-xl font-semibold tracking-wide">{martyr.martyrsName || 'Unknown'}</h2>
                                <p className="dark:text-gray-800">{martyr.occupation || 'No description available'}</p>
                                <p className="dark:text-gray-800">{martyr.institute	 || 'No institute available'}</p>
                            </div>
                            <button type="button" className="flex items-center bg-red-500 justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600  dark:text-gray-50">Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Martyrs;