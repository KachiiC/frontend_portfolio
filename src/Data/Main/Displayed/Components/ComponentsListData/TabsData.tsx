import TabsUsage from 'Images/TabsUsage.png'
import TabsDataImg from 'Images/TabsData.png'

export const TabsSectionExample = [
    {
        title:"How does it work?",
        image: TabsUsage,
        description: "The component takes data as an argument and returns each object as tabs. The title of each object will displayed on the tab, whilst the 'content' is displayed when the tab is clicked."
    },
    {
        title:"Example Data:",
        image: TabsDataImg,
        description: "The data must be an array of objects. Each object must contain a title (must be a string) and contents (JSX Element)."
    }
]

export const TabsData = [
    {
        title: "first tab",
        content: <h1>Content 1</h1>
    },
    {
        title: "second tab",
        content: <h1>Content 2</h1>
    },
    {
        title: "third tab",
        content: <h1>Content 3</h1>
    },
    {
        title: "forth tab",
        content: <h1>Content 4</h1>
    },
    {
        title: "fifth tab",
        content: <h1>Content 5</h1>
    },
    {
        title: "sixth tab",
        content: <h1>Content 6</h1>
    },
    {
        title: "seventh tab",
        content: <h1>Content 7</h1>
    },
    {
        title: "eighth tab",
        content: <h1>Content 8</h1>
    },
    {
        title: "ninth tab",
        content: <h1>Content 9</h1>
    },
    {
        title: "Tenth tab",
        content: <h1>Content 10</h1>
    },
]

export default TabsData