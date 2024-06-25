let guest_list = ['aliza', 'shahid', 'saima', 'uzair',];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear' + guest_list[i] + ',\n\t we invited you to tommorrow dinner \n thank you.')
// }
let not_present = 'uzair';
let new_guest = 'kamran tessori';
guest_list[3] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear' + guest_list[i] + ',\n\t we invited you to tommorrow dinner \n\n thank you.\n')
// }
guest_list.unshift('shaheen', 'zeeshan', 'rizwan');
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear' + guest_list[i] + ',\n\t we invited you to tommorrow dinner. we found a big table so we decide to invite 3 more guest thank you.\n')
// }
console.log('\n unfortunatly we can not arrange big table, only 2 people allow.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/M .${remove_guest} you are not invited for dinner.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear' + guest_list[i] + ',\n\t yes you are still invited to tomorrow dinner thank you.\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
export {};
