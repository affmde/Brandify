import foodLogo from '../../media/images/foodMainLogo.png';

const foodsLogos= [
    {
        id:0,
        name: "peas",
        logoUrl:"https://img.icons8.com/doodle/2x/peas--v1.png",
        completed: false
    },
    {
        id:1,
        name: "salami",
        logoUrl:"https://img.icons8.com/doodle/2x/salami.png",
        completed: false
    },
    {
        id:2,
        name: "garlic",
        logoUrl:"https://img.icons8.com/doodle/2x/garlic--v1.png",
        completed: false
    },
    {
        id: 3,
        name: "beet",
        logoUrl: "https://img.icons8.com/doodle/2x/beet.png",
        completed: false
    },
    {
        id: 4,
        name: "lettuce",
        logoUrl: "https://img.icons8.com/doodle/2x/lettuce--v1.png",
        completed: false
    },
    {
        id: 5,
        name: "potato",
        logoUrl: "https://img.icons8.com/doodle/2x/potato--v1.png",
        completed: false
    },
    {
        id: 6,
        name: "onion",
        logoUrl: "https://img.icons8.com/doodle/2x/onion--v1.png",
        completed: false
    },
    {
        id:7,
        name: "eggplant",
        logoUrl: "https://img.icons8.com/doodle/2x/eggplant--v1.png",
        completed: false
    },
    {
        id: 8,
        name: "chilli_pepper",
        logoUrl: "https://img.icons8.com/doodle/2x/chili-pepper--v1.png",
        completed: false
    }
]

export const foods= {
    id: 0,
    array: foodsLogos,
    logo: foodLogo,
    title: "Foods",
    completedLogos: [],
    completed: false,
    redeem: false
}