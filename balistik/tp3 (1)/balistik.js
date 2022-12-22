alert('Balistik0095');

function isLower(letter) {
    return letter.toLowerCase() === letter;
}
// isLower("L") // ap retounen false
// isLower("a") // ap retounen true
function isUpper(letter) {
    return letter.toUpperCase() === letter;
}
// isUpper("L") // ap retounen true
// isUpper("a") // ap retounen false

function ValueError(
    message = "Ou sipoze antre yon mo ki gn karakte nan alphabe angle a sans espace san karakte spesyal."
) {
    const error = new Error(message);
    error.name = "ERE_REFERANS"; // yon non kèlkonk
    error.code = 11; // Yon senp kòd kèlkonk ki referanse erè sa
    return error;
}

function SaltError(
    message = "Verifye salt la li pa korepon ak saw te kripte."
) {
    const error = new Error(message);
    error.name = "ERE_REFERANS"; // yon non kèlkonk
    error.code = 12; // Yon senp kòd kèlkonk ki referanse erè sa
    return error;
}

function LengthError(
    message = "Longe chenn wap dekripte a pa korespon ak saw te kripte a."
) {
    const error = new Error(message);
    error.name = "ERE_REFERANS"; // yon non kèlkonk
    error.code = 12; // Yon senp kòd kèlkonk ki referanse erè sa
    return error;
}
//
// ###################### end #################
const balistik = {
    _alph: "abcdefghijklmnopqrstuvwxyz",
    _alph1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", //oubyen yon tablo,
    _assci:'U+002D',
    _space:'U+0020',
    _salt: "Ux00",
    encrypt: function (str) {
        var lng_str = str.length;
        let r = "";
        for (i of str) {
            if (balistik._alph1.includes(i)) {
                r += "0" + balistik._alph1.indexOf(i) + ".";
            } else if (balistik._alph.includes(i)) {
                r += balistik._alph.indexOf(i) + ".";
            } else {
                throw new ValueError();
            }
        }

        return (r = this._salt + "." + r + lng_str); //this._salt =this._salt + r.slice(0,r.length - 1)
    },
    decrypt: function (str) {
        str = str.split(".");
        // console.log(str);
        let _saltcs = str[0];
        let r = '';
        let word = str.splice(1, str.length - 2);
        let lng_str = str.at(-1);
        // verification!
        // console.log(this._salt);
        alert(word);
        // console.log(lng_str)
       

        if (_saltcs !== this._salt) {
            throw new SaltError();
        } else if (word.length != lng_str) {
            throw new LengthError();
        } else {
            for (let i = 0; i<word.length; i++){
              // alert(word[i][1])
              if(word[i][0] ==='0'&& word[i].length >1){
                r += this._alph1[word[i].slice(1)]
              }else{
                r += this._alph[word[i]]
              }
            }
            
        }
        // alert(r)
        return r;
    },
};

//########################### Pati test ###########################
// alert(balistik.encrypt('balistik'));

//   Ux00.1.0.11.8.18.19.8.10
alert(balistik.encrypt("LubLoRy"));
alert(balistik.decrypt("Ux00.011.20.1.011.14.017.24.7"));
