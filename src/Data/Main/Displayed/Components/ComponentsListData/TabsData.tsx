const TabsDataExample = `
    [
        {
            title: "First tab",
            content: FirstContent
        },
        {
            title: "Second tab",
            content: SecondContent
        },
        {
            title: "Third tab",
            content: ThirdContent
        },
        {
            title: "Forth tab",
            content: ForthContent
        },
        {
            title: "Fifth tab",
            content: FifthContent
        }
    ]
`

const TabsExampleUsage = `
    <Tabs 
        data={data} 
        width={80}
    />
`

export const TabsSectionExample = [
    {
        title:"How does it work?",
        example: TabsExampleUsage,
        description: "The component takes data as an argument and returns each object as tabs. The title of each object will displayed on the tab, whilst the 'content' is displayed when the tab is clicked."
    },
    {
        title:"Example Data:",
        example: TabsDataExample,
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
    }
]

export default TabsData