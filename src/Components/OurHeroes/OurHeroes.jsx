import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const OurHeroes = () => {
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
                {data?.slice(0,20).map((martyr, index) => (
                    <div key={index} className="max-w-xs mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img width={250} height={250} src={martyr.martyrsImage} alt="" className="object-cover object-center w-full rounded-t-md h-[230px] dark:bg-gray-500" />
                        <div className="flex flex-col justify-between  space-y-8">
                            <div className="">
                                <h2 className="text-xl font-semibold tracking-wide">{martyr.martyrsName || 'Unknown'}</h2>
                                <p className="dark:text-gray-800">{martyr.occupation || 'No description available'}</p>
                                <p className="dark:text-gray-800 h-10">{martyr.institute	 || 'No institute available'}</p>
                            </div>
                          
                        </div>
                         <Link to={`/MartyrDetails/${martyr._id}`}> <button type="button" className="px-3 pb-3 float-end  text-red-800">Read more ➡️</button></Link>
                    </div>
                    
                ))}
                
            </div>

            <div className="float-right">
              <Link to={'/Martyrs'}>  <button className="btn border border-red-500 text-lg  ml-10 py-3 px-5 text-red-100 bg-red-800 font-semibold rounded-3xl mt-3">See All Martyr</button> </Link>
            </div>
        </div>
    );
};

export default OurHeroes;
