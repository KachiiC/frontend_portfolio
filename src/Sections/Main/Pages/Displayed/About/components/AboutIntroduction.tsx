// IMAGES
import AboutImage from 'Images/About_Image.jpeg'

const AboutIntroductionImage = (
    <div className="site-col-6 w-50 about-image">
        <a href="https://github.com/KachiiC" 
            target="_blank" 
            rel="noreferrer"
        >
            <img src={AboutImage} 
                className="site-responsive-image"
                alt="display-pic" 
            />
        </a>
    </div>
)

const AboutDescription = (
    <div className="site-col-6 w-80 about-paragraph">
        <p>
            My name is <b>Kacheok Cheong</b>, but my friends call me <b>Kachi</b>! I am a self 
            taught developer from London, web development is my passion.
        </p>
        <p>
            As a full stack developer, I am comfortable building a range of different web apps. 
            My frontend skills include using React, redux, typescript and using fetch. 
            My preferred backend language is python and using django restframework. 
            With Django RF I can create django commands, cache data, webscrape and run 
            tests using PyTest.
        </p>
        <p>
            Currently I am working on a few shopify startup e-commerce and designing my own 
            MMA website using React and django RF.
        </p>
    </div>
)

const AboutIntroduction = (
    <div className="site-grid-system about-introduction">
        {AboutIntroductionImage}
        {AboutDescription}
    </div>
)

export default AboutIntroduction