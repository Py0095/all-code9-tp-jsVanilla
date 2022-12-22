alert('Bienvini nan jwet la woulet la peze "OK" pouw kontinye.');
alert('Jwet sa tre fasil et difisil tou wap jis bay yon iterval [min,max] kote odinate ap chwazi yon nomb aletwa nan iterval ou bay la pou w k devine ki nomb.')


console.log('Antre interval nomb aleyatwa ki nan volontew la');
let min = prompt('Antre interval minimum nan: ');
let max = prompt('Antre interval maximum nan: ');
console.log(`Interval ou bay la se [${min},${max}] donk fe chwaw yo byn`)

let chans = 5;
let nonOdinate = Math.floor(Math.random() * (max - min + 1) + 1); // entèval [1 - 500]

while (chans>0){  
    let nonbChwazi = prompt("Ki nonb ou chwazi itilizatè? ");
    nonOdinate = parseInt(nonOdinate);
    nonbChwazi = parseInt(nonbChwazi);
    console.log(nonOdinate,nonbChwazi);
    if (nonOdinate < nonbChwazi){
        chans -=1
        console.log(`Ou pedi nomb ou chwazi a pi gro pase pa odinate a total chans ou se ${chans}`);
        // alert(`Ou pedi nomb ou chwazi a pi gro pase pa odinate a total chans ou se ${chans}`);
        alert(nonOdinate)

    }
    else if (nonOdinate === nonbChwazi){

        // chans -=1
        console.log('Felisitasyon ou genyen nomb ou chwazi a egal ak pa odinate a');
        // alert('Felisitasyon ou genyen nomb ou chwazi a egal ak pa odinate a');
        break
    }
    else{
        chans -=1
        console.log(`Ou pedi nomb ou chwazi a pi piti pase pa odinate a total chans ou se ${chans}`);
        // alert(`Ou pedi nomb ou chwazi a pi piti pase pa odinate a total chans ou se ${chans}`);
        alert(nonOdinate)
    } 
    if (chans === 0) {
        alert(`OUPSSSSS ou pedi chans ou fini!!!!!!`);
        
    }
}  

