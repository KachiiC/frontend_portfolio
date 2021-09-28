// COMPONENTS
import SiteCards from "Components/SiteComponents/SiteCards"
// DATA
import HomeCardsData from "Data/Main/Displayed/Home/HomeCardsData"

const HomePortfolio = (
    <div className="home-portfolio">
        <h1>Kachi Cheong's Portfolio</h1>
        <SiteCards
            data={HomeCardsData}
            card_size="large"
        />
    </div>
)

export default HomePortfolio