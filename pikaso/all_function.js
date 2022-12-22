// // #######Fonksyon pou nombre karakte
// export function nombKarakte(kouleUser) {
//     while (kouleUser.length != '6'){
//         kouleUser = prompt(`${kouleUser.length }!!! Pa koresponn reyese koule ou antre a sipoze gnyn 6 karakte.`)
//     }
//     return kouleUser
// }


// //########Fonksyon pou verifier ske se egzadesimal li ye
// export function isEgza(koule) {
//     const chen = '0123456789ABCDEF'
//     let rezilta = false
//     koule = nombKarakte(koule.toUpperCase())

//     for (i = 0; i< koule.length; i++) {
//         if(chen.includes(koule[i])){
//             rezilta = true
//         }
//         else{
//             rezilta = false
//         }
//     }

//     return rezilta
// }

// //############fonksyon pouw fe mariaj koule yo
// export function mariajKoule(k1,k2) {
//     let final_result ='';
//     let result1 = '';
//     for (let i=0; i<k1.length; i++){    
//         let chwaAleyatwa = Math.floor(Math.random() * 2);
    
//         result1 = k1[i]+k2[i]//[chwaAleyatwa = Math.floor(Math.random() * 2)];
//         // alert(result1)
//         final_result +=result1[chwaAleyatwa];
//         // alert(final_result)
//         // alert(final_result)
//         // final_result +=result1;
//     }
//     return final_result;
// }
