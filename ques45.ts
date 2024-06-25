
function create_car(manufacturer: string, model: string, grande: string, ...options:{[key : string]: any}[]): object{
    const car = {
        manufacturer,
        corolla: 2024,
        package: grande,
        ...Object.assign({}, ...options)
    };
    return car;
}
let my_car = create_car("toyota", "corolla","grande", {color:'white'},{featurer:['Sunroof','power window','power steering','tinted glass','navigation','multisteering','leather cover',]}) 

console.log(my_car)