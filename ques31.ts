let userName = ["Zeeshan", "Zubair", "Uzair", "Admin", "Alina"]

userName = []

if(userName.length === 0){
    console.log("your array is empty We need to find some users")
}else{
    userName.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Helllo ${oneUser},would you like to see a status report?`)
        }
        else{
            console.log(`Helllo ${oneUser},thank you for logging in again.`)
        }
    })
}