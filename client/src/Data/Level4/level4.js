import { brands } from "./brands";
import { clubs } from "./clubs";
import { countries } from "./countries";

export const level4 =[
    {
        name: 'level 4',
        open: false,
        completed: false,
        arrays: [brands, clubs, countries],
        totalLogos: brands.array.length + clubs.array.length + countries.array.length,
        totalLogosCompleted: brands.completedLogos.length + clubs.completedLogos.length + countries.completedLogos.length,
        percentCompleted: (brands.completedLogos.length + clubs.completedLogos.length + countries.completedLogos.length) / (brands.array.length + clubs.array.length + countries.array.length) * 100
    }
]