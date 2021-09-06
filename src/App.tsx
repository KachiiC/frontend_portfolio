import { StrictMode } from 'react';
// CSS
import 'CSS/App.css'
// COMPONENTS
import Header from 'Sections/Header'
import Main from 'Sections/Main';
import Footer from 'Sections/Footer'

const App = (
  <StrictMode>
    {Header}
    {Main}
    {Footer}
  </StrictMode>
)

export default App;
