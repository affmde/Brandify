import munique from "../../media/images/1860munique.png";
import atleticoMadrid from "../../media/images/atleticoMadrid.png";
import clubsLogo from "../../media/images/club-symbols.png";
import basel from '../../media/images/basel.png';
import bocaJuniors from '../../media/images/bocaJuniors.png';
import bolton from '../../media/images/bolton.png';
import dortmund from '../../media/images/dortmund.png';
import celta from '../../media/images/celta.png';
import elfsborg from '../../media/images/elfsborg.png';
import fenerbahce from '../../media/images/fenerbahce.png';

const clubsLogos=[
    {
        id:0,
        name: "1860_munich",
        logoUrl:munique,
        completed: false,
    },
    {
        id: 1,
        name: "atletico_madrid",
        logoUrl: atleticoMadrid,
        completed: false
    },
    {
        id: 2,
        name: "basel",
        logoUrl: basel,
        completed: false
    },
    {
        id: 3,
        name: "boca_juniors",
        logoUrl: bocaJuniors,
        completed: false
    },
    {
        id: 4,
        name: "bolton",
        logoUrl: bolton,
        completed: false
    },
    {
        id: 5,
        name: "dortmund",
        logoUrl: dortmund,
        completed: false
    },
    {
        id: 6,
        name: "celta",
        logoUrl: celta,
        completed: false
    },
    {
        id: 7,
        name: "elfsborg",
        logoUrl: elfsborg,
        completed: false
    },
    {
        id: 8,
        name: 'fenerbahce',
        logoUrl: fenerbahce,
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