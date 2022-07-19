import { brands } from "./brands";
import { clubs } from "./clubs";
import { countries } from "./countries";

export const level1 =[
    {
        name: "level 1",
        open: true,
        completed: false,
        arrays: [brands, clubs, countries],
        totalLogos: brands.array.length + clubs.array.length + countries.array.length,
        totalLogosCompleted: brands.completedLogos.length + clubs.completedLogos.length + countries.completedLogos.length,
        percentCompleted: (brands.completedLogos.length + clubs.completedLogos.length +countries.completedLogos.length) / (brands.array.length + clubs.array.length + countries.array.length) * 100
    }
]



