import animalsLogo from '../../media/images/animals.png';

const animalsLogos= [
    {
        id:0,
        name: "Koala",
        logoUrl:"https://cdn-icons-png.flaticon.com/128/3069/3069172.png",
        completed: false
    },
    {
        id:1,
        name: "fox",
        logoUrl:"https://img.icons8.com/external-dreamcreateicons-flat-dreamcreateicons/2x/external-fox-autumn-season-dreamcreateicons-flat-dreamcreateicons.png",
        completed: false
    },
    {
        id:2,
        name: "lion",
        logoUrl:"https://cdn-icons-png.flaticon.com/128/616/616412.png",
        completed: false
    },
    {
        id: 3,
        name: "chick",
        logoUrl: "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/2x/external-chick-easter-vitaliy-gorbachev-flat-vitaly-gorbachev.png",
        completed: false
    },
    {
        id: 4,
        name: "penguin",
        logoUrl: "https://cdn-icons-png.flaticon.com/128/826/826912.png",
        completed: false
    },
    {
        id: 5,
        name: "jellyfish",
        logoUrl: "https://img.icons8.com/external-wanicon-lineal-color-wanicon/2x/external-jellyfish-world-oceans-day-wanicon-lineal-color-wanicon.png",
        completed: false
    },
    {
        id: 6,
        name: "axolotl",
        logoUrl: "https://img.icons8.com/dusk/2x/axolotl.png",
        completed: false
    },
    {
        id:7,
        name: "giraffe",
        logoUrl: "https://img.icons8.com/external-tulpahn-flat-tulpahn/2x/external-giraffe-wild-animals-tulpahn-flat-tulpahn.png",
        completed: false
    },{
        id: 8,
        name: "rhino",
        logoUrl: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-rhinoceros-animal-flaticons-lineal-color-flat-icons-3.png",
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