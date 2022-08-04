import brandsLogo from "../../media/images/brands-logo.jpg";
import googlePlay from "../../media/images/googlePlay.png";
import jackDaniels from "../../media/images/jackDaniels.png";
import caterpillar from "../../media/images/caterpillar.png";
import porsche from "../../media/images/porsche.png";
import whatsapp from "../../media/images/whatsapp.png";

const brandsLogos= [
    {
        id:0,
        name: "google_play",
        logoUrl:googlePlay,
        completed: false
    },
    {
        id:1,
        name: "wechat",
        logoUrl:"https://brandlogos.net/wp-content/uploads/2016/11/wechat-logo-preview-400x400.png",
        completed: false
    },
    {
        id:2,
        name: "jack_daniels",
        logoUrl:jackDaniels,
        completed: false
    },
    {
        id: 3,
        name: "gmail",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2015/09/google-mail-logo-vector-download-400x400.jpg",
        completed: false
    },
    {
        id: 4,
        name: "caterpillar",
        logoUrl: caterpillar,
        completed: false
    },
    {
        id: 5,
        name: "porsche",
        logoUrl: porsche,
        completed: false
    },
    {
        id: 6,
        name: "whatsapp",
        logoUrl: whatsapp,
        completed: false
    },
    {
        id: 7,
        name: "snapchat",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2015/11/snapchat-logo-brandlogos.net_-300x300.png",
        completed: false
    },
    {
        id: 8,
        name: "messenger",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2015/08/facebook-messenger-logo-400x400.png",
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