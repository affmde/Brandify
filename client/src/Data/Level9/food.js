import foodLogo from '../../media/images/foodMainLogo.png';
import karjalanpiirakka from '../../media/images/karjalanpiirakka.png';
import tiramisu from '../../media/images/tiramisu.png';
import fondue from '../../media/images/fondue.png';

const foodsLogos= [
    {
        id:0,
        name: "sushi",
        logoUrl:"https://www.holidify.com/images/cmsuploads/compressed/c700x420_20181227132950.jpg",
        completed: false
    },
    {
        id:1,
        name: "ramen",
        logoUrl:"https://www.holidify.com/images/cmsuploads/compressed/shoyu-ramen_20181227133143.jpg",
        completed: false
    },
    {
        id:2,
        name: "Apfelstrudel",
        logoUrl:"https://www.holidify.com/images/cmsuploads/compressed/48824979_20181227134147.jpg",
        completed: false
    },
    {
        id: 3,
        name: "goulash",
        logoUrl: "https://www.holidify.com/images/cmsuploads/compressed/20160205-beef-goulash-hungarian-recipe-food-lab-26_20181227134326.jpg",
        completed: false
    },
    {
        id: 4,
        name: "lasagna",
        logoUrl: "https://www.holidify.com/images/cmsuploads/compressed/9dd2e32b-613d-4515-9597-39ba6ad86b8b_20181227134422.jpg",
        completed: false
    },
    {
        id: 5,
        name: "donuts",
        logoUrl: "https://www.holidify.com/images/cmsuploads/compressed/donuts-1491076124j7c_20200402124732.jpg",
        completed: false
    },
    {
        id: 6,
        name: "karjalanpiirakka",
        logoUrl: karjalanpiirakka,
        completed: false
    },
    {
        id:7,
        name: "tiramisu",
        logoUrl: tiramisu,
        completed: false
    },
    {
        id: 8,
        name: "fondue",
        logoUrl: fondue,
        completed: false
    }
]

export const foods= {
    id: 0,
    array: foodsLogos,
    logo: foodLogo,
    title: "Foods",
    completedLogos: [],
    completed: false
}