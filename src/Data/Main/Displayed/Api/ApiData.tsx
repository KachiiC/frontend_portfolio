import ApiTutorial from "Sections/Main/Pages/Displayed/Api/components/ApiTutorial";
import CryptoApi from "Sections/Main/Pages/Displayed/Api/components/CryptoApi";
import HskApi from "Sections/Main/Pages/Displayed/Api/components/HskApi";
import StoreApi from "Sections/Main/Pages/Displayed/Api/components/StoreApi";
import StockApi from "Sections/Main/Pages/Displayed/Api/components/StockApi";
import YoutubeApi from "Sections/Main/Pages/Displayed/Api/components/YoutubeApi";

const ApiData = [
    {
        title: "How does it work?",
        content: ApiTutorial
    },
    {
        title: "Crypto",
        content: <CryptoApi />   
    },
    {
        title: "Stock",
        content: <StockApi />
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