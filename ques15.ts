 let guest_list: string[] =['aliza', 'shahid','saima', 'uzair', ];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear' + guest_list[i] + ',\nwe invited you to tommorrow dinner \n thank you\n')
// }

let not_present : string ='uzair';
let new_guest : string ='kamran tessori';
guest_list[3] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear' + guest_list[i] + ',\nwe invited you to tommorrow dinner \n\n thank you')
}
guest_list.unshift('zubair', 'umair', 'asif', 'zahid',);
for(let i=0; i<guest_list.length; i++){
    console.log('Dear' + guest_list[i] + ',\nwe invited you to tommorrow dinner \n\n thank you')
}