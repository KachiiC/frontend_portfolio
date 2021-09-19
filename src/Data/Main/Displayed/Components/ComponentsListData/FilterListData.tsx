import FilterListUsage from 'Images/FilterListUsage.png'
import FilterListDataImg from 'Images/FilterListData.png'

export const FilterListSectionData = [
  {
    title:"How does it work?",
    description:"The component takes data, default_column, placeholder and width as arguements. The data passed through returns a table row for each object. The 'default_column' sets the default filter parameters. The placeholder can be set for the search and the width detirmines the width of the component (this can only be listed in multiples of 10).",
    image: FilterListUsage,
  },
  {
    title:"Example Data:",
    description: "The dataset must be an array of objects. Each value within an object must be a string or a number.",
    image: FilterListDataImg,
  }
]

export const FilterListData = [
  { 
    id: 1, 
    name: 'Andy', 
    last: "Page",
    age: 32 
  },
  { 
    id: 2, 
    name: 'Conor', 
    last: "Chou",
    age: 30 
  },
  { 
    id: 3, 
    name: 'Donald', 
    last: "Trump",
    age: 40 
  },
  { 
    id: 4, 
    name: 'Jay', 
    last: "Chou",
    age: 50 
  },
  { 
    id: 5, 
    name: 'Kim', 
    last: "Biden",
    age: 30 
  },
  { 
    id: 6, 
    name: 'Kim', 
    last: "Gordon",
    age: 68 
  },
  { 
    id: 7, 
    name: 'Penny', 
    last: "Pang",
    age: 34 
  },
  { 
    id: 8, 
    name: 'Rachel', 
    last: "Bilson",
    age: 28 
  },
  { 
    id: 9, 
    name: 'Zoe', 
    last: "Tam",
    age: 23 
  },
]