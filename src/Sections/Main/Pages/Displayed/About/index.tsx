// CSS
import SiteSlideshow from 'Components/SiteComponents/SiteSlideshow'
import './About.css'
// COMPONENTS

const ImagesData = [
    {
        caption: "first",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%201",
    },
    {
        caption: "second",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%202",
    },
    {
        caption: "third",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%203",
    },
    {
        caption: "forth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%204",
    },
    {
        caption: "fifth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%205",
    },
    {
        caption: "sixth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%206",
    },
    {
        caption: "seventh",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%207",
    },
    {
        caption: "eighth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%208",
    },
    {
        caption: "ninth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%209",
    },
    {
        caption: "tenth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%2010",
    },
]

const About = () => {

    return (
        <>
            <h1>About</h1>
            <SiteSlideshow 
                data={ImagesData} 
                thumbnails={4}
            />
        </>

    )
}

export default About