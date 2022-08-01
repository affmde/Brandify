import salzburg from "../../media/images/salzburg.png";
import sion from "../../media/images/sion.png";
import clubsLogo from "../../media/images/club-symbols.png";
import cskaMoscow from '../../media/images/cska_moscow.png';
import carpi from '../../media/images/carpi.png';
import monaco from '../../media/images/monaco.png';
import bournemouth from '../../media/images/bournemouth.png';
import lokomotiv from '../../media/images/lokomotiv.png';
import youngBoys from '../../media/images/youngBoys.png';
import malmo from '../../media/images/malmo.png';

const clubsLogos=[
    {
        id:0,
        name: "salzburg",
        logoUrl:salzburg,
        completed: false,
    },
    {
        id: 1,
        name: "sion",
        logoUrl: sion,
        completed: false
    },
    {
        id: 2,
        name: "cska_moscow",
        logoUrl: cskaMoscow,
        completed: false
    },
    {
        id: 3,
        name: "carpi",
        logoUrl: carpi,
        completed: false
    },
    {
        id: 4,
        name: "monaco",
        logoUrl: monaco,
        completed: false
    },
    {
        id: 5,
        name: "bournemouth",
        logoUrl: bournemouth,
        completed: false
    },
    {
        id: 6,
        name: "lokomotiv_moscow",
        logoUrl: lokomotiv,
        completed: false
    },
    {
        id: 7,
        name: "young_boys",
        logoUrl: youngBoys,
        completed: false
    },
    {
        id: 8,
        name: 'mlamö',
        logoUrl: malmo,
        completed: false
    }
]

export const clubs={
    id: 0,
    array: clubsLogos,
    logo: clubsLogo,
    title: "Clubs",
    completedLogos:[],
    completed: false
}