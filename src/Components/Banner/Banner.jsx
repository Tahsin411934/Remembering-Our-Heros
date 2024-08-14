const Banner = () => {
    return (
        <div>
        <div
            className="bg-cover bg-center w-full h-[400px]"
            style={{ backgroundImage: "url('banner.jpg')" }} 
        >
           <div className="grid grid-cols-3 gap-32 pt-24 text-white font-Montserrat font-bold lg:w-[45%] mx-auto text-4xl">
            <h1>#reform</h1>
            <h1>#reverse</h1>
            <h1>#rebuild</h1>
           </div>
        </div>
        <div className="bg-green-200 w-[50%] h-52 z-10 mx-auto -mt-24 rounded-2xl">
            <h1 className="text-center  pt-5 pb-1 text-red-600 font-Poppins font-semibold text-xl">Quota Movement</h1>
            <p className="px-5 text-justify leading-relaxed">Quota Movement Initially focused on restructuring quota-based systems for government job recruitment, the 2024 Bangladesh quota reform movement expanded against perceived authoritarianism after hundreds, mostly students, were killed. The government's violent crackdown and widespread repression, including police gunfire and an internet blackout, intensified the protests and calls for Prime Minister Sheikh Hasina's resignation..</p>
        </div>
        </div>
    );
};

export default Banner;
