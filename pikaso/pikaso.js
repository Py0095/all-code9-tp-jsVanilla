//#######fonksyon 
function nombKarakte(kouleUser) {
    while (kouleUser.length != '6'){
        kouleUser = prompt(`${kouleUser.length }!!! Pa koresponn reyese koule ou antre a sipoze gnyn 6 karakte.`)
    }
    return kouleUser
}

//########Fonksyon pou verifier ske se egzadesimal li ye
function isEgza(koule) {
    const chen = '0123456789ABCDEF'
    let rezilta = false
    koule = nombKarakte(koule.toUpperCase())

    for (i = 0; i< koule.length; i++) {
        while (!chen.includes(koule[i].toUpperCase())) {
            koule = prompt('Koulew antre a pa bon antre yon koule ki fe pati egzadesimal.')
            koule = nombKarakte(koule.toUpperCase())
        }
    }

    return koule
}

// ############fonksyon pouw fe mariaj koule yo
function mariajKoule(k1,k2) {
    let final_result ='';
    let result1 = '';
    for (let i=0; i<k1.length; i++){    
        let chwaAleyatwa = Math.floor(Math.random() * 2);
    
        result1 = (k1[i]+k2[i])[chwaAleyatwa];
        // alert(result1)
        final_result +=result1//[chwaAleyatwa];
    }
    return final_result;
}

let koule1 = prompt('Antre 1er koulew la ki fe pati egza desimal');
koule1 = isEgza(koule1.toUpperCase());
alert(koule1);

let koule2 = prompt('Antre 2eme koulew la ki fe pati egza desimal');
koule2 = isEgza(koule2.toUpperCase());
alert(koule2);

alert(`Maryaj premye koule: ${koule1} ak dezyem: ${koule2} bay yon koule final la: ${mariajKoule(koule1,koule2).toUpperCase()}.`);
// alert(final_result.length);














