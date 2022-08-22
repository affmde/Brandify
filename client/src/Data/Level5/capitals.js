import capitalsLogo from '../../media/images/capitals.png';

const capitalsLogos= [
    {
        id:0,
        name: "bangkok",
        logoUrl:"https://img.icons8.com/officel/2x/thailand.png",
        completed: false
    },
    {
        id:1,
        name: "warsaw",
        logoUrl:"https://img.icons8.com/officel/2x/poland.png",
        completed: false
    },
    {
        id:2,
        name: "ankara",
        logoUrl:"https://img.icons8.com/officel/2x/turkey.png",
        completed: false
    },
    {
        id: 3,
        name: "tunis",
        logoUrl: "https://img.icons8.com/officel/2x/tunisia.png",
        completed: false
    },
    {
        id: 4,
        name: "kyiv",
        logoUrl: "https://img.icons8.com/officel/2x/ukraine.png",
        completed: false
    },
    {
        id: 5,
        name: "montevideu",
        logoUrl: "https://img.icons8.com/officel/2x/uruguay.png",
        completed: false
    },
    {
        id: 6,
        name: "caracas",
        logoUrl: "https://img.icons8.com/officel/2x/venezuela.png",
        completed: false
    },
    {
        id:7,
        name: "lima",
        logoUrl: "https://img.icons8.com/officel/2x/peru.png",
        completed: false
    },{
        id: 8,
        name: "riad",
        logoUrl: "https://img.icons8.com/officel/2x/saudi-arabia.png",
        completed: false
    }
]

export const capitals= {
    id: 0,
    array: capitalsLogos,
    logo: capitalsLogo,
    title: "Capitals",
    completedLogos: [],
    completed: false,
    redeem: false
}