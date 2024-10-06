import Banner from "../../Components/Banner/Banner";
import BlogPost from "../../Components/BlogPost/BlogPost";
import Footage from "../../Components/Footage/Footage";
import History from "../../Components/History/History";
import OurHeroes from "../../Components/OurHeroes/OurHeroes";



const Home = () => {
    return (
        <div className='bg-slate-200'>
            <Banner></Banner>
            <OurHeroes></OurHeroes>
            <History></History>
            <BlogPost></BlogPost>
            <Footage></Footage>
        </div>
    );
};

export default Home;