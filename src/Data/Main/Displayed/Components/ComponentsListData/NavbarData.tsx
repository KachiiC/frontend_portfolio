// IMAGES
import NavbarImage from 'Images/NavbarImage.png'
import NavbarResponsiveImage from 'Images/NavbarResponsiveImage.png'
import NavbarDataImage from 'Images/NavbarData.png'
import NavbarUsageImage from 'Images/NavbarUsage.png'

export const NavSectionData = [
    {
        title: "The Navbar",
        image: NavbarImage,
        description: "The navbar will display the title as a logo and the other pages as links. The number of menu's displayed can also be cropped (it is 4 by default)."
    },
    {
        title: "Responsive Design",
        image: NavbarResponsiveImage,
        description: "When used on a smaller screen, the menu links are hidden and only revealed when click the bars icon, once a link is clicked the dropdown is hidden again."
    },
    {
        title: "Example Usage",
        image: NavbarUsageImage,
        description: "The component takes a title, data and number of menus (optional) as an argument during usage."
    },
    {
        title:"Example Data",
        image: NavbarDataImage,
        description:"The data set must be an array of objects which east must contain a title and link (or external link) key. Link keys will direct users to another page via react-router-dom, whilst external page directs them to an external page."
    },
]