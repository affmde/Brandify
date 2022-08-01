import empoli from "../../media/images/empoli.png";
import leicester from "../../media/images/leicester.png";
import clubsLogo from "../../media/images/club-symbols.png";
import birmingham from '../../media/images/birmingham.png';
import barnsley from '../../media/images/barnsley.png';
import chievo from '../../media/images/chievo.png';

const clubsLogos=[
    {
        id:0,
        name: "empoli",
        logoUrl:empoli,
        completed: false,
    },
    {
        id: 1,
        name: "leicester",
        logoUrl: leicester,
        completed: false
    },
    {
        id: 2,
        name: "bologna",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2012/11/bologna-logo-vector.png",
        completed: false
    },
    {
        id: 3,
        name: "dallas_cowboys",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2011/05/dallas-cowboys-logo-vector.png",
        completed: false
    },
    {
        id: 4,
        name: "chicago_bears",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2011/05/chicago-bears-logo-vector.png",
        completed: false
    },
    {
        id: 5,
        name: "detroit_lions",
        logoUrl: "https://brandlogos.net/wp-content/uploads/2012/09/detroit-lions-logo-vector-01.png",
        completed: false
    },
    {
        id: 6,
        name: "birmingham",
        logoUrl: birmingham,
        completed: false
    },
    {
        id: 7,
        name: "barnsley",
        logoUrl: barnsley,
        completed: false
    },
    {
        id: 8,
        name: 'chievo',
        logoUrl: chievo,
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