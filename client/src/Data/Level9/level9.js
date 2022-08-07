import { brands } from "./brands";
import { clubs } from "./clubs";
import { countries } from "./countries";
import {foods} from './food';
import {animals} from './animals';
import {capitals} from './capitals';
import { people } from "./people";

export const level9 =[
    {
        name: 'level 9',
        open: false,
        completed: false,
        redeem: false,
        arrays: [brands, clubs, countries, foods, animals, capitals, people],
        totalLogos: brands.array.length + clubs.array.length + countries.array.length + foods.array.length + animals.array.length + capitals.array.length + people.array.length,
        totalLogosCompleted: brands.completedLogos.length + clubs.completedLogos.length + countries.completedLogos.length + foods.completedLogos.length+ animals.completedLogos.length + capitals.completedLogos.length + people.completedLogos.length,
        percentCompleted: (brands.completedLogos.length + clubs.completedLogos.length + countries.completedLogos.length + foods.completedLogos.length + animals.completedLogos.length + capitals.completedLogos.length + people.completedLogos.length) / (brands.array.length + clubs.array.length + countries.array.length + foods.array.length + animals.array.length + capitals.array.length + people.array.length) * 100
    }
]