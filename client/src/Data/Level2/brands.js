import brandsLogo from "../../media/images/brands-logo.jpg";
import toyota from "../../media/images/toyota.png";
import honda from "../../media/images/honda.png"
import gucci from "../../media/images/gucci.png";
import nescafe from "../../media/images/nescafe.png";
import google from "../../media/images/google.png";
import amazon from "../../media/images/amazon.png"

const brandsLogos= [
    {
        id:0,
        name: "google",
        logoUrl:google,
        completed: false
    },
    {
        id:1,
        name: "amazon",
        logoUrl:amazon,
        completed: false
    },
    {
        id:2,
        name: "toyota",
        logoUrl:toyota,
        completed: false
    },
    {
        id: 3,
        name: "louis_Vuitton",
        logoUrl: "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/louis-vuitton-logo.png",
        completed: false
    },
    {
        id: 4,
        name: "ge",
        logoUrl: "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/ge-logo.png",
        completed: false
    },
    {
        id: 5,
        name: "honda",
        logoUrl: honda,
        completed: false
    },
    {
        id: 6,
        name: "starbucks",
        logoUrl: "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/starbucks-logo.png",
        completed: false
    },
    {
        id: 7,
        name: "nescafe",
        logoUrl: nescafe,
        completed: false
    },
    {
        id: 8,
        name: "gucci",
        logoUrl: gucci,
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