import { Link } from "react-router-dom";

const History = () => {
    return (
        <div className="container mx-auto font-Poppins mt-16">
            <div className=" lg:text-left text-center md:w-full lg:w-[25%] lg:mt-0 mt-6">
                <h1 className="text-2xl  font-bold text-[#0A3E32]">History </h1>
            </div>
            <hr className=' mt-1 mb-5 lg:flex h-[1px] border-none bg-blue-300 mx-auto w-[100%]' />
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div
                        className="w-full lg:w-1/3 bg-cover rounded-xl bg-center"
                        style={{ backgroundImage: "url('history_image.jpg')" }}
                    ></div>
                    <div className="flex flex-col w-full px-6 lg:w-2/3 md:px-8 lg:px-12">


                        <p className=" mb-8 text-gray-600 text-lg">
                            কোটা সংস্কার আন্দোলনকে বাংলাদেশের সাম্প্রতিক সময়ের অন্যতম গুরুত্বপূর্ণ ছাত্রআন্দোলন হিসেবে বিশ্লেষণ করা যায়। এই আন্দোলনটি বাংলাদেশের শিক্ষা ও রাজনৈতিক প্রেক্ষাপটে একটি বৃহত্তর প্রভাব ফেলেছিল। সরকার, আদালত, শিক্ষার্থীরা এবং অন্যান্য গুরুত্বপূর্ণ অংশীজনেরা এই আন্দোলনের বিভিন্ন পর্যায়ে সক্রিয়ভাবে জড়িত ছিল। <br />
                            আন্দোলনের সূত্রপাত হয়েছিল যখন হাইকোর্ট মুক্তিযোদ্ধা কোটার পরিপত্র অবৈধ ঘোষণা করে রায় প্রদান করে। এই রায়ের প্রেক্ষিতে ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীরা এবং পরবর্তীতে দেশের অন্যান্য শিক্ষাপ্রতিষ্ঠানের ছাত্রছাত্রীরা ব্যাপকভাবে বিক্ষোভ শুরু করে। ঢাকার শাহবাগ মোড় থেকে শুরু করে বিভিন্ন সড়ক-মহাসড়ক অবরোধ করা হয়। শিক্ষার্থীরা নিজেদের দাবির পক্ষে সুপ্রিম কোর্টের অ্যাটর্নি জেনারেল বরাবর স্মারকলিপিও দেন। <br />
                            আন্দোলনের প্রধান দাবিগুলো ছিল কোটা ব্যবস্থার সংস্কার এবং মুক্তিযোদ্ধা কোটার বিষয়ে হাইকোর্টের রায় স্থগিত করা। শিক্ষার্থীরা ৩০ জুনের মধ্যে দাবি মানতে সরকারকে সময় বেঁধে দিয়েছিলেন, যা পরবর্তীতে নানা বিক্ষোভ ও অবরোধ কর্মসূচির মাধ্যমে জোরালোভাবে তুলে ধরা হয়। এই আন্দোলন জাতীয় পর্যায়ে ছড়িয়ে পড়ে এবং দেশের বিভিন্ন বিশ্ববিদ্যালয়ে তা তীব্র আকার ধারণ করে। আন্দোলনকারীরা সড়ক, রেলপথ, এবং বিভিন্ন গুরুত্বপূর্ণ স্থানে বিক্ষোভ করে।
                            <br />
                            

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
