import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const PendingRequest = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['PendingRequest'],
        queryFn: async () => {
            const res = await axiosSecure.get('/Martyrs/panding');
            return res.data;
        }
    });
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {data?.slice(0, 20).map((martyr, index) => (
                    <div key={index} className="max-w-xs container w-[95%] mx-auto rounded-md dark:bg-gray-50 dark:text-gray-800">
                        <img width={250} height={250} src={martyr.martyrsImage || 'download.png'} alt="" className="object-cover object-center w-full rounded-t-md lg:h-[230px] dark:bg-gray-500" />
                        <div className="flex flex-col justify-between  space-y-8">
                            <div className="flex text-center justify-between item-center bg-green-700">
                                <h2 className="lg:text-xl text-base w-full  text-white p-1  font-semibold tracking-wide">{martyr.martyrsName || 'Unknown'}</h2>
                                <div className='pt-2'>
                                    <Link to={`/MartyrDetails/${martyr._id}`}>
                                        <button type="button" className="float-end"> ➡️</button>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default PendingRequest;