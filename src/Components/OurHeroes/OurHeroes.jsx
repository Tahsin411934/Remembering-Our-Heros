import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const OurHeroes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, isLoading, error } = useQuery({
        queryKey: ['OurHeroe'],
        queryFn: async () => {
            const res = await axiosSecure.get('/Martyrs/accepted');
            return res.data;
        }
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Filter data based on search term
    const filteredHeroes = data?.filter(martyr =>
        martyr.martyrsName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="font-Poppins container mx-auto">
            <div className='lg:flex  justify-between items-center lg:mt-10 '>
                <div className="text-center md:w-full lg:w-[25%] lg:mt-0 mt-6">
                    <h1 className="text-4xl  font-bold text-[#0A3E32]">The Martyrs </h1>
                </div>

                {/* Centered search bar */}
                <div className="flex justify-end  lg:w-[100%] w-[80%] mx-auto mt-4 mb-6">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 float-end border border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-80"
                    />
                </div>
            </div>
            <hr className='hidden lg:flex h-[1px] border-none bg-blue-500 mx-auto w-[100%]' />


            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {filteredHeroes?.slice(0, 20).map((martyr, index) => (
                    <div key={index} className="max-w-xs container w-[95%] mx-auto rounded-md dark:bg-gray-50 dark:text-gray-800">
                        <img width={250} height={250} src={martyr.martyrsImage || 'download.png'} alt="" className="object-cover object-center w-full rounded-t-md lg:h-[230px] dark:bg-gray-500" />
                        <div className="flex flex-col justify-between h-24 space-y-8">
                            <div>
                                <h2 className="lg:text-xl text-base  font-semibold tracking-wide">{martyr.martyrsName || 'Unknown'}</h2>
                                <p className="dark:text-gray-800 text-sm">{martyr.occupation || 'No description available'}</p>
                                <p className="dark:text-gray-800 text-sm h-10">{martyr.institute || 'No institute available'}</p>
                            </div>
                        </div>
                        <div className=''>
                            <Link to={`/MartyrDetails/${martyr._id}`}>
                                <button type="button" className="px-3 pb-3 float-end text-red-800">Read more ➡️</button>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>

            <div className="mx-auto text-center mt-5">
                <Link to={'/Martyrs'}>
                    <button className="btn border border-red-500 text-lg ml-10 py-3 px-5 text-red-100 bg-red-800 font-semibold rounded-xl mt-3">
                        See All Martyr <span className="font-bold"> &rarr;</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OurHeroes;
