import brandsLogo from "../../media/images/brands-logo.jpg";
import pepsi from "../../media/images/pepsi.png";
import hermesParis from "../../media/images/hermesParis.png";
import netflix from "../../media/images/netflix.png";
import ikea from "../../media/images/ikea.png";
import audi from "../../media/images/audi.png";
import mastercard from "../../media/images/mastercard.png";
import zara from "../../media/images/zara.png";
import hsbc from "../../media/images/hsbc.png";
import ups from "../../media/images/ups.png";

const brandsLogos= [
    {
        id:0,
        name: "pepsi",
        logoUrl:pepsi,
        completed: false
    },
    {
        id:1,
        name: "hermes_paris",
        logoUrl:hermesParis,
        completed: false
    },
    {
        id:2,
        name: "netflix",
        logoUrl:netflix,
        completed: false
    },
    {
        id: 3,
        name: "ikea",
        logoUrl: ikea,
        completed: false
    },
    {
        id: 4,
        name: "audi",
        logoUrl: audi,
        completed: false
    },
    {
        id: 5,
        name: "mastercard",
        logoUrl: mastercard,
        completed: false
    },
    {
        id: 6,
        name: "zara",
        logoUrl: zara,
        completed: false
    },
    {
        id: 7,
        name: "hsbc",
        logoUrl: hsbc,
        completed: false
    },
    {
        id: 8,
        name: "ups",
        logoUrl: ups,
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