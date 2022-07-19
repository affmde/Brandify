import tottenham from "../../media/images/tottenham.png";
import leverkusen from "../../media/images/leverkusen.png";
import clubsLogo from "../../media/images/club-symbols.jpg";
import chicagoBulls from '../../media/images/chicagoBulls.png';
import milan from '../../media/images/milan.png';
import paris from '../../media/images/paris.png';
import saoPaulo from '../../media/images/saoPaulo.png';
import river from '../../media/images/river.png';
import bayernMunich from '../../media/images/bayernMunich.png';
import manUnited from '../../media/images/manUnited.png';

const clubsLogos=[
    {
        id:0,
        name: "tottenham",
        logoUrl:tottenham,
        completed: false,
    },
    {
        id: 1,
        name: "man_united",
        logoUrl: manUnited,
        completed: false
    },
    {
        id: 2,
        name: "Bayern_Munich",
        logoUrl: bayernMunich,
        completed: false
    },
    {
        id: 3,
        name: "leverkusen",
        logoUrl: leverkusen,
        completed: false
    },
    {
        id: 4,
        name: "chicago_bulls",
        logoUrl: chicagoBulls,
        completed: false
    },
    {
        id: 5,
        name: "milan",
        logoUrl: milan,
        completed: false
    },
    {
        id: 6,
        name: "paris",
        logoUrl: paris,
        completed: false
    },
    {
        id: 7,
        name: "sao_paulo",
        logoUrl: saoPaulo,
        completed: false
    },
    {
        id: 8,
        name: 'river_plate',
        logoUrl: river,
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