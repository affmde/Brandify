import capitalsLogo from '../../media/images/capitals.png';

const capitalsLogos= [
    {
        id:0,
        name: "oslo",
        logoUrl:"https://img.icons8.com/officel/2x/norway.png",
        completed: false
    },
    {
        id:1,
        name: "haia",
        logoUrl:"https://img.icons8.com/officel/2x/netherlands.png",
        completed: false
    },
    {
        id:2,
        name: "bucharest",
        logoUrl:"https://img.icons8.com/officel/2x/romania.png",
        completed: false
    },
    {
        id: 3,
        name: "singapore",
        logoUrl: "https://img.icons8.com/officel/2x/singapore.png",
        completed: false
    },
    {
        id: 4,
        name: "belgrade",
        logoUrl: "https://img.icons8.com/officel/2x/serbia.png",
        completed: false
    },
    {
        id: 5,
        name: "bratislava",
        logoUrl: "https://img.icons8.com/officel/2x/slovakia.png",
        completed: false
    },
    {
        id: 6,
        name: "seol",
        logoUrl: "https://img.icons8.com/officel/2x/south-korea.png",
        completed: false
    },
    {
        id:7,
        name: "stockholm",
        logoUrl: "https://img.icons8.com/officel/2x/sweden.png",
        completed: false
    },{
        id: 8,
        name: "bern",
        logoUrl: "https://img.icons8.com/officel/2x/switzerland.png",
        completed: false
    }
]

export const capitals= {
    id: 0,
    array: capitalsLogos,
    logo: capitalsLogo,
    title: "Capitals",
    completedLogos: [],
    completed: false
}