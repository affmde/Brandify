import animalsLogo from '../../media/images/animals.png';

const animalsLogos= [
    {
        id:0,
        name: "bear",
        logoUrl:"https://img.icons8.com/office/2x/bear.png",
        completed: false
    },
    {
        id:1,
        name: "chameleon",
        logoUrl:"https://img.icons8.com/office/2x/chameleon.png",
        completed: false
    },
    {
        id:2,
        name: "deer",
        logoUrl:"https://img.icons8.com/office/2x/deer.png",
        completed: false
    },
    {
        id: 3,
        name: "llama",
        logoUrl: "https://img.icons8.com/office/2x/llama.png",
        completed: false
    },
    {
        id: 4,
        name: "frog",
        logoUrl: "https://img.icons8.com/office/2x/frog.png",
        completed: false
    },
    {
        id: 5,
        name: "rabbit",
        logoUrl: "https://img.icons8.com/office/2x/rabbit.png",
        completed: false
    },
    {
        id: 6,
        name: "slug",
        logoUrl: "https://img.icons8.com/office/2x/slug.png",
        completed: false
    },
    {
        id:7,
        name: "kangaroo",
        logoUrl: "https://img.icons8.com/office/2x/kangaroo.png",
        completed: false
    },{
        id: 8,
        name: "snail",
        logoUrl: "https://img.icons8.com/office/2x/snail.png",
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