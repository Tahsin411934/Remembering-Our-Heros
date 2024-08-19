const Banner = () => {
    return (
        <div>
        <div
            className="bg-cover bg-center w-full h-[400px]"
            style={{ backgroundImage: "url('banner.jpg')" }} 
        >
           <div className="lg:grid grid-cols-2  gap-2 lg:pt-24 pt-10  text-white font-Montserrat font-bold lg:w-[65%] mx-auto text-center text-2xl">
            <h1 className="text-red-500 border border-gray-200 rounded-xl p-2 bg-[#FDE3E3]" >Martyrs to This Day : 500+</h1>
            <h1 className="text-[#D97506] mt-2 border border-gray-200 rounded-xl p-2 bg-[#FEF3C7]" >Injured to This Day : 33,000+</h1>
           </div>
        </div>
        <div className="hidden lg:flex">
        <div className="bg-green-200   lg:w-[50%] h-52 z-10 mx-auto -mt-24 rounded-2xl">
            <h1 className="text-center  pt-5 pb-1 text-red-600 font-Poppins font-semibold text-xl">Quota Movement</h1>
            <p className="px-5  text-justify leading-relaxed">Quota Movement Initially focused on restructuring quota-based systems for government job recruitment, the 2024 Bangladesh quota reform movement expanded against perceived authoritarianism after hundreds, mostly students, were killed. The government's violent crackdown and widespread repression, including police gunfire and an internet blackout, intensified the protests and calls for Prime Minister Sheikh Hasina's resignation..</p>
        </div>
        </div>

        <div className="lg:hidden flex">
        <div className="bg-green-200   lg:w-[50%] h-56 z-10 mx-auto -mt-24 rounded-2xl">
            <h1 className="text-center  pt-5 pb-1 text-red-600 font-Poppins font-semibold text-xl">Quota Movement</h1>
            <p className="px-5  text-justify leading-relaxed">The 2024 Bangladesh quota reform movement started over job recruitment quotas but intensified into a major protest against authoritarianism after a violent crackdown by the government, which led to numerous student deaths and calls for Prime Minister Sheikh Hasina's resignation..</p>
        </div>
        </div>
        </div>
    );
};

export default Banner;
