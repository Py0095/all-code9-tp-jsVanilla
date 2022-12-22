//   ##################All function################
function tableShow(boulYo,tablo) {
    let nv_tab1 =[];
    for (let x = 0; x < 5; x++) {
        let row = []; // ranje a vid
        for (let y = 0; y < 5; y++) {
            if (boulYo.includes(tablo[x][y])) {
                row.push('['+tablo[x][y]+']')  
            }else{
                row.push(tablo[x][y]);
            }
            nv_tab1.push(row);
        }
        tablo.push(row); // ajoute ranje a, nan tablo a
        console.log(row.join(' \t')); // afiche ranje a, nan konsòl la
    }
}
// function bingo
function bingo(boulYo,tablo) {
    let result;
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
                if(boulYo[0] === tablo[1][1]||boulYo[1] === tablo[1][1]||boulYo[2] === tablo[1][1]||boulYo[3] === tablo[1][1]||boulYo[4] === tablo[1][1]){
                // if(boulYo.includes(boulYo) === tablo[1][1]){
                    if(boulYo.includes(tablo[0][1])&&boulYo.includes(tablo[1][0])&&boulYo.includes(tablo[1][2])&&boulYo.includes(tablo[2][1]))
                        result = console.log('Bingo');
                    result = console.log('Ou pedi rejwe anko cnd1');
                    // console.log(tablo[1][1]);

                }else if(boulYo[0] === tablo[1][3]||boulYo[1] === tablo[1][3]||boulYo[2] === tablo[1][3]||boulYo[3] === tablo[1][3]||boulYo[4] === tablo[1][3]){
                    // if(boulYo.includes(boulYo) === tablo[1][3]){
                    if(boulYo.includes(tablo[0][3])&&boulYo.includes(tablo[1][2])&&boulYo.includes(tablo[1][4])&&boulYo.includes(tablo[2][3]))
                        result = console.log('Bingo');
                    result = console.log('Ou pedi rejwe anko cnd2');

                    // console.log(tablo[1][3]);

                }else if(boulYo[0] === tablo[3][1]||boulYo[1] === tablo[3][1]||boulYo[2] === tablo[3][1]||boulYo[3] === tablo[3][1]||boulYo[4] === tablo[3][1]){
                // else if(boulYo.includes(tablo[x][y]) === tablo[3][1]){
                    if(boulYo.includes(tablo[2][1])&&boulYo.includes(tablo[3][0])&&boulYo.includes(tablo[3][2])&&boulYo.includes(tablo[4][1]))
                        result = console.log('Bingo');
                    result = console.log('Ou pedi rejwe anko cnd3');
                    // console.log(tablo[3][1]);

                }else if(boulYo[0] === tablo[3][3]||boulYo[1] === tablo[3][3]||boulYo[2] === tablo[3][3]||boulYo[3] === tablo[3][3]||boulYo[4] === tablo[3][3]){
                // else if(boulYo.includes(tablo[x][y]) === tablo[3][3]){console.log(tablo[x][y]);
                if(boulYo.includes(tablo[2][3])&&boulYo.includes(tablo[3][2])&&boulYo.includes(tablo[3][4])&&boulYo.includes(tablo[4][3]))
                    result = console.log('Bingo');
                result = console.log('Ou pedi rejwe anko cnd4');
                    // console.log(tablo[3][3])
                }else{
                    result = console.log('Ahhh ou pedi cnd5');
                }
        }
    }

//    return result 
}

function tiraj(nv_tab) {
    let boulYo = [];
    let rand = [];
    for (let i = 0; i < 5; i++) {
        rand = parseInt(Math.random() * nv_tab.length);
        boulYo.push(nv_tab[rand]);
}
    return boulYo
}



console.log('-------------= Menu=-----------\n[1]- Kite jwet la  \n[2]- Komanse jwet la \n--------------------------');
let digi = '12'
let option1;
let option = parseInt(prompt('Antre option ou vle :'));
while (!digi.includes(option) ) {
    option = parseInt(prompt(`Svp antre option valid la`));
}

switch (option) {
    case 1:
        alert('Good Bye!!!');
        break;

    case 2:
        console.log('Byenvini nan jwet la');
        console.clear()
        // komansman
        // function afficher tablo ak kroche

        console.log(`\tHello!!! Men kat ou a.`);
        // function tableView() {
        let tablo = [];
        let nv_tab = [];
        for (let x = 0; x < 5; x++) {
            let row = []; // ranje a vid
            for (let y = 0; y < 5; y++) {
                let nonbAleyatwa = parseInt(Math.floor(Math.random() * (99 - 0) + 0));

                if (x === 2 && y === 2) row.push("@k");
                // ajoute selil yo nan <row>
                else{
                    row.push(nonbAleyatwa);
                }
                
                nv_tab.push(nonbAleyatwa);
            }
            tablo.push(row); // ajoute ranje a, nan tablo a
            console.log(row.join("\t")); // afiche ranje a, nan konsòl la
        }
        // return nv_tab,tablo
    // }
        let nonbAleyatwa,
            // mX = 5,
            // mY = 5,
            chans = 2;
        console.log("-------------------------------------");

        let condition;

        setTimeout(() => {
            do {
                // setTimeout(() => {
                for(let i=0; i<2; i++) {
                    
                    let boulYo = tiraj(nv_tab);
                    console.log(`======== 1er lanse${[i + 1]} ========`);
                    console.log("------------------------------");
                    console.log(`Nonb ki soti yo se:${boulYo}`);
                    tableShow(boulYo,tablo);
                    console.log("------------------------------");
                    bingo(boulYo,tablo)

                
                        chans-=1;
                }
                //  },4000);
                // if (chans ===0) {
                //     console.log('-------------= Menu=-----------\n[1]- Kite jwet la  \n[2]- Komanse jwet la \n--------------------------');
                //     option = parseInt(prompt('Antre option ou vle :'));
                //     while (!digi.includes(option) ) {
                //         option = parseInt(prompt(`Svp antre option valid la`));
                //     }
                    
                // }
                    
        console.log('------------------------------\n[k]- Pouw rejwe\n[]-Nenpot lot touch pouw kite\n------------------------------');
        condition = prompt('Antre opsyon ou vle a')
        console.clear();
            } while (condition==='k'|| condition === 'k');
        }, 2000);


        // end
        break;

    default:
        alert('Antre [1] oubnyn [2]')
    // while (option != 1 || option != 2) {
    //     option = parseInt(prompt(`Svp antre option valid la`));
    // }
    break
}

