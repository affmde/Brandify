import realSociedad from "../../media/images/realSociedad.png";
import palermo from "../../media/images/palermo.png";
import clubsLogo from "../../media/images/club-symbols.png";
import manCity from '../../media/images/manCity.png';
import sevilla from '../../media/images/sevilla.png';
import sampdoria from '../../media/images/sampdoria.png';
import belenenses from '../../media/images/belenenses.png';
import sporting from '../../media/images/sporting.png';
import pachuca from '../../media/images/pachuca.png';
import hoffenheim from '../../media/images/hoffenheim.png';

const clubsLogos=[
    {
        id:0,
        name: "real_sociedad",
        logoUrl:realSociedad,
        completed: false,
    },
    {
        id: 1,
        name: "palermo",
        logoUrl: palermo,
        completed: false
    },
    {
        id: 2,
        name: "manchester_city",
        logoUrl: manCity,
        completed: false
    },
    {
        id: 3,
        name: "sevilla",
        logoUrl: sevilla,
        completed: false
    },
    {
        id: 4,
        name: "sampdoria",
        logoUrl: sampdoria,
        completed: false
    },
    {
        id: 5,
        name: "belenenses",
        logoUrl: belenenses,
        completed: false
    },
    {
        id: 6,
        name: "sporting",
        logoUrl: sporting,
        completed: false
    },
    {
        id: 7,
        name: "pachuca",
        logoUrl: pachuca,
        completed: false
    },
    {
        id: 8,
        name: 'hoffenheim',
        logoUrl: hoffenheim,
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