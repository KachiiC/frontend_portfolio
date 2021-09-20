const TimelineExampleData = `[
    {
        event: "First Event",
        year: 2017,
        description: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
    },
    {
        event: "Second Event",
        year: 2016,
        description: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
    },
    {
        event: "Third Event",
        year: 2015,
        description: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
    }
]
`
const TimelineExampleUsage = `
    <Timeline 
        data={TimelineData} 
        width={100}
    />
`

export const TimelineSectionExample = [
    {
        title:"How does it work?",
        example: TimelineExampleUsage,
        description: "The component takes data as an argument and returns each object as a timeline event. The width of the component can also be adjusted (100% width by default)."
    },
    {
        title:"Example Data:",
        example: TimelineExampleData,
        description: "The data must be an array of objects. Each object must contain a event and description (both must be strings) and a year (number)."
    }
]

export const TimelineData = [
    {
        event: "First Event",
        year: 2017,
        description: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
    },
    {
        event: "Second Event",
        year: 2016,
        description: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
    },
    {
        event: "Third Event",
        year: 2015,
        description: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
    },
    {
        event: "Forth Event",
        year: 2012,
        description: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
    },
    {
        event: "Fifth Event",
        year: 2011,
        description: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
    },
    {
        event: "Sixth Event",
        year: 2007,
        description: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam. Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
    }
]

