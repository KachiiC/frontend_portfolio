import ApiTutorial from "Sections/Main/Pages/Displayed/Api/components/ApiTutorial"
import FinanceApi from "Sections/Main/Pages/Displayed/Api/components/FinanceApi"
import HskApi from "Sections/Main/Pages/Displayed/Api/components/HskApi"
import StoreApi from "Sections/Main/Pages/Displayed/Api/components/StoreApi"
import YoutubeApi from "Sections/Main/Pages/Displayed/Api/components/YoutubeApi"

const ApiData = [
    {
        title: "How does it work?",
        content: ApiTutorial
    },
    {
        title: "Crypto",
        content: <FinanceApi type="crypto" />
    },
    {
        title: "Stock",
        content: <FinanceApi type="stock" />
    },
    {
        title: "Store",
        content: <StoreApi />   
    },
    {
        title: "Youtube",
        content: <YoutubeApi />   
    },
    {
        title: "HSK",
        content: <HskApi />   
    }
]

export default ApiData