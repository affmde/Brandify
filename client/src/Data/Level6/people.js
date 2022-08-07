import peopleLogo from '../../media/images/peopleLogo.png';
import axl from '../../media/images/axl.png';
import bono from '../../media/images/bono.png'
import selena from '../../media/images/selena.png';
import elvis from '../../media/images/elvis.png';
import chrisMartin from '../../media/images/chrisMartin.png';
import shakira from '../../media/images/shakira.png';
import rihanna from '../../media/images/rihanna.png';
import rickyMartin from '../../media/images/rickyMartin.png';
import beyonce from '../../media/images/beyonce.png';

const peopleLogos= [
    {
        id:0,
        name: "Axl_Rose",
        logoUrl:axl,
        completed: false
    },
    {
        id:1,
        name: "Bono",
        logoUrl:bono,
        completed: false
    },
    {
        id:2,
        name: "Selena_Gomez",
        logoUrl:selena,
        completed: false
    },
    {
        id: 3,
        name: "Elvis_Presley",
        logoUrl: elvis,
        completed: false
    },
    {
        id: 4,
        name: "Chris_Martin",
        logoUrl: chrisMartin,
        completed: false
    },
    {
        id: 5,
        name: "Shakira",
        logoUrl: shakira,
        completed: false
    },
    {
        id: 6,
        name: "Rihanna",
        logoUrl: rihanna,
        completed: false
    },
    {
        id:7,
        name: "Ricky_Martin",
        logoUrl: rickyMartin,
        completed: false
    },{
        id: 8,
        name: "Beyonce",
        logoUrl: beyonce,
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