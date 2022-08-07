import peopleLogo from '../../media/images/peopleLogo.png';
import jeffBezos from '../../media/images/jeffBezos.png';
import musk from '../../media/images/musk.png'
import guterres from '../../media/images/guterres.png';
import elizabethII from '../../media/images/elizabethII.png';
import ninisto from '../../media/images/ninisto.png';
import macron from '../../media/images/macron.png';
import KingGustaf from '../../media/images/KingGustaf.png';
import markZ from '../../media/images/markZ.png';
import jackDorsey from '../../media/images/jackDorsey.png';

const peopleLogos= [
    {
        id:0,
        name: "Jeff_Bezos",
        logoUrl:jeffBezos,
        completed: false
    },
    {
        id:1,
        name: "Elon_Musk",
        logoUrl:musk,
        completed: false
    },
    {
        id:2,
        name: "Guterres",
        logoUrl:guterres,
        completed: false
    },
    {
        id: 3,
        name: "Elizabeth_II",
        logoUrl: elizabethII,
        completed: false
    },
    {
        id: 4,
        name: "Sauli_Niinistö",
        logoUrl: ninisto,
        completed: false
    },
    {
        id: 5,
        name: "Macron",
        logoUrl: macron,
        completed: false
    },
    {
        id: 6,
        name: "Carl_XVI_Gustaf",
        logoUrl: KingGustaf,
        completed: false
    },
    {
        id:7,
        name: "Mark_Zuckerberg",
        logoUrl: markZ,
        completed: false
    },{
        id: 8,
        name: "Jack_Dorsey",
        logoUrl: jackDorsey,
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