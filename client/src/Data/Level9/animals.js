import animalsLogo from '../../media/images/animals.png';
import labrador from '../../media/images/labradorRetrivier.png';
import beagle from '../../media/images/beagle.png';
import rotweiller from '../../media/images/rotweiller.png';
import poodle from '../../media/images/poodle.png';
import husky from '../../media/images/husky.png';
import cooker from '../../media/images/cookerSpaniard.png';
import dalmata from '../../media/images/dalmata.png';
import dobermann from '../../media/images/dobermann.png';
import yorkshire from '../../media/images/yorkshire.png';

const animalsLogos= [
    {
        id:0,
        name: "labrador_retriever",
        logoUrl:labrador,
        completed: false
    },
    {
        id:1,
        name: "beagle",
        logoUrl:beagle,
        completed: false
    },
    {
        id:2,
        name: "Rottweiler",
        logoUrl:rotweiller,
        completed: false
    },
    {
        id: 3,
        name: "poodle",
        logoUrl: poodle,
        completed: false
    },
    {
        id: 4,
        name: "husky",
        logoUrl: husky,
        completed: false
    },
    {
        id: 5,
        name: "Cocker_spaniel ",
        logoUrl: cooker,
        completed: false
    },
    {
        id: 6,
        name: "dalmata",
        logoUrl: dalmata,
        completed: false
    },
    {
        id:7,
        name: "dobermann",
        logoUrl: dobermann,
        completed: false
    },{
        id: 8,
        name: "Yorkshire_terrier",
        logoUrl: yorkshire,
        completed: false
    }
]

export const animals= {
    id: 0,
    array: animalsLogos,
    logo: animalsLogo,
    title: "Animals",
    completedLogos: [],
    completed: false
}