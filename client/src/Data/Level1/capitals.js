import capitalsLogo from '../../media/images/capitals.png';

const capitalsLogos= [
    {
        id:0,
        name: "roma",
        logoUrl:"https://img.icons8.com/doodle/2x/italy.png",
        completed: false
    },
    {
        id:1,
        name: "paris",
        logoUrl:"https://img.icons8.com/doodle/2x/france.png",
        completed: false
    },
    {
        id:2,
        name: "berlin",
        logoUrl:"https://img.icons8.com/doodle/2x/germany.png",
        completed: false
    },
    {
        id: 3,
        name: "london",
        logoUrl: "https://img.icons8.com/doodle/2x/great-britain.png",
        completed: false
    },
    {
        id: 4,
        name: "washington_dc",
        logoUrl: "https://img.icons8.com/doodle/2x/usa.png",
        completed: false
    },
    {
        id: 5,
        name: "madrid",
        logoUrl: "https://img.icons8.com/doodle/2x/spain-2.png",
        completed: false
    },
    {
        id: 6,
        name: "lisbon",
        logoUrl: "https://img.icons8.com/doodle/2x/portugal.png",
        completed: false
    },
    {
        id:7,
        name: "delhi",
        logoUrl: "https://img.icons8.com/doodle/2x/india.png",
        completed: false
    },{
        id: 8,
        name: "moscow",
        logoUrl: "https://img.icons8.com/doodle/2x/russian-federation.png",
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