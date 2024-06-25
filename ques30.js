let userName = ["Zeeshan", "Zubair", "Uzair", "Admin", "Alina"];
// using foreach loop in array
userName.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Helllo ${oneUser},would you like to see a status report?`);
    }
    else {
        console.log(`Helllo ${oneUser},thank you for logging in again.`);
    }
});
export {};
