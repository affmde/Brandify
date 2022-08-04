import foodLogo from '../../media/images/foodMainLogo.png';

const foodsLogos= [
    {
        id:0,
        name: "pizza",
        logoUrl:"https://img.icons8.com/doodle/2x/pizza--v1.png",
        completed: false
    },
    {
        id:1,
        name: "popcorn",
        logoUrl:"https://img.icons8.com/doodle/2x/popcorn.png",
        completed: false
    },
    {
        id:2,
        name: "taco",
        logoUrl:"https://img.icons8.com/doodle/2x/taco.png",
        completed: false
    },
    {
        id: 3,
        name: "french_fries",
        logoUrl: "https://img.icons8.com/doodle/2x/french-fries.png",
        completed: false
    },
    {
        id: 4,
        name: "lemonade",
        logoUrl: "https://img.icons8.com/doodle/2x/lemonade.png",
        completed: false
    },
    {
        id: 5,
        name: "dumplings",
        logoUrl: "https://img.icons8.com/doodle/2x/dumplings.png",
        completed: false
    },
    {
        id: 6,
        name: "citrus",
        logoUrl: "https://img.icons8.com/doodle/2x/citrus.png",
        completed: false
    },
    {
        id:7,
        name: "kiwi",
        logoUrl: "https://img.icons8.com/doodle/2x/kiwi.png",
        completed: false
    },
    {
        id: 8,
        name: "paella",
        logoUrl: "https://img.icons8.com/color/2x/paella.png",
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