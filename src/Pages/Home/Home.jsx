import Banner from "../../Components/Banner/Banner";
import Footage from "../../Components/Footage/Footage";
import History from "../../Components/History/History";
import OurHeroes from "../../Components/OurHeroes/OurHeroes";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurHeroes></OurHeroes>
            <History></History>
            <Footage></Footage>
        </div>
    );
};

export default Home;