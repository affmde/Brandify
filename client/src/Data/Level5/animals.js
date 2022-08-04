import animalsLogo from '../../media/images/animals.png';

const animalsLogos= [
    {
        id:0,
        name: "bee",
        logoUrl:"https://img.icons8.com/office/2x/bee.png",
        completed: false
    },
    {
        id:1,
        name: "butterfly",
        logoUrl:"https://img.icons8.com/office/2x/butterfly.png",
        completed: false
    },
    {
        id:2,
        name: "caterpillar",
        logoUrl:"https://img.icons8.com/office/2x/caterpillar.png",
        completed: false
    },
    {
        id: 3,
        name: "fly",
        logoUrl: "https://img.icons8.com/office/2x/fly.png",
        completed: false
    },
    {
        id: 4,
        name: "grasshopper",
        logoUrl: "https://img.icons8.com/office/2x/grasshopper.png",
        completed: false
    },
    {
        id: 5,
        name: "hornet",
        logoUrl: "https://img.icons8.com/office/2x/hornet.png",
        completed: false
    },
    {
        id: 6,
        name: "ladybird",
        logoUrl: "https://img.icons8.com/office/2x/ladybird.png",
        completed: false
    },
    {
        id:7,
        name: "mosquito",
        logoUrl: "https://img.icons8.com/office/2x/mosquito.png",
        completed: false
    },{
        id: 8,
        name: "spider",
        logoUrl: "https://img.icons8.com/office/2x/spider.png",
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