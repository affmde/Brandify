import peopleLogo from '../../media/images/peopleLogo.png';
import ozzy from '../../media/images/ozzy.png';
import johhnyDep from '../../media/images/johhnyDep.png'
import taylorSwift from '../../media/images/taylorSwift.png';
import emmaWatson from '../../media/images/emmaWatson.png';
import robertPattinson from '../../media/images/robertPattinson.png';
import obama from '../../media/images/obama.png';
import merkle from '../../media/images/angelaMerkle.png';
import trump from '../../media/images/trump.png';
import biden from '../../media/images/biden.png';

const peopleLogos= [
    {
        id:0,
        name: "Ozzy_Osbourne",
        logoUrl:ozzy,
        completed: false
    },
    {
        id:1,
        name: "Johnny_Depp",
        logoUrl:johhnyDep,
        completed: false
    },
    {
        id:2,
        name: "Taylor_Swift",
        logoUrl:taylorSwift,
        completed: false
    },
    {
        id: 3,
        name: "Emma_Watson",
        logoUrl: emmaWatson,
        completed: false
    },
    {
        id: 4,
        name: "Robert_Pattinson",
        logoUrl: robertPattinson,
        completed: false
    },
    {
        id: 5,
        name: "Obama",
        logoUrl: obama,
        completed: false
    },
    {
        id: 6,
        name: "Angela_Merkel",
        logoUrl: merkle,
        completed: false
    },
    {
        id:7,
        name: "Donald_Trump",
        logoUrl: trump,
        completed: false
    },{
        id: 8,
        name: "Joe_Biden",
        logoUrl: biden,
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