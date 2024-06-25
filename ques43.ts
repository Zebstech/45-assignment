function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}
let magicians_names = ["Haris" , "Arsalan" , "Saqib"]

// making a copy original arry through .slice() function 

let copy_magicians_names = magicians_names.slice();

let copy_great_magicians = make_great(copy_magicians_names);

// original array
console.log("\n Original Array\n")
show_magicians(magicians_names);

// coppied Array
console.log("\n Coppied Array\n")
show_magicians(copy_great_magicians);