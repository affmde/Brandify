import animalsLogo from '../../media/images/animals.png';

const animalsLogos= [
    {
        id:0,
        name: "bird",
        logoUrl:"https://img.icons8.com/office/2x/bird.png",
        completed: false
    },
    {
        id:1,
        name: "duck",
        logoUrl:"https://img.icons8.com/office/2x/duck.png",
        completed: false
    },
    {
        id:2,
        name: "ant",
        logoUrl:"https://img.icons8.com/office/2x/ant.png",
        completed: false
    },
    {
        id: 3,
        name: "bee",
        logoUrl: "https://img.icons8.com/office/2x/bee.png",
        completed: false
    },
    {
        id: 4,
        name: "cat",
        logoUrl: "https://img.icons8.com/office/2x/cat--v1.png",
        completed: false
    },
    {
        id: 5,
        name: "dog",
        logoUrl: "https://img.icons8.com/office/2x/dog.png",
        completed: false
    },
    {
        id: 6,
        name: "turtle",
        logoUrl: "https://img.icons8.com/office/2x/turtle.png",
        completed: false
    },
    {
        id:7,
        name: "fish",
        logoUrl: "https://img.icons8.com/office/2x/clown-fish.png",
        completed: false
    },{
        id: 8,
        name: "dolphin",
        logoUrl: "https://img.icons8.com/office/2x/dolphin.png",
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