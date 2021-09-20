export const CollapsibleData = [
    {
        title: "China",
        content: <h1>China Content</h1>
    },
    {
        title: "France",
        content: <h1>France Content</h1>
    },
    {
        title: "Russia",
        content: <h1>Russia Content</h1>
    },
    {
        title: "United Kingdom",
        content: <h1>United Kingdom Content</h1>
    },
    {
        title: "United States",
        content: <h1>United States Content</h1>
    }
]

export const CollapsibleDataExample = `
    [
        {
            title: "China",
            content: <ChinaContent />
        },
        {
            title: "France",
            content: <FranceContent />
        },
        {
            title: "Russia",
            content: <RussiaContent />
        },
        {
            title: "United Kingdom",
            content: <UnitedKingdom Content />
        },
        {
            title: "United States",
            content: <UnitedStatesContent />
        }
    ]
`

const CollapsibleUsageExample = `  
    <Collapsible data={data} width={90} />
`

export const CollapsibleSectionsData = [
    {
        title:"How does it work?",
        example: CollapsibleUsageExample,
        description:"The component takes data as an argument and returns a number of collapsible tabs. The title of each object will displayed on the tab, whilst the 'content' in the dropdown when the tab is clicked."
    },
    {
        title:"Example of Data",
        example: CollapsibleDataExample,
        description:"The data must be an array of objects which each must contain title and content as keys. The title must a string and the content must be a jsx element, neither keys are optional."
    }
]