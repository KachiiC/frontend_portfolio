// IMAGES
import { CardsDataExample } from './CardsData'

const FilterGallerySectionsExample = `
    <FilterGallery 
    data={data}
    card_size="medium"
    />
`

export const FilterGallerySectionsData = [
    {
        title:"How does it work?",
        example: FilterGallerySectionsExample,
        description: "The component takes data as an argument and returns a card for each object. The size of the cards can be adjusted to xs, small, medium (default), large and xl, and the size of the cards are responsive. It will also fiter the unique values of 'type' and returns buttons to filter for each type."
    },
    {
        title:"Example of Data",
        example: CardsDataExample,
        description:"The data must be an array of objects which each must contain type, title, description and an image"
    }
]