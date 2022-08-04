import brandsLogo from "../../media/images/brands-logo.jpg";
import johnnieWalker from "../../media/images/johnnieWalker.png";
import wifi from "../../media/images/wifi.png";
import nfl from "../../media/images/nfl.png";
import expedia from "../../media/images/expedia.png";
import vodafone from "../../media/images/vodafone.png";
import bosch from "../../media/images/bosch.png";
import repsol from "../../media/images/repsol.png";

const brandsLogos= [
    {
        id:0,
        name: "johnnie_walker",
        logoUrl:johnnieWalker,
        completed: false
    },
    {
        id:1,
        name: "wifi",
        logoUrl:wifi,
        completed: false
    },
    {
        id:2,
        name: "microsoft_windows",
        logoUrl:"https://brandlogos.net/wp-content/uploads/2015/11/microsoft-windows-logo-vector-download-400x400.jpg",
        completed: false
    },
    {
        id: 3,
        name: "nfl",
        logoUrl: nfl,
        completed: false
    },
    {
        id: 4,
        name: "expedia",
        logoUrl: expedia,
        completed: false
    },
    {
        id: 5,
        name: "google_chrome",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2014/10/Google-Chrome-logo-vector-download-300x300.png",
        completed: false
    },
    {
        id: 6,
        name: "vodafone",
        logoUrl: vodafone,
        completed: false
    },
    {
        id: 7,
        name: "bosch",
        logoUrl: bosch,
        completed: false
    },
    {
        id: 8,
        name: "repsol",
        logoUrl: repsol,
        completed: false
    }
]

export const brands= {
    id: 0,
    array: brandsLogos,
    logo: brandsLogo,
    title: "Brands",
    completedLogos: [],
    completed: false,
    redeem: false
}