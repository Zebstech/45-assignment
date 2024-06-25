//  Array of Current user

let current_users = ["Usman", "Ali", "areeba", "Zain", "Osama"]

let new_users = ["Hamza" , "Zeeshan", "Areeba", "Zubair", "Osama"]

//  Array of new user
new_users.forEach(new_one_user => {
    // making a confition for username alreadt exist
    let our_condition = current_users.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase())
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken`)
    }else{
        console.log(`this username ${new_one_user} is available`)
    }
})