import capitalsLogo from '../../media/images/capitals.png';

const capitalsLogos= [
    {
        id:0,
        name: "jacarta",
        logoUrl:"https://img.icons8.com/officel/2x/indonesia--v1.png",
        completed: false
    },
    {
        id:1,
        name: "luanda",
        logoUrl:"https://img.icons8.com/officel/2x/angola.png",
        completed: false
    },
    {
        id:2,
        name: "minsk",
        logoUrl:"https://img.icons8.com/officel/2x/belarus.png",
        completed: false
    },
    {
        id: 3,
        name: "vienna",
        logoUrl: "https://img.icons8.com/officel/2x/austria.png",
        completed: false
    },
    {
        id: 4,
        name: "praia",
        logoUrl: "https://img.icons8.com/officel/2x/cape-verde.png",
        completed: false
    },
    {
        id: 5,
        name: "baku",
        logoUrl: "https://img.icons8.com/officel/2x/azerbaijan.png",
        completed: false
    },
    {
        id: 6,
        name: "Reykjavík",
        logoUrl: "https://img.icons8.com/officel/2x/iceland.png",
        completed: false
    },
    {
        id:7,
        name: "bamako",
        logoUrl: "https://img.icons8.com/officel/2x/mali.png",
        completed: false
    },{
        id: 8,
        name: "san_marino",
        logoUrl: "https://img.icons8.com/officel/2x/san-marino.png",
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