import { Switch, Route } from "react-router-dom";
// DATA
import DisplayedData from "Data/Main/Displayed/PagesData";
import { FooterPages } from "Data/Footer/FooterData";
import HiddenData from "Data/Main/Hidden/HiddenPages";
// TOOLS
import { RoutesRender } from "Tools/RoutersRender";
// PAGES
import Home from "../Pages/Home";

const Routes = [
    DisplayedData,
    FooterPages,
    HiddenData,
]

const RenderRoutes = Routes.map(route => RoutesRender(route))

// Pushes home to last route
RenderRoutes[RenderRoutes.length - 1].push(
    <Route key="home">
        {Home}
    </Route>
)

const PagesRouter = ( 
    <Switch>
        {RenderRoutes}
    </Switch>
)

export default PagesRouter