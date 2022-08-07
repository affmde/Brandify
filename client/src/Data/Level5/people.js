import peopleLogo from '../../media/images/peopleLogo.png';
import tigerWoods from '../../media/images/tigerWoods.png';
import federer from '../../media/images/federer.png'
import nadal from '../../media/images/nadal.png';
import neymar from '../../media/images/neymar.png';
import bolt from '../../media/images/bolt.png';
import sharapova from '../../media/images/sharapova.png';
import kobe from '../../media/images/kobe.png';
import zlatan from '../../media/images/zlatan.png';
import venus from '../../media/images/venus.png';

const peopleLogos= [
    {
        id:0,
        name: "Tiger_Woods",
        logoUrl:tigerWoods,
        completed: false
    },
    {
        id:1,
        name: "Federer",
        logoUrl:federer,
        completed: false
    },
    {
        id:2,
        name: "Nadal",
        logoUrl:nadal,
        completed: false
    },
    {
        id: 3,
        name: "Neymar",
        logoUrl: neymar,
        completed: false
    },
    {
        id: 4,
        name: "Usein_Bolt",
        logoUrl: bolt,
        completed: false
    },
    {
        id: 5,
        name: "Sharapova",
        logoUrl: sharapova,
        completed: false
    },
    {
        id: 6,
        name: "Kobe_Bryant",
        logoUrl: kobe,
        completed: false
    },
    {
        id:7,
        name: "Ibrahimovic",
        logoUrl: zlatan,
        completed: false
    },{
        id: 8,
        name: "Venus_Williams",
        logoUrl: venus,
        completed: false
    }
]

export const people= {
    id: 0,
    array: peopleLogos,
    logo: peopleLogo,
    title: "People",
    completedLogos: [],
    completed: false,
    redeem: false
}