import animalsLogo from '../../media/images/animals.png';

const animalsLogos= [
    {
        id:0,
        name: "wasp",
        logoUrl:"https://img.icons8.com/office/2x/wasp.png",
        completed: false
    },
    {
        id:1,
        name: "parrot",
        logoUrl:"https://img.icons8.com/office/2x/parrot.png",
        completed: false
    },
    {
        id:2,
        name: "stork",
        logoUrl:"https://img.icons8.com/office/2x/stork.png",
        completed: false
    },
    {
        id: 3,
        name: "pelican",
        logoUrl: "https://img.icons8.com/office/2x/pelican.png",
        completed: false
    },
    {
        id: 4,
        name: "falcon",
        logoUrl: "https://img.icons8.com/office/2x/falcon.png",
        completed: false
    },
    {
        id: 5,
        name: "kiwi_bird",
        logoUrl: "https://img.icons8.com/office/2x/kiwi-bird.png",
        completed: false
    },
    {
        id: 6,
        name: "owl",
        logoUrl: "https://img.icons8.com/cotton/2x/owl--v1.png",
        completed: false
    },
    {
        id:7,
        name: "pidgeon",
        logoUrl: "https://img.icons8.com/cotton/2x/pigeon--v1.png",
        completed: false
    },{
        id: 8,
        name: "albatross",
        logoUrl: "https://img.icons8.com/cotton/2x/albatross--v3.png",
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