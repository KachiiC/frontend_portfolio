const AboutDescription = () => {

    const descriptionData = [
        {
            title: "Frontend Development",
            description: "Although I'm comfortable building a static website using html, css and vanilla js. I prefer using frameworks such as django and react. Although I'm capable of building a full stack applications using django, my preferred frontend framework is React. With React I am comfortable with using component libraries such as Bootstrap and Material UI but often I prefer to create and reusable my own components."
        },
        {
            title: "Backend Development",
            description: "As django was the first framework I used, naturally I gravitated towards Django restframework as I began to learn about APIs. I am comfortable with creating backend servers to feed to my frontend apps. With Django RF I am comfortable populating my data through POST requests, using CSV/JSON files to populate my database or making request to existing API (such as google or rapid api) to create data. I am also comfortable with caching data."
        },
        {
            title: "Other Skills",
            description: "Aside from my full stack skills, I am proficent with python. With python I a can write django commands, webscrape data and write tests using PyTest. As I use React for most of my projects, i am proficent in ES6, fetch from various apis and using different component libraries. My understanding SQL is good (although it is not something I often use) and I am very comfortable with handling JSON files."
        },
    ]

    const displayedDescriptions = descriptionData.map((obj) => (
        <div className="site-col-4">
            <h3>{obj.title}</h3>
            <p className="w-80 m-auto">
                {obj.description}
            </p>
        </div>
    ))

    return (
        <div className="site-grid-system about-description">
            {displayedDescriptions}
        </div>
    )
}

export default AboutDescription