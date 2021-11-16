import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
// CSS
import 'CSS/App.css'
import 'CSS/KachiiStrap.css'
import 'CSS/Transitions/PageTransitions.css'
import 'CSS/Transitions/Transitions.css'
// SECTIONS
import ScrollToTop from 'Tools/ScrollToTop'
import SiteFooter from 'Sections/Footer'
import SiteHeader from 'Sections/Header'
import SiteMain from 'Sections/Main'

const App = (
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop children={undefined} />
      {SiteHeader}
      {SiteMain}
      {SiteFooter}
    </BrowserRouter>
  </StrictMode>
)

export default App