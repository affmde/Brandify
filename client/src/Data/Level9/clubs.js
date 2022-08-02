import montreal from "../../media/images/montrealImpact.png";
import columbus from "../../media/images/columbus.png";
import clubsLogo from "../../media/images/club-symbols.png";
import dcUnited from '../../media/images/dcUnited.png';
import orlandoCity from '../../media/images/orlandoCity.png';
import portland from '../../media/images/portland.png';
import dallas from '../../media/images/dallas.png';
import laGalaxy from '../../media/images/laGalaxy.png';

const clubsLogos=[
    {
        id:0,
        name: "granada",
        logoUrl:"https://brandlogos.net/wp-content/uploads/2011/06/granada-logo-vector.png",
        completed: false,
    },
    {
        id: 1,
        name: "montreal_impact",
        logoUrl: montreal,
        completed: false
    },
    {
        id: 2,
        name: "columbus",
        logoUrl: columbus,
        completed: false
    },
    {
        id: 3,
        name: "new_england_revolution",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2016/01/new-england-revolution-logo-300x300.png",
        completed: false
    },
    {
        id: 4,
        name: "dc_united",
        logoUrl: dcUnited,
        completed: false
    },
    {
        id: 5,
        name: "orlando_city",
        logoUrl: orlandoCity,
        completed: false
    },
    {
        id: 6,
        name: "portland",
        logoUrl: portland,
        completed: false
    },
    {
        id: 7,
        name: "dallas",
        logoUrl: dallas,
        completed: false
    },
    {
        id: 8,
        name: 'la_galaxy',
        logoUrl: laGalaxy,
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