import AntdCards from "Components/ExternalLibraries/AntdCards"

const ExampleData = [
    {
        title: "Finance Stack",
        description: "This app is...",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=Finance%20Stack",
        link: ""
    },
    {
        title: "E-commerce App",
        description: "This app is...",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=E-commerce%20App",
        link: ""
    }
]

const Components = (
    <>
        <h1>Components Content</h1>
        <AntdCards data={ExampleData} />
    </>
)

export default Components