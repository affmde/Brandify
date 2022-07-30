import { brands } from "./brands";
import { clubs } from "./clubs";
import { countries } from "./countries";
import {foods} from './food';
import {animals} from './animals';

export const level1 =[
    {
        name: "level 1",
        open: true,
        completed: false,
        arrays: [brands, clubs, countries, foods, animals],
        totalLogos: brands.array.length + clubs.array.length + countries.array.length+foods.array.length+animals.array.length,
        totalLogosCompleted: brands.completedLogos.length + clubs.completedLogos.length + countries.completedLogos.length + foods.completedLogos.length+animals.completedLogos.length,
        percentCompleted: (brands.completedLogos.length + clubs.completedLogos.length +countries.completedLogos.length + foods.completedLogos.length+animals.completedLogos.length) / (brands.array.length + clubs.array.length + countries.array.length + foods.array.length + animals.array.length) * 100
    }
]



