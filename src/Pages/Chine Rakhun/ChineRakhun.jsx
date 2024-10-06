import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { axiosSecure } from "../../Hooks/useAxiosSecure";


const ChineRakhun = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['OurHeroe'], // Corrected key name
        queryFn: async () => {
            const res = await axiosSecure.get('/AddPerpetrator/success');
            return res.data;
        }
    });
console.log(data)
    if (isLoading) return <p>Loading...</p>; 
    if (error) return <p>Error: {error.message}</p>; 
    return (
        <div className="font-Poppins lg:w-[80%] mx-auto">
            <div className="lg:w-[80%] px-3 mx-auto lg:text-xl text-center font-semibold mt-10">
                <h1>Chine Rakhun: A public registry of all the perpetrators involved with attacking the unarmed students during peaceful protests.</h1>
                <Link to={'/AddPerpetrator'}>
                    <button className="btn bg-red-800 text-white px-3 py-1 mt-3">Submit A Report</button></Link>
            </div>
            <div>
            <div className="grid pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mt-6">
                {data?.slice(0,20).map((Perpetrator, index) => (
                    <div key={index} className="max-w-xs p-2 mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img width={250} height={250} src={Perpetrator.perpetratorPhoto} alt="" className="object-cover object-center w-full rounded-t-md h-[230px] dark:bg-gray-500" />
                        <div className="flex flex-col justify-between  space-y-8">
                            <div className="">
                                <h2 className="text-xl font-semibold tracking-wide">{Perpetrator.perpetratorName1 || 'Unknown'}</h2>
                                <p className="dark:text-gray-800">{Perpetrator.description || 'No description available'}</p>
                                <p className="dark:text-gray-800 h-10">{Perpetrator.institute	 || 'No institute available'}</p>
                            </div>
                          
                        </div>
                         <Link to={`/PerpetratorDetails/${Perpetrator._id}`}> <button type="button" className="px-3 pb-3 float-end  text-red-800">Read more ➡️</button></Link>
                    </div>
                    
                ))}
                
            </div>
            </div>
        </div>
    );
};

export default ChineRakhun;