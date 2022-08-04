import foodLogo from '../../media/images/foodMainLogo.png';

const foodsLogos= [
    {
        id:0,
        name: "raspberry",
        logoUrl:"https://img.icons8.com/office/2x/raspberry.png",
        completed: false
    },
    {
        id:1,
        name: "ice_cream",
        logoUrl:"https://img.icons8.com/office/2x/ice-cream-cone.png",
        completed: false
    },
    {
        id:2,
        name: "hot_dog",
        logoUrl:"https://img.icons8.com/office/2x/hot-dog.png",
        completed: false
    },
    {
        id: 3,
        name: "banana",
        logoUrl: "https://img.icons8.com/office/2x/banana.png",
        completed: false
    },
    {
        id: 4,
        name: "nachos",
        logoUrl: "https://img.icons8.com/office/2x/nachos.png",
        completed: false
    },
    {
        id: 5,
        name: "melon",
        logoUrl: "https://img.icons8.com/office/2x/melon.png",
        completed: false
    },
    {
        id: 6,
        name: "pineapple",
        logoUrl: "https://img.icons8.com/office/2x/pineapple.png",
        completed: false
    },
    {
        id:7,
        name: "sandwich",
        logoUrl: "https://img.icons8.com/office/2x/sandwich.png",
        completed: false
    },{
        id: 8,
        name: "watermelon",
        logoUrl: "https://img.icons8.com/office/2x/watermelon.png",
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