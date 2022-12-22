class MissingParameterError extends Error{
    constructor(message='Yon message par defo'){
        super(message);
        this.nane = 'MissingParameterError';
    }   
}

class InfinityResulError extends Error{
    constructor(message='Yon mesaj par defo'){
        super(message);
        this.nane='InfinityResulError'
    }
    
}

class ZeroDivisionError extends Error{
    constructor(message='Yon mesaj par defo'){
        super(message);
        this.name='ZeroDivisionError'
    }
}

class NegativeNumberError extends Error{
    constructor(message='Yon message par defo'){
        super(message);
        this.name ='NegativeNumberError'
    }
}

class ValueError extends Error{
    constructor(message='Yon mesaj par defo'){
        super(message);
        this.name='ValueError'
    }
}

class TypeError extends Error{
    constructor(message='Yon message par defo'){
        super(message);
        this.name='TypeError'
    }
}

class Basic{
    constructor(){}
    add(...add){
        if(add.length<2)
            throw new MissingParameterError();
        let result=0;
        for (let i of add) {
            if (!Number(i)) 
                throw new ValueError();
            else
                result +=i;
        }   
        return result = result;
    }

    substract(...sub){
        if(sub.length<2)
            throw new MissingParameterError();
        let result= sub[0];
        for (let i= 1; i< sub.length; i++) {
            if (!Number.isInteger(i)) 
                throw new ValueError();
            else
                result = result - sub[i];
        }   
        return result;
    }

    multiply(...mult){

        if (mult.length < 0 || mult.length <2) {
            throw new MissingParameterError();
            }
        let result =1;
            for(let i of mult){
                if(!Number.isInteger(i))
                    throw new ValueError();
                else
                    result *= i;
            }
        return result;
    }
    
    divide(...div) {
        if (!Number.isInteger(div[0]) || !Number.isInteger(div[1])) 
          throw new ValueError() 
        else if (div[0] == 0 && div[1] == 0)
          throw new InfinityError()

        else if (div.length !==2)
         throw new MissingParameterError('Ou supoze mete 2 parametre');

        else if (div[1] == 0) 
          throw new ZeroDivisionError('Ou pak divize yon nomb par 0')
        
        else
            return div[0] / div[1]
      }
}

class Calculator extends Basic{
    // constructor(){}
    fact(...fact){
        let result=1;
        for (let i of fact) {
            if (!Number.isInteger(i)) {
                throw new ValueError();  
            }  
        }
        if (fact.length!==1)
            throw new Error('Ou pa supoze mete plis ke yon se parametre nan metod sa ');
        
        // if(!Number.isInteger(fact))
        //     throw new ValueError('Antre yon antye svp');
        if (fact<0)
            throw NegativeNumberError('valew anre a se yon vale negtive');
        
        else if(fact==0)
            return result =1
        else{
        
            for(let i=2; i<=fact; i++){
                result *=i;
            }
        } 
        return result;  
    }    

    avg(...avg){
        if(avg.length>2)
            throw new MissingParameterError();
        
            let somme = this.add(...avg);
            let moy = this.divide(somme,avg.length);
        return moy;
    }

    arr(...arr){
        let result
        if (arr.length < 0)
            throw new MissingParameterError()
        else if(arr.length!==2)
            throw new TypeError()
        else if(!Number.isInteger(arr[0]) && !Number.isInteger(arr[1]))
            throw new ValueError();
        else if(arr[0] < 0)
            throw new ValueError();
        else 
            if ( arr[0]>arr[1]) 
                throw new Error("Premye parametre la supoze pi piti pase deuxieme nan ")
            else if(arr[0] === 0 && arr[1]>0 ||arr[0] === 0 && arr[1] === 0 )
                throw new ValueError()
            else{
                result = this.fact(arr[1])/this.fact(arr[1]-arr[0])
                // result = this.fact(arr[0])/this.fact(arr[0]-arr[1])

            }
        return result
    }
    
    exp(...exp){
        let result=1;
        for (let i of exp) {
            if (!Number.isInteger(i)) {
                throw new ValueError();  
            }  
        }
        if (exp.length < 0)
            throw new MissingParameterError()
        else if(exp.length!==2)
            throw new TypeError()
        else{
            
            // if ( exp[0]<exp[1]) 
            //     throw new Error()
            // if(expo){
                // if (exp[1]<0) {
                    // exp[1]*=1;
                    // for(let i=0;i<=exp[1];i++){
                    //     result*=exp[0];
                    result = exp[0]**exp[1]

                // }
                // result = 1/result;
                // }else if(exp[0] === 0 && exp[1] === 0)
                    // result = 1;
                // else if(exp[0] >0 && exp[1] <0)
                    // result = exp[0]**exp[1]
                    // for(let i=1;i<=exp[1];i++){
                    //     // result*=exp[0]
                    //     // result = exp[0]**exp[1]
                    // }

                // else{
                    // for(let i=1;i<=exp[1];i++){
                    //     result*=exp[0]
                    // }
                    // result = exp[0]**exp[1]

            // }
            return result;
        //  }
    }

}

    comb(...comb){
        let result;
        // if(!Number(comb[0]) || !Number(comb[1])){
        //     throw new ValueError()
        //    }

        if (comb.length < 0)
            throw new MissingParameterError();
        else if(comb.length !==2)
            throw new MissingParameterError();
        else if (comb[0]<0 && comb[1] < 0)
            throw new NegativeNumberError()
        else if(comb[0]>comb[1])
            throw new Error('Premye parametre la supoze pi piti pase deuxieme nan');
        else if(comb[0]===0 && comb[1]>0)
           result = 1;
        else{
            let n2 = this.fact(comb[1]);
            let k2 = this.fact(comb[0]);
            let nk = this.fact(comb[1] - comb[0]);
            result=this.divide(n2,nk*k2)
            /* let result = n2 / (nk * k2) */
            
        }
        return result  
    }

}

// a = new Basic();
// // console.log(a.add(10,3,5));
// // alert('Aliano');
// console.log(a.multiply(15,3));
// // console.log(a.substract(20,4,25));
// // console.log(a.divide(2,-9));
// ############################################################




//  Test
let calc = new Calculator()

// Bon kalkil
console.log(`Adisyon 2+3=5 ${(calc.add(2,3) === 5 || calc.add(2,3) === 5.0) ? "✅": "❌"}`, calc.add(2,3) )
console.log(`Adisyon 2.3 + 6.1=8.4 ${calc.add(2.3, 6.1) === 8.4 ? "✅": "❌"}`, calc.add(2.3, 6.1) )
console.log(`Soustraksyon 10-3=7 ${calc.substract(10,3) === 7 ? "✅": "❌"}`, calc.substract(10,3) )
console.log(`Miltiplikasyon 15*3=45 ${calc.multiply(15,3) === 45 ? "✅": "❌"}`, calc.multiply(15,3) )
console.log(`Miltiplikasyon 15 * (-1)=-15 ${calc.multiply(15,3) === 45 ? "✅": "❌"}`, calc.multiply(15,-1) )
console.log(`Ekspozan 2e3=8 ${calc.exp(2,3) === 8 ? "✅": "❌"}`, calc.exp(2,3) )
console.log(`Ekspozan 2e0=1 ${calc.exp(2,0) === 1 ? "✅": "❌"}`, calc.exp(2,0) )
console.log(`Ekspozan 2e-3=0.125 ${calc.exp(2,-3) === 0.125 ? "✅": "❌"}`, calc.exp(2,-3) )
console.log(`Ekspozan 0e0=0 | 0e0=1 ${(calc.exp(0,0) === 0 || calc.exp(0,0) === 1) ? "✅": "❌"}`, calc.exp(0,0) )
console.log(`Ekspozan 2e-1=0.5 ${calc.exp(2,-1) === 0.5 ? "✅": "❌"}`,  calc.exp(2,-1) )
console.log(`Faktoryèl 4!=24 ${calc.fact(4) === 24 ? "✅": "❌"}`, calc.fact(4) )
console.log(`Faktoryèl 0!=1 ${calc.fact(0) === 1 ? "✅": "❌"}`, calc.fact(0) )
console.log(`Mwayèn avg(2,4)=3 ${calc.avg(2,4) === 3 ? "✅": "❌"}`, calc.avg(2,4) )
console.log(`Mwayèn avg(-4,-5)=-4.5 ${calc.avg(-4,-5) === -4.5 ? "✅": "❌"}`, calc.avg(-4,-5) )
console.log(`Konbinezan 2 nan 4=6 ${calc.comb(2,4) === 6 ? "✅": "❌"}`, calc.comb(2,4) )
console.log(`Konbinezan 0 nan 2=1 ${calc.comb(0,2) === 1 ? "✅": "❌"}`, calc.comb(0,2) )
console.log(`Konbinezan 0 nan 0=1 ${calc.comb(0,0) === 1 ? "✅": "❌"}`, calc.comb(0,0) )
console.log(`Aranjman 2 nan 4=12 ${calc.arr(2,4) == 12 ? "✅": "❌"}`,  calc.arr(2,4) )
console.log('-------------------------')
// Tcheke erè

console.log('EKZEKISYON SA YO DWE JENERE ERE')
console.log('-------------------------')

try{
	console.log("Mwayèn [3,5,3,'25',6]=ValueError ❌", calc.avg(3,5,3,"25",6) )
}catch(err){
  console.log(`calc.avg(3,5,3,'25',6) ${err.name} ✅`)
} 

try{
	console.log('calc.add(2)=MissingParameterError ❌', calc.add(2) )
}catch(err){
  console.log(`calc.add(2) ${err.name} ✅`)
} 
try{
	console.log('calc.substract(14)=MissingParameterError ❌',  calc.substract(14) )
}catch(err){
  console.log(`calc.substract(14) ${err.name} ✅`)
} 
try{
	console.log('calc.divide(13,0)=ZeroDivisionError ❌',  calc.divide(13,0) )
}catch(err){
  console.log(`calc.divide(13,0) ${err.name} ✅`)
} 
try{
	console.log('calc.divide(0,0)=InfinityError ❌',  calc.divide(0,0) )
}catch(err){
  console.log(`calc.divide(0,0) ${err.name} ✅`)
} 
try{
	console.log('calc.multiply(15)=MissingParameterError ❌',  calc.multiply(15) )
}catch(err){
  console.log(`calc.multiply(15) ${err.name} ✅`)
} 

try{
	console.log('calc.fact(-3)=ValueError ❌',  calc.fact(-3) )
}catch(err){
  console.log(`calc.fact(-3) ${err.name} ✅`)
} 
try{
	console.log('calc.fact(3.4)=TypeError|ValueError ❌',  calc.fact(3.4) )
}catch(err){
  console.log(`calc.fact(3.4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(0,0)=ValueError ❌',  calc.arr(0,0) )
}catch(err){
  console.log(`calc.arr(0,0) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(0,4)=ValueError ❌',  calc.arr(0,4) )
}catch(err){
  console.log(`calc.arr(0,4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(4,0)=ValueError ❌',  calc.arr(4,0) )
}catch(err){
  console.log(`calc.arr(4,0) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(-1,4)=ValueError ❌',  calc.arr(-1,4) )
}catch(err){
  console.log(`calc.arr(-1,4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(2,4.4)=TypeErro|ValueError ❌',  calc.arr(-2,4.4) )
}catch(err){
  console.log(`calc.arr(2,4.4) ${err.name} ✅`)
} 
try{
	console.log('calc.comb(4,2)=ValueError ❌',  calc.comb(4,2) )
}catch(err){
  console.log(`calc.comb(4,2) ${err.name} ✅`)
} 
try{
	console.log('calc.comb(0,-4)=ValueError ❌',  calc.comb(0,-4) )
}catch(err){
  console.log(`calc.comb(0,-4) ${err.name} ✅`)
} 
try{
	console.log('calc.comb(-1,4)=ValueError ❌',  calc.comb(-1,4) )
}catch(err){
  console.log(`calc.comb(-1,4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(4,2)=ValueError ❌',  calc.arr(4,2) )
}catch(err){
  console.log(`calc.arr(4,2) ${err.name} ✅`)
} 

try{
	console.log('calc.exp(2,2.3)=TypeError|ValueError ❌',  calc.exp(2,2.3) )
}catch(err){
  console.log(`calc.exp(2,2.3) ${err.name} ✅`)
} 

try{
	console.log('calc.avg(2)=MissingParameter ❌',  calc.avg(2) )
}catch(err){
  console.log(`calc.avg(2) ${err.name} ✅`)
}
