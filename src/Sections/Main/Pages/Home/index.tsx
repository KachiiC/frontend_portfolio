// COMPONENTS
import SiteCards from "Components/SiteComponents/SiteCards"
// DATA
import HomeCardsData from "Data/Main/Displayed/Home/HomeCardsData"

const Home = (
    <div className="w-90 m-auto">
        <SiteCards
            data={HomeCardsData}
            card_size="large"
        />
    </div>
)

export default Home
