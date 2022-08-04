import benfica from "../../media/images/benfica.png";
import ajax from "../../media/images/ajax.png";
import napoli from "../../media/images/napoli.png";
import chelsea from "../../media/images/chelsea.png";
import clubsLogo from "../../media/images/club-symbols.png";
import arsenal from "../../media/images/arsenal.png";
import liverpool from "../../media/images/liverpool.png";

const clubsLogos=[
    {
        id:0,
        name: "benfica",
        logoUrl:benfica,
        completed: false,
    },
    {
        id: 1,
        name: "barcelona",
        logoUrl: "https://img.icons8.com/color/344/barcelona-fc.png",
        completed: false
    },
    {
        id: 2,
        name: "chelsea",
        logoUrl: chelsea,
        completed: false
    },
    {
        id: 3,
        name: "Arsenal",
        logoUrl: arsenal,
        completed: false
    },
    {
        id: 4,
        name: "liverpool",
        logoUrl: liverpool,
        completed: false
    },
    {
        id: 5,
        name: "ajax",
        logoUrl: ajax,
        completed: false
    },
    {
        id: 6,
        name: "napoli",
        logoUrl: napoli,
        completed: false
    },
    {
        id: 7,
        name: "real_madrid",
        logoUrl: "https://img.icons8.com/ios/2x/real-madrid.png",
        completed: false
    },
    {
        id: 8,
        name: "juventus",
        logoUrl: "https://img.icons8.com/ios-filled/2x/juventus.png",
        completed: false
    }
]

export const clubs={
    id: 0,
    array: clubsLogos,
    logo: clubsLogo,
    title: "Clubs",
    completedLogos:[],
    completed: false,
    redeem: false
}