import brandsLogo from "../../media/images/brands-logo.jpg";
import lidl from "../../media/images/lidl.png";
import adidas from "../../media/images/addidas.png";
import paypal from "../../media/images/paypal.png";

const brandsLogos= [
    {
        id:0,
        name: "lidl",
        logoUrl:lidl,
        completed: false
    },
    {
        id:1,
        name: "facebook",
        logoUrl:"https://brandlogos.net/wp-content/uploads/2013/11/facebook-flat-vector-logo.png",
        completed: false
    },
    {
        id:2,
        name: "instagram",
        logoUrl:"https://brandlogos.net/wp-content/uploads/2016/05/instagram-logo-vector-download-400x400.jpg",
        completed: false
    },
    {
        id: 3,
        name: "xiaomi",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2015/09/xiaomi-logo-vector-download.jpg",
        completed: false
    },
    {
        id: 4,
        name: "youtube",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2016/06/YouTube-icon-400x400.png",
        completed: false
    },
    {
        id: 5,
        name: "adidas",
        logoUrl: adidas,
        completed: false
    },
    {
        id: 6,
        name: "paypal",
        logoUrl: paypal,
        completed: false
    },
    {
        id: 7,
        name: "twitter",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2015/09/twitter-square-logo-400x400.png",
        completed: false
    },
    {
        id: 8,
        name: "google_maps",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2015/09/new-google-maps-logo-vector-download-400x400.jpg",
        completed: false
    }
]

export const brands= {
    id: 0,
    array: brandsLogos,
    logo: brandsLogo,
    title: "Brands",
    completedLogos: [],
    completed: false
}