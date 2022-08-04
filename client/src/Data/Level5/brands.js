import brandsLogo from "../../media/images/brands-logo.jpg";
import shell from "../../media/images/shell.png";
import ford from "../../media/images/ford.png";
import hp from "../../media/images/hp.png";
import petroChina from "../../media/images/petroChina.png";
import wolkswagen from "../../media/images/wolkswagen.png";
import colgate from "../../media/images/colgate.png";
import mazda from "../../media/images/mazda.png";
import batman from "../../media/images/batman.png";
import motorola from "../../media/images/motorola.png";

const brandsLogos= [
    {
        id:0,
        name: "shell",
        logoUrl:shell,
        completed: false
    },
    {
        id:1,
        name: "ford",
        logoUrl:ford,
        completed: false
    },
    {
        id:2,
        name: "hp",
        logoUrl:hp,
        completed: false
    },
    {
        id: 3,
        name: "petro_china",
        logoUrl: petroChina,
        completed: false
    },
    {
        id: 4,
        name: "Volkswagen",
        logoUrl: wolkswagen,
        completed: false
    },
    {
        id: 5,
        name: "colgate",
        logoUrl: colgate,
        completed: false
    },
    {
        id: 6,
        name: "mazda",
        logoUrl: mazda,
        completed: false
    },
    {
        id: 7,
        name: "batman",
        logoUrl: batman,
        completed: false
    },
    {
        id: 8,
        name: "motorola",
        logoUrl: motorola,
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