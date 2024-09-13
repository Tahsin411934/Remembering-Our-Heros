import { Link } from "react-router-dom";

const History = () => {
    return (
        <div className="container mx-auto font-Poppins mt-36">
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div 
                        className="w-full lg:w-1/3 bg-cover bg-center"
                        style={{ backgroundImage: "url('history_image.jpg')" }}
                    ></div>
                    <div className="flex flex-col w-full px-6 lg:w-2/3 md:px-8 lg:px-12">
                        
                        <h2 className="text-3xl text-gray-700 font-semibold leading-none">
                            History
                        </h2>
                        <p className="mt-4 mb-8 text-gray-600 text-lg">
                        The quota reform movement in Bangladesh has been organized to demand a reduction in quotas for government jobs and a shift to merit-based recruitment. There have been three major agitations for quota reforms in the country. To date, general university and college students support this movement, while the ruling Awami League government, Chhatra League, and other Awami League-affiliated organizations oppose it. <br /> <br />

The first quota reform movement occurred in 2013. In 2018, following the movement, a circular was issued that aligned with the protesters' demands. However, this circular was later declared invalid by the Supreme Court, leading to a resurgence of the movement in 2024. Throughout these agitations, students have faced violent responses from the Bangladesh Police and Chhatra League.
                        </p>
                       <Link to={"/history"}> <button className="self-start px-5 py-1 text-lg font-medium rounded-3xl bg-red-800 text-gray-50">
                            Read More
                        </button> </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default History;
