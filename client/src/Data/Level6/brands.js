import brandsLogo from "../../media/images/brands-logo.jpg";
import roxy from "../../media/images/roxy.png";
import lacoste from "../../media/images/lacoste.png";
import firefox from "../../media/images/firefox.png";
import boeing from "../../media/images/boeing.png";
import hyundai from "../../media/images/hyundai.png";
import mitsubishi from "../../media/images/mitsubishi.png";
import rolex from "../../media/images/rolex.png";
import bentley from "../../media/images/bentley.png";
import baskinRobbins from "../../media/images/baskinRobins.png";

const brandsLogos= [
    {
        id:0,
        name: "roxy",
        logoUrl:roxy,
        completed: false
    },
    {
        id:1,
        name: "lacoste",
        logoUrl:lacoste,
        completed: false
    },
    {
        id:2,
        name: "firefox",
        logoUrl:firefox,
        completed: false
    },
    {
        id: 3,
        name: "boeing",
        logoUrl: boeing,
        completed: false
    },
    {
        id: 4,
        name: "hyundai",
        logoUrl: hyundai,
        completed: false
    },
    {
        id: 5,
        name: "mitsubishi",
        logoUrl: mitsubishi,
        completed: false
    },
    {
        id: 6,
        name: "rolex",
        logoUrl: rolex,
        completed: false
    },
    {
        id: 7,
        name: "bentley",
        logoUrl: bentley,
        completed: false
    },
    {
        id: 8,
        name: "baskin_robbins",
        logoUrl: baskinRobbins,
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