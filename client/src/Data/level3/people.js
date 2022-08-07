import peopleLogo from '../../media/images/peopleLogo.png';
import cristianoRonaldo from '../../media/images/cristianoRonaldo.png';
import messi from '../../media/images/messi.png'
import ronaldinho from '../../media/images/ronaldinho.png';
import lewandowski from '../../media/images/lewandowski.png';
import benzema from '../../media/images/benzema.png';
import modric from '../../media/images/modric.png';
import mourinho from '../../media/images/mourinho.png';
import zidane from '../../media/images/zidane.png';
import mbappe from '../../media/images/mbappe.png';

const peopleLogos= [
    {
        id:0,
        name: "Cristiano_Ronaldo",
        logoUrl:cristianoRonaldo,
        completed: false
    },
    {
        id:1,
        name: "Messi",
        logoUrl:messi,
        completed: false
    },
    {
        id:2,
        name: "Ronaldinho",
        logoUrl:ronaldinho,
        completed: false
    },
    {
        id: 3,
        name: "Lewandowski",
        logoUrl: lewandowski,
        completed: false
    },
    {
        id: 4,
        name: "Benzema",
        logoUrl: benzema,
        completed: false
    },
    {
        id: 5,
        name: "modric",
        logoUrl: modric,
        completed: false
    },
    {
        id: 6,
        name: "Mourinho",
        logoUrl: mourinho,
        completed: false
    },
    {
        id:7,
        name: "Zidane",
        logoUrl: zidane,
        completed: false
    },{
        id: 8,
        name: "Mbappe",
        logoUrl: mbappe,
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