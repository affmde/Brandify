import peopleLogo from '../../media/images/peopleLogo.png';
import xavi from '../../media/images/xavi.png';
import guardiola from '../../media/images/guardiola.png'
import beckham from '../../media/images/beckham.png';
import sanna from '../../media/images/sanna.png';
import diCaprio from '../../media/images/diCaprio.png';
import dwain from '../../media/images/dwain.png';
import napoleon from '../../media/images/napoleon.png';
import bradPitt from '../../media/images/bradPitt.png';
import tomCruise from '../../media/images/tomCruise.png';

const peopleLogos= [
    {
        id:0,
        name: "Xavi",
        logoUrl:xavi,
        completed: false
    },
    {
        id:1,
        name: "Guardiola",
        logoUrl:guardiola,
        completed: false
    },
    {
        id:2,
        name: "Beckham",
        logoUrl:beckham,
        completed: false
    },
    {
        id: 3,
        name: "Sanna_Marin",
        logoUrl: sanna,
        completed: false
    },
    {
        id: 4,
        name: "Leonardo_di_Caprio",
        logoUrl: diCaprio,
        completed: false
    },
    {
        id: 5,
        name: "Dwayne_Johnson",
        logoUrl: dwain,
        completed: false
    },
    {
        id: 6,
        name: "Napoleon",
        logoUrl: napoleon,
        completed: false
    },
    {
        id:7,
        name: "Brad_Pitt",
        logoUrl: bradPitt,
        completed: false
    },{
        id: 8,
        name: "Tom_Cruise",
        logoUrl: tomCruise,
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