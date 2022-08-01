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
        logoUrl:"https://cdn-icons.flaticon.com/png/128/2153/premium/2153090.png?token=exp=1659359092~hmac=fd0d308ee5bd030e4e1c63b655d564f8",
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
        logoUrl: "https://cdn-icons.flaticon.com/png/128/2632/premium/2632839.png?token=exp=1659359092~hmac=f94fe779b11da7acc4be11a568212032",
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
        logoUrl: "https://cdn-icons.flaticon.com/png/128/2977/premium/2977327.png?token=exp=1659359092~hmac=e4317aa139af0322abb88cfe5b1cd42a",
        completed: false
    },
    {
        id: 6,
        name: "axolotl",
        logoUrl: "https://cdn-icons.flaticon.com/png/128/6187/premium/6187446.png?token=exp=1659359092~hmac=bb36d61c050f0c3d1c074a3c48e4114c",
        completed: false
    },
    {
        id:7,
        name: "giraffe",
        logoUrl: "https://cdn-icons.flaticon.com/png/128/3065/premium/3065712.png?token=exp=1659359302~hmac=68f34fcac9fc8291413c596fdd5e9b8a",
        completed: false
    },{
        id: 8,
        name: "rhino",
        logoUrl: "https://cdn-icons.flaticon.com/png/128/3065/premium/3065734.png?token=exp=1659359327~hmac=ea77dbd0e902c1b3be4561b209d3ec5c",
        completed: false
    }
]

export const animals= {
    id: 0,
    array: animalsLogos,
    logo: animalsLogo,
    title: "Animals",
    completedLogos: [],
    completed: false
}