export const CardsData = [
    {
        type: "Arsenal",
        title: "Aubameyang",
        description: "Aubameyang Description ",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF/?text=Aubameyang" 
    },
    {
        type: "Arsenal",
        title: "Ramsdale",
        description: "Ramsdale Description",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF/?text=Ramsdale" 
    },
    {
        type: "Chelsea",
        title: "Kepa",
        description: "Kepa Description",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF/?text=Kepa" 
    },
    {
        type: "Liverpool",
        title: "Salah",
        description: "Salah Description",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF/?text=Salah" 
    }
]

// EXAMPLE DATA
export const CardsDataExample = `[
    {
        type: "Arsenal",
        title: "Aubameyang",
        description: "Aubameyang Description ",
        image: AubameyangImage
    },
    {
        type: "Arsenal",
        title: "Ramsdale",
        description: "Ramsdale Description",
        image: RamsdaleImage
    },
    {
        type: "Chelsea",
        title: "Kepa",
        description: "Kepa Description",
        image: KepaImage
    },
    {
        type: "Liverpool",
        title: "Salah",
        description: "Salah Description",
        image: SalahImage
    }
]`

const CardsUsageExample = `
    <SiteCards
        data={CardsData}
        card_size="large"
    />
`

export const CardsSectionData = [
    {
        title:"How does it work?",
        // image: CardsUsage,
        example: CardsDataExample,
        description:"The component takes data as an argument and returns a card for each object. The size of the cards can be adjusted to xs, small, medium (default), large and xl, and the size of the cards are responsive."
    },
    {
        title:"Example of Data",
        // image: CardsDataImage,
        example: CardsUsageExample,
        description:"The data must be an array of objects which each must contain title, description and an image"
    }
]