import capitalsLogo from '../../media/images/capitals.png';

const capitalsLogos= [
    {
        id:0,
        name: "bishkek",
        logoUrl:"https://img.icons8.com/offices/2x/kyrgyzstan.png",
        completed: false
    },
    {
        id:1,
        name: "skopje",
        logoUrl:"https://img.icons8.com/offices/2x/macedonia.png",
        completed: false
    },
    {
        id:2,
        name: "wellington",
        logoUrl:"https://img.icons8.com/offices/2x/new-zealand.png",
        completed: false
    },
    {
        id: 3,
        name: "abuja",
        logoUrl: "https://img.icons8.com/offices/2x/nigeria-flag.png",
        completed: false
    },
    {
        id: 4,
        name: "maputo",
        logoUrl: "https://img.icons8.com/offices/2x/mozambique-flag.png",
        completed: false
    },
    {
        id: 5,
        name: "Naypyidaw",
        logoUrl: "https://img.icons8.com/offices/2x/myanmar.png",
        completed: false
    },
    {
        id: 6,
        name: "San_José",
        logoUrl: "https://img.icons8.com/offices/2x/costa-rica.png",
        completed: false
    },
    {
        id:7,
        name: "havana",
        logoUrl: "https://img.icons8.com/offices/2x/cuba.png",
        completed: false
    },{
        id: 8,
        name: "Yerevan",
        logoUrl: "https://img.icons8.com/offices/2x/armenia.png",
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