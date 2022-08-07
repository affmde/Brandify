import peopleLogo from '../../media/images/peopleLogo.png';
import hamilton from '../../media/images/hamilton.png';
import schumacher from '../../media/images/schumacher.png'
import jayZ from '../../media/images/jay-z.png';
import eminem from '../../media/images/eminem.png';
import lance from '../../media/images/lance.png';
import alonso from '../../media/images/alonso.png';
import djokovic from '../../media/images/djokovic.png';
import kardashian from '../../media/images/kardashian.png';
import iniesta from '../../media/images/iniesta.png';

const peopleLogos= [
    {
        id:0,
        name: "Hamilton",
        logoUrl:hamilton,
        completed: false
    },
    {
        id:1,
        name: "Schumacher",
        logoUrl:schumacher,
        completed: false
    },
    {
        id:2,
        name: "Jay_Z",
        logoUrl:jayZ,
        completed: false
    },
    {
        id: 3,
        name: "Eminem",
        logoUrl: eminem,
        completed: false
    },
    {
        id: 4,
        name: "Lance_Armstrong",
        logoUrl: lance,
        completed: false
    },
    {
        id: 5,
        name: "Alonso",
        logoUrl: alonso,
        completed: false
    },
    {
        id: 6,
        name: "Djokovic",
        logoUrl: djokovic,
        completed: false
    },
    {
        id:7,
        name: "Kim_Kardashian",
        logoUrl: kardashian,
        completed: false
    },{
        id: 8,
        name: "Iniesta",
        logoUrl: iniesta,
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