import capitalsLogo from '../../media/images/capitals.png';

const capitalsLogos= [
    {
        id:0,
        name: "lome",
        logoUrl:"https://img.icons8.com/officel/2x/togo.png",
        completed: false
    },
    {
        id:1,
        name: "valletta",
        logoUrl:"https://img.icons8.com/officel/2x/malta.png",
        completed: false
    },
    {
        id:2,
        name: "luxembourg",
        logoUrl:"https://img.icons8.com/officel/2x/luxembourg.png",
        completed: false
    },
    {
        id: 3,
        name: "dublin",
        logoUrl: "https://img.icons8.com/officel/2x/ireland.png",
        completed: false
    },
    {
        id: 4,
        name: "nursultan",
        logoUrl: "https://img.icons8.com/officel/2x/kazakhstan.png",
        completed: false
    },
    {
        id: 5,
        name: "nicosia",
        logoUrl: "https://img.icons8.com/officel/2x/cyprus-flag.png",
        completed: false
    },
    {
        id: 6,
        name: "santiago",
        logoUrl: "https://img.icons8.com/officel/2x/chile.png",
        completed: false
    },
    {
        id:7,
        name: "beijing",
        logoUrl: "https://img.icons8.com/officel/2x/china.png",
        completed: false
    },{
        id: 8,
        name: "cairo",
        logoUrl: "https://img.icons8.com/officel/2x/egypt.png",
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