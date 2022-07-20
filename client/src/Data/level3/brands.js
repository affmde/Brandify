import brandsLogo from "../../media/images/brands-logo.jpg";
import cocacola from "../../media/images/cocacola.png";
import samsung from "../../media/images/samsung.png";
import disney from "../../media/images/disney.png";
import intel from "../../media/images/intel.png";
import cisco from "../../media/images/cisco.png";
import mercedes from "../../media/images/mercedes.png";
import ibm from "../../media/images/ibm.png";
import marlboro from "../../media/images/marlboro.png";
import visa from "../../media/images/visa.png";

const brandsLogos= [
    {
        id:0,
        name: "coca_cola",
        logoUrl:cocacola,
        completed: false
    },
    {
        id:1,
        name: "samsung",
        logoUrl:samsung,
        completed: false
    },
    {
        id:2,
        name: "disney",
        logoUrl:disney,
        completed: false
    },
    {
        id: 3,
        name: "intel",
        logoUrl: intel,
        completed: false
    },
    {
        id: 4,
        name: "cisco",
        logoUrl: cisco,
        completed: false
    },
    {
        id: 5,
        name: "ibm",
        logoUrl: ibm,
        completed: false
    },
    {
        id: 6,
        name: "mercedes",
        logoUrl: mercedes,
        completed: false
    },
    {
        id: 7,
        name: "marlboro",
        logoUrl: marlboro,
        completed: false
    },
    {
        id: 8,
        name: "visa",
        logoUrl: visa,
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