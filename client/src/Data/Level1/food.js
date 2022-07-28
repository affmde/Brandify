import foodLogo from '../../media/images/foodMainLogo.png';

const foodsLogos= [
    {
        id:0,
        name: "bread",
        logoUrl:"https://img.icons8.com/office/2x/bread.png",
        completed: false
    },
    {
        id:1,
        name: "pretzel",
        logoUrl:"https://img.icons8.com/office/2x/pretzel.png",
        completed: false
    },
    {
        id:2,
        name: "cherry",
        logoUrl:"https://img.icons8.com/office/2x/cherry.png",
        completed: false
    },
    {
        id: 3,
        name: "cheesecake",
        logoUrl: "https://img.icons8.com/office/2x/cheesecake.png",
        completed: false
    },
    {
        id: 4,
        name: "strawberry",
        logoUrl: "https://img.icons8.com/office/2x/strawberry.png",
        completed: false
    },
    {
        id: 5,
        name: "pastel_de_nata",
        logoUrl: "https://img.icons8.com/office/2x/pastel-de-nata.png",
        completed: false
    },
    {
        id: 6,
        name: "porridge",
        logoUrl: "https://img.icons8.com/office/2x/porridge.png",
        completed: false
    },
    {
        id:7,
        name: "baguette",
        logoUrl: "https://img.icons8.com/office/2x/baguette.png",
        completed: false
    },{
        id: 8,
        name: "grapes",
        logoUrl: "https://img.icons8.com/office/2x/grapes.png",
        completed: false
    }
]

export const foods= {
    id: 0,
    array: foodsLogos,
    logo: foodLogo,
    title: "Foods",
    completedLogos: [],
    completed: false
}