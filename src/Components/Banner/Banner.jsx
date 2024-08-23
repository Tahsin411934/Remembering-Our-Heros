import { Link } from "react-router-dom";

const Banner = () => {
    const bannerHeading = (
        <>
            <div className="flex-col">
                <h1 className="text-xl px-3 font-Poppins lg:text-4xl lg:text-right   mx-auto lg:mt-3 font-semibold text-[#2c2b2b]">Bangladesh 2.0: A new path for equality, human dignity and justice</h1>
                <h1 className="text-2xl font-Poppins hidden  ] mx-auto mt-3 font-semibold text-[#2c2b2b]">Bangladesh 2.0: Embarking on a transformative journey toward a future where equality, human dignity, and justice are not just ideals but realities for every citizen..</h1>
                <div className=" justify-start lg:hidden items-center">
                    <Link to={"/add-new-martyrs"} >
                        <button className="btn  bg-red-800 p-2  lg:p-3 mt-5 lg:mt-5 ml-3 rounded-full font-Poppins text-white font-semibold text-base lg:w-[100%]  w-[65%] hover:bg-red-800 ">Submit MARTYRS Information</button></Link>

                </div>
               
                
                <div className="lg:grid grid-cols-3 lg:mt-6 mt-5  gap-2 pt-3 text-white font-Montserrat font-bold lg:w-[95%] mx-auto text-center text-2xl">
                    <h1 className="text-red-500 border border-gray-300 rounded-xl p-2 bg-[#FDE3E3]" >Martyrs to This Day : 500+</h1>
                    <h1 className="text-[#D97506] mt-2 lg:mt-0 border border-gray-300 rounded-xl p-2 bg-[#FEF3C7]" >Injured to This Day : 33,000+</h1>
                    <h1 className="text-[#20201f]  mt-2 lg:mt-0 border border-gray-300 rounded-xl p-2 bg-[#E3F5E3]" >Arrest & Disappear
                        11,000+</h1>
                </div>
                <div className="lg:flex justify-start gap-5 lg:mr-[4%] lg:float-end text-center pb-5 items-center">
                    <Link to={"/add-new-martyrs"} >
                        <button className="btn  bg-[#0B4838] p-2  hidden lg:block lg:p-3 mt-5 lg:mt-5 ml-3 rounded-full font-Poppins text-white font-semibold text-base lg:w-[100%]  w-[65%] hover:bg-red-800 ">Submit MARTYRS Information</button></Link>
                    <Link to={"/add-new-martyrs"} >
                        <button className="btn  bg-red-800 hidden lg:block p-2  lg:p-3 mt-5 lg:mt-5 ml-3 rounded-full font-Poppins text-white font-semibold text-base lg:w-[100%]  w-[65%] hover:bg-red-800 ">Submit MARTYRS Information</button></Link>

                </div>
            </div>
        </>
    )
    return (
        <div className="bg-[#E3F5E3] pt-4 lg:pt-10">

            <div
                className=" hidden lg:block md:block bg-center w-full "

            >

                <div className="grid grid-cols-8 w-[95%] mx-auto justify-between ">
                    <img className="col-span-3 ml-5" width={350} height={300} src="banner2.png" alt="" />
                    <div className="col-span-5 mt-12 mr-10">
                        <div className="flex gap-20 w-[19%] text-red-700 mx-auto text-xl font-Poppins font-semibold">
                            <h1>#reform</h1>
                            <h1>#reverse</h1>
                            <h1>#rebuild</h1>
                        </div>
                        {bannerHeading}
                    </div>

                </div>

            </div>
            <div
                className="bg-cover lg:hidden md:hidden  bg-center w-full "

            >
                {bannerHeading}
            </div>
            {/* <div className="hidden lg:flex">
        <div className="bg-green-200   lg:w-[50%] h-52 z-10 mx-auto -mt-24 rounded-2xl">
            <h1 className="text-center  pt-5 pb-1 text-red-600 font-Poppins font-semibold text-xl">Quota Movement</h1>
            <p className="px-5  text-justify leading-relaxed">Quota Movement Initially focused on restructuring quota-based systems for government job recruitment, the 2024 Bangladesh quota reform movement expanded against perceived authoritarianism after hundreds, mostly students, were killed. The government's violent crackdown and widespread repression, including police gunfire and an internet blackout, intensified the protests and calls for Prime Minister Sheikh Hasina's resignation..</p>
        </div>
        </div> */}

            {/* <div className="lg:hidden flex">
        <div className="bg-green-200   lg:w-[50%] h-60 z-10 mx-auto -mt-24 rounded-2xl">
            <h1 className="text-center  pt-5 pb-1 text-red-600 font-Poppins font-semibold text-xl">Quota Movement</h1>
            <p className="px-5  text-justify leading-relaxed">The 2024 Bangladesh quota reform movement started over job recruitment quotas but intensified into a major protest against authoritarianism after a violent crackdown by the government, which led to numerous student deaths and calls for Prime Minister Sheikh Hasina's resignation..</p>
        </div>
        </div> */}
        </div>
    );
};

export default Banner;
