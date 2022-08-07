import peopleLogo from '../../media/images/peopleLogo.png';
import potter from '../../media/images/potter.png';
import arnoldSchwa from '../../media/images/arnoldSchwa.png'
import tomHanks from '../../media/images/tomHanks.png';
import morganFreeman from '../../media/images/morganFreeman.png';
import harrisonFord from '../../media/images/harrisonFord.png';
import bruceWillis from '../../media/images/bruceWillis.png';
import eddieMurphy from '../../media/images/eddieMurphy.png';
import willSmith from '../../media/images/willSmith.png';
import alPacino from '../../media/images/alPacino.png';

const peopleLogos= [
    {
        id:0,
        name: "Daniel_Radcliffe",
        logoUrl:potter,
        completed: false
    },
    {
        id:1,
        name: "Arnold_Schwarzenegger",
        logoUrl:arnoldSchwa,
        completed: false
    },
    {
        id:2,
        name: "Tom_Hanks",
        logoUrl:tomHanks,
        completed: false
    },
    {
        id: 3,
        name: "Morgan_Freeman",
        logoUrl: morganFreeman,
        completed: false
    },
    {
        id: 4,
        name: "Harrison_Ford",
        logoUrl: harrisonFord,
        completed: false
    },
    {
        id: 5,
        name: "Bruce_Willis",
        logoUrl: bruceWillis,
        completed: false
    },
    {
        id: 6,
        name: "Eddie_Murphy",
        logoUrl: eddieMurphy,
        completed: false
    },
    {
        id:7,
        name: "Will_Smith",
        logoUrl: willSmith,
        completed: false
    },{
        id: 8,
        name: "Al_Pacino",
        logoUrl: alPacino,
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