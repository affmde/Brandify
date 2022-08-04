import seongnam from "../../media/images/seongnam.png";
import huracan from "../../media/images/huracan.png";
import clubsLogo from "../../media/images/club-symbols.png";
import santaClaus from '../../media/images/santaClaus.png';
import marseille from '../../media/images/marseille.png';
import roma from '../../media/images/roma.png';
import cluj from '../../media/images/cluj.png';
import caen from '../../media/images/caen.png';
import catania from '../../media/images/catania.png';
import coloColo from '../../media/images/coloColo.png';

const clubsLogos=[
    {
        id:0,
        name: "seongnam",
        logoUrl:seongnam,
        completed: false,
    },
    {
        id: 1,
        name: "huracan",
        logoUrl: huracan,
        completed: false
    },
    {
        id: 2,
        name: "santa_claus",
        logoUrl: santaClaus,
        completed: false
    },
    {
        id: 3,
        name: "marseille",
        logoUrl: marseille,
        completed: false
    },
    {
        id: 4,
        name: "roma",
        logoUrl: roma,
        completed: false
    },
    {
        id: 5,
        name: "cluj",
        logoUrl: cluj,
        completed: false
    },
    {
        id: 6,
        name: "caen",
        logoUrl: caen,
        completed: false
    },
    {
        id: 7,
        name: "catania",
        logoUrl: catania,
        completed: false
    },
    {
        id: 8,
        name: 'colo_colo',
        logoUrl: coloColo,
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