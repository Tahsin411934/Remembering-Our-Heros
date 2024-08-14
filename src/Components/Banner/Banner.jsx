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
        <div >

        </div>
        </div>
    );
};

export default Banner;
