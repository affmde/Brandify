import { brands } from "./brands";
import { clubs } from "./clubs";
import { countries } from "./countries";
import {foods} from './food';

export const level6 =[
    {
        name: 'level 6',
        open: false,
        completed: false,
        arrays: [brands, clubs, countries, foods],
        totalLogos: brands.array.length + clubs.array.length + countries.array.length + foods.array.length,
        totalLogosCompleted: brands.completedLogos.length + clubs.completedLogos.length + countries.completedLogos.length + foods.completedLogos.length,
        percentCompleted: (brands.completedLogos.length + clubs.completedLogos.length + countries.completedLogos.length + foods.completedLogos.length) / (brands.array.length + clubs.array.length + countries.array.length + foods.array.length) * 100
    }
]