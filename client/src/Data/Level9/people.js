import peopleLogo from '../../media/images/peopleLogo.png';
import bullock from '../../media/images/bullock.png';
import ariana from '../../media/images/ariana.png'
import julia from '../../media/images/julia.png';
import mars from '../../media/images/mars.png';
import drake from '../../media/images/drake.png';
import demi from '../../media/images/demiLovato.png';
import bieber from '../../media/images/bieber.png';
import kurt from '../../media/images/kurt.png';
import bruce from '../../media/images/bruce.png';

const peopleLogos= [
    {
        id:0,
        name: "Sandra_Bullock",
        logoUrl:bullock,
        completed: false
    },
    {
        id:1,
        name: "Ariana_Grande",
        logoUrl:ariana,
        completed: false
    },
    {
        id:2,
        name: "Julia_Roberts",
        logoUrl:julia,
        completed: false
    },
    {
        id: 3,
        name: "Bruno_Mars",
        logoUrl: mars,
        completed: false
    },
    {
        id: 4,
        name: "Drake",
        logoUrl: drake,
        completed: false
    },
    {
        id: 5,
        name: "Demi_Lovato",
        logoUrl: demi,
        completed: false
    },
    {
        id: 6,
        name: "Justin_Bieber",
        logoUrl: bieber,
        completed: false
    },
    {
        id:7,
        name: "Kurt_Cobain",
        logoUrl: kurt,
        completed: false
    },{
        id: 8,
        name: "Bruce_Springsteen",
        logoUrl: bruce,
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