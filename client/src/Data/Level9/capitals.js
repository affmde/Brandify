import capitalsLogo from '../../media/images/capitals.png';
import ghana from '../../media/images/ghana.png';
import kenya from '../../media/images/kenya.png';
import malasya from '../../media/images/malasya.png';

const capitalsLogos= [
    {
        id:0,
        name: "Bandar_Seri_Begawan",
        logoUrl:"https://img.icons8.com/officel/2x/brunei-flag.png",
        completed: false
    },
    {
        id:1,
        name: "porto_novo",
        logoUrl:"https://img.icons8.com/officel/2x/benin.png",
        completed: false
    },
    {
        id:2,
        name: "buenos_aires",
        logoUrl:"https://img.icons8.com/officel/2x/argentina.png",
        completed: false
    },
    {
        id: 3,
        name: "Kinshasa",
        logoUrl: "https://img.icons8.com/officel/2x/congo.png",
        completed: false
    },
    {
        id: 4,
        name: "tblisi",
        logoUrl: "https://static.magflags.net/media/catalog/product/cache/75170699113cf9b1963820a3ea1bab40/G/E/GE_11.png",
        completed: false
    },
    {
        id: 5,
        name: "accra",
        logoUrl: ghana,
        completed: false
    },
    {
        id: 6,
        name: "jerusalem",
        logoUrl: "https://img.icons8.com/officel/2x/israel.png",
        completed: false
    },
    {
        id:7,
        name: "nairobi",
        logoUrl: kenya,
        completed: false
    },{
        id: 8,
        name: "kuala_lumpur",
        logoUrl: malasya,
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