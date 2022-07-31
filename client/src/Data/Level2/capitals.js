import capitalsLogo from '../../media/images/capitals.png';

const capitalsLogos= [
    {
        id:0,
        name: "athens",
        logoUrl:"https://img.icons8.com/officel/2x/greece.png",
        completed: false
    },
    {
        id:1,
        name: "tallin",
        logoUrl:"https://img.icons8.com/officel/2x/estonia.png",
        completed: false
    },
    {
        id:2,
        name: "zagreb",
        logoUrl:"https://img.icons8.com/officel/2x/croatia.png",
        completed: false
    },
    {
        id: 3,
        name: "helsinki",
        logoUrl: "https://img.icons8.com/officel/2x/finland.png",
        completed: false
    },
    {
        id: 4,
        name: "prague",
        logoUrl: "https://img.icons8.com/officel/2x/czech-republic.png",
        completed: false
    },
    {
        id: 5,
        name: "budapest",
        logoUrl: "https://img.icons8.com/officel/2x/hungary.png",
        completed: false
    },
    {
        id: 6,
        name: "tokyo",
        logoUrl: "https://img.icons8.com/officel/2x/japan.png",
        completed: false
    },
    {
        id:7,
        name: "brasilia",
        logoUrl: "https://img.icons8.com/officel/2x/brazil.png",
        completed: false
    },{
        id: 8,
        name: "brussels",
        logoUrl: "https://img.icons8.com/officel/2x/belgium.png",
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