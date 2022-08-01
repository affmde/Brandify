import animalsLogo from '../../media/images/animals.png';
import ardvark from '../../media/images/ardvark.png';
import baboon from '../../media/images/baboon.png';
import camel from '../../media/images/camel.png';
import eagle from '../../media/images/eagle.png';
import boaConstrictor from '../../media/images/boaConstrictor.png';
import cheetah from '../../media/images/cheetah.png';
import chimpanzee from '../../media/images/chimpanzee.png';
import dugong from '../../media/images/dugong.png';
import hammerheadShark from '../../media/images/hammerheadShark.png';

const animalsLogos= [
    {
        id:0,
        name: "aardvark",
        logoUrl:ardvark,
        completed: false
    },
    {
        id:1,
        name: "baboon",
        logoUrl:baboon,
        completed: false
    },
    {
        id:2,
        name: "camel",
        logoUrl:camel,
        completed: false
    },
    {
        id: 3,
        name: "eagle",
        logoUrl: eagle,
        completed: false
    },
    {
        id: 4,
        name: "boa_constrictor",
        logoUrl: boaConstrictor,
        completed: false
    },
    {
        id: 5,
        name: "cheetah",
        logoUrl: cheetah,
        completed: false
    },
    {
        id: 6,
        name: "chimpanzee",
        logoUrl: chimpanzee,
        completed: false
    },
    {
        id:7,
        name: "gugong",
        logoUrl: dugong,
        completed: false
    },{
        id: 8,
        name: "hammerhead_shark",
        logoUrl: hammerheadShark,
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