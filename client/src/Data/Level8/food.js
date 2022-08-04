import foodLogo from '../../media/images/foodMainLogo.png';

const foodsLogos= [
    {
        id:0,
        name: "salad",
        logoUrl:"https://eadn-wc01-4177395.nxedge.io/wp-content/uploads/2020/05/106SP06ARCHED26.jpg",
        completed: false
    },
    {
        id:1,
        name: "tea",
        logoUrl:"https://eadn-wc01-4177395.nxedge.io/wp-content/uploads/2020/02/1491108BM0740_FFcrop.jpg",
        completed: false
    },
    {
        id:2,
        name: "bread",
        logoUrl:"https://eadn-wc01-4177395.nxedge.io/wp-content/uploads/2020/02/1490810JSO7261_FFcrop.jpg",
        completed: false
    },
    {
        id: 3,
        name: "chips",
        logoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170203151518-crisps.jpg",
        completed: false
    },
    {
        id: 4,
        name: "som_tam",
        logoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170302150230-som-tam.jpg",
        completed: false
    },
    {
        id: 5,
        name: "chicken_rice",
        logoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170302150650-chicken-rice-singapore.jpg",
        completed: false
    },
    {
        id: 6,
        name: "poutine",
        logoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160516104039-ottawa-poutinefest-special-gourmet-poutine.jpg",
        completed: false
    },
    {
        id:7,
        name: "tofu",
        logoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170302143134-tofu.jpg",
        completed: false
    },
    {
        id: 8,
        name: "chicken_parm",
        logoUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170920150817-chicken-parm.jpg",
        completed: false
    }
]

export const foods= {
    id: 0,
    array: foodsLogos,
    logo: foodLogo,
    title: "Foods",
    completedLogos: [],
    completed: false,
    redeem: false
}