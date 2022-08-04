import fluminense from "../../media/images/fluminense.png";
import galatasaray from "../../media/images/galatasaray.png";
import clubsLogo from "../../media/images/club-symbols.png";
import hamburg from '../../media/images/hamburg.png';
import guangzhou from '../../media/images/guangzhou.png';
import heerenveen from '../../media/images/heerenveen.png';
import interMilan from '../../media/images/interMilan.png';
import kaizerChiefs from '../../media/images/kaizerChiefs.png';
import leeds from '../../media/images/leeds.png';
import levante from '../../media/images/levante.png';

const clubsLogos=[
    {
        id:0,
        name: "fluminense",
        logoUrl:fluminense,
        completed: false,
    },
    {
        id: 1,
        name: "galatasaray",
        logoUrl: galatasaray,
        completed: false
    },
    {
        id: 2,
        name: "hamburg",
        logoUrl: hamburg,
        completed: false
    },
    {
        id: 3,
        name: "guangzhou",
        logoUrl: guangzhou,
        completed: false
    },
    {
        id: 4,
        name: "heerenveen",
        logoUrl: heerenveen,
        completed: false
    },
    {
        id: 5,
        name: "inter_milan",
        logoUrl: interMilan,
        completed: false
    },
    {
        id: 6,
        name: "kaizer_chiefs",
        logoUrl: kaizerChiefs,
        completed: false
    },
    {
        id: 7,
        name: "leeds",
        logoUrl: leeds,
        completed: false
    },
    {
        id: 8,
        name: 'levante',
        logoUrl: levante,
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