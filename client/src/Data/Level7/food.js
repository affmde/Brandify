import foodLogo from '../../media/images/foodMainLogo.png';

const foodsLogos= [
    {
        id:0,
        name: "aspargus",
        logoUrl:"https://img.icons8.com/officel/2x/asparagus.png",
        completed: false
    },
    {
        id:1,
        name: "tomato",
        logoUrl:"https://img.icons8.com/officel/2x/tomato.png",
        completed: false
    },
    {
        id:2,
        name: "beet",
        logoUrl:"https://img.icons8.com/officel/2x/beet.png",
        completed: false
    },
    {
        id: 3,
        name: "spinach",
        logoUrl: "https://img.icons8.com/officel/2x/spinach.png",
        completed: false
    },
    {
        id: 4,
        name: "celery",
        logoUrl: "https://img.icons8.com/officel/2x/celery.png",
        completed: false
    },
    {
        id: 5,
        name: "hazelnut",
        logoUrl: "https://img.icons8.com/officel/2x/hazelnut.png",
        completed: false
    },
    {
        id: 6,
        name: "soy",
        logoUrl: "https://img.icons8.com/officel/2x/soy.png",
        completed: false
    },
    {
        id:7,
        name: "brazil_nut",
        logoUrl: "https://img.icons8.com/officel/2x/brazil-nut.png",
        completed: false
    },
    {
        id: 8,
        name: "pomegrandate",
        logoUrl: "https://img.icons8.com/officel/2x/pomegranate.png",
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