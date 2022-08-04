import animalsLogo from '../../media/images/animals.png';

const animalsLogos= [
    {
        id:0,
        name: "elephant",
        logoUrl:"https://img.icons8.com/office/2x/elephant.png",
        completed: false
    },
    {
        id:1,
        name: "dinosaur",
        logoUrl:"https://img.icons8.com/office/2x/dinosaur.png",
        completed: false
    },
    {
        id:2,
        name: "panda",
        logoUrl:"https://img.icons8.com/office/2x/panda.png",
        completed: false
    },
    {
        id: 3,
        name: "chicken",
        logoUrl: "https://img.icons8.com/office/2x/chicken.png",
        completed: false
    },
    {
        id: 4,
        name: "cow",
        logoUrl: "https://img.icons8.com/office/2x/cow-breed.png",
        completed: false
    },
    {
        id: 5,
        name: "horse",
        logoUrl: "https://img.icons8.com/office/2x/horse.png",
        completed: false
    },
    {
        id: 6,
        name: "lamb",
        logoUrl: "https://img.icons8.com/office/2x/sheep2.png",
        completed: false
    },
    {
        id:7,
        name: "pig",
        logoUrl: "https://img.icons8.com/office/2x/pig.png",
        completed: false
    },{
        id: 8,
        name: "sheep",
        logoUrl: "https://img.icons8.com/office/2x/sheep.png",
        completed: false
    }
]

export const animals= {
    id: 0,
    array: animalsLogos,
    logo: animalsLogo,
    title: "Animals",
    completedLogos: [],
    completed: false,
    redeem: false
}