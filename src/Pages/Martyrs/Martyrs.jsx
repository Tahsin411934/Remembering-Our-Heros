import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Martyrs = () => {
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

    // Filter martyrs by search term
    const filteredMartyrs = data?.filter(martyr =>
        martyr.martyrsName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='bg-slate-200'>
        <div className="font-Poppins container mx-auto pb-10 ">
            <div className="text-center pt-6">
                <h1 className="text-4xl font-bold text-[#0A3E32]">All <span className="text-red-700">Martyrs</span> </h1>
            </div>

            {/* Search bar */}
            <div className="mt-4 mb-6 mx-auto w-[80%]">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border border-gray-400 rounded-md w-full"
                />
            </div>
            <hr className='flex h-[1px] border-none bg-green-200 mx-auto w-[100%] ' />
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {filteredMartyrs?.length > 0 ? (
                    filteredMartyrs.map((martyr, index) => (
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
                    ))
                ) : (
                    <p className="text-center col-span-full">No martyrs found</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default Martyrs;
