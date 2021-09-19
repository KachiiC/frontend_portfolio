import FilterCollapsibleUsage from 'Images/FilterCollapsibleUsage.png'
import CollapsibleDataImg from 'Images/CollapsibleData.png'

export const FilterCollapsibleData = [
    {
      title:"How does it work?",
      description:"The component takes data, placeholder and width as arguements. The data passed through returns a collapsible tabs for each object. The placeholder can be set for the search and the width detirmines the width of the component (this can only be listed in multiples of 10).",
      image: FilterCollapsibleUsage,
    },
    {
      title:"Example Data:",
      description: "The data must be an array of objects which each must contain title and content as keys. The title must a string and the content must be a jsx element, neither keys are optional.",
      image: CollapsibleDataImg,
    }
]