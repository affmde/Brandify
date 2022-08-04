import foodLogo from '../../media/images/foodMainLogo.png';

const foodsLogos= [
    {
        id:0,
        name: "avocado",
        logoUrl:"https://img.icons8.com/office/2x/avocado.png",
        completed: false
    },
    {
        id:1,
        name: "apple",
        logoUrl:"https://img.icons8.com/office/2x/apple.png",
        completed: false
    },
    {
        id:2,
        name: "beef",
        logoUrl:"https://img.icons8.com/office/2x/steak-medium.png",
        completed: false
    },
    {
        id: 3,
        name: "krab",
        logoUrl: "https://img.icons8.com/office/2x/crab.png",
        completed: false
    },
    {
        id: 4,
        name: "blueberry",
        logoUrl: "https://img.icons8.com/doodle/2x/blueberry.png",
        completed: false
    },
    {
        id: 5,
        name: "cheese",
        logoUrl: "https://img.icons8.com/doodle/2x/cheese--v1.png",
        completed: false
    },
    {
        id: 6,
        name: "hamburger",
        logoUrl: "https://img.icons8.com/doodle/2x/hamburger.png",
        completed: false
    },
    {
        id:7,
        name: "nut",
        logoUrl: "https://img.icons8.com/doodle/2x/nut--v1.png",
        completed: false
    },
    {
        id: 8,
        name: "croissant",
        logoUrl: "https://img.icons8.com/doodle/2x/croissant--v1.png",
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