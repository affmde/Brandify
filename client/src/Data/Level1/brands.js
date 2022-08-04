import brandsLogo from "../../media/images/brands-logo.jpg";
import jpMorgan from "../../media/images/jpMorgan.png"

const brandsLogos= [
    {
        id:0,
        name: "mcdonalds",
        logoUrl:"https://img.icons8.com/color/344/mcdonalds-app.png",
        completed: false
    },
    {
        id:1,
        name: "nike",
        logoUrl:"https://img.icons8.com/ios-filled/2x/nike.png",
        completed: false
    },
    {
        id:2,
        name: "microsoft",
        logoUrl:"https://img.icons8.com/color/2x/microsoft.png",
        completed: false
    },
    {
        id: 3,
        name: "facebook",
        logoUrl: "https://img.icons8.com/color/2x/facebook-new.png",
        completed: false
    },
    {
        id: 4,
        name: "instagram",
        logoUrl: "https://img.icons8.com/color/2x/instagram-new.png",
        completed: false
    },
    {
        id: 5,
        name: "twitter",
        logoUrl: "https://img.icons8.com/fluency/2x/twitter.png",
        completed: false
    },
    {
        id: 6,
        name: "jp_morgan",
        logoUrl: jpMorgan,
        completed: false
    },
    {
        id:7,
        name: "apple",
        logoUrl: "https://img.icons8.com/office/344/mac-os.png",
        completed: false
    },{
        id: 8,
        name: "ferrari",
        logoUrl: "https://img.icons8.com/color/2x/ferrari-badge.png",
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