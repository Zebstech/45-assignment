function create_car(manufacturer, model, grande, ...options) {
    const car = {
        manufacturer,
        corolla: 2024,
        package: grande,
        ...Object.assign({}, ...options)
    };
    return car;
}
let my_car = create_car("toyota", "corolla", "grande", { color: 'white' }, { featurer: ['Sunroof', 'power window', 'power steering', 'tinted glass', 'navigation', 'multisteering', 'leather cover',] });
console.log(my_car);
export {};
