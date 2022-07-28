import foodLogo from '../../media/images/foodMainLogo.png';

const foodsLogos= [
    {
        id:0,
        name: "doughnut",
        logoUrl:"https://img.icons8.com/doodle/2x/doughnut.png",
        completed: false
    },
    {
        id:1,
        name: "carrot",
        logoUrl:"https://img.icons8.com/doodle/2x/carrot.png",
        completed: false
    },
    {
        id:2,
        name: "corn",
        logoUrl:"https://img.icons8.com/doodle/2x/corn--v1.png",
        completed: false
    },
    {
        id: 3,
        name: "broccoli",
        logoUrl: "https://img.icons8.com/doodle/2x/broccoli.png",
        completed: false
    },
    {
        id: 4,
        name: "tomato",
        logoUrl: "https://img.icons8.com/doodle/2x/tomato--v1.png",
        completed: false
    },
    {
        id: 5,
        name: "coffee_beans",
        logoUrl: "https://img.icons8.com/doodle/2x/coffee-beans-.png",
        completed: false
    },
    {
        id: 6,
        name: "mushroom",
        logoUrl: "https://img.icons8.com/doodle/2x/mushroom--v2.png",
        completed: false
    },
    {
        id:7,
        name: "olive",
        logoUrl: "https://img.icons8.com/doodle/2x/olive--v1.png",
        completed: false
    },
    {
        id: 8,
        name: "paprika",
        logoUrl: "https://img.icons8.com/doodle/2x/paprika--v1.png",
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