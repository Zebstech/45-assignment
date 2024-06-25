function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_name = ["haris", "Arsalan", "Saqib"];
let Great_magicians = make_great(magicians_name);
show_magicians(Great_magicians);
export {};
