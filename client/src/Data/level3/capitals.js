import capitalsLogo from '../../media/images/capitals.png';

const capitalsLogos= [
    {
        id:0,
        name: "camberra",
        logoUrl:"https://img.icons8.com/officel/2x/australia-flag.png",
        completed: false
    },
    {
        id:1,
        name: "ottawa",
        logoUrl:"https://img.icons8.com/officel/2x/canada.png",
        completed: false
    },
    {
        id:2,
        name: "sofia",
        logoUrl:"https://img.icons8.com/officel/2x/bulgaria.png",
        completed: false
    },
    {
        id: 3,
        name: "bogota",
        logoUrl: "https://img.icons8.com/officel/2x/colombia.png",
        completed: false
    },
    {
        id: 4,
        name: "tehran",
        logoUrl: "https://img.icons8.com/officel/2x/iran.png",
        completed: false
    },
    {
        id: 5,
        name: "riga",
        logoUrl: "https://img.icons8.com/officel/2x/latvia.png",
        completed: false
    },
    {
        id: 6,
        name: "vilnius",
        logoUrl: "https://img.icons8.com/officel/2x/lithuania.png",
        completed: false
    },
    {
        id:7,
        name: "kingston",
        logoUrl: "https://img.icons8.com/officel/2x/jamaica.png",
        completed: false
    },{
        id: 8,
        name: "rabat",
        logoUrl: "https://img.icons8.com/officel/2x/morocco.png",
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