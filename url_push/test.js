//Customs exception
function KeyError(message) {
  const error = new Error(message);
  error.name = "KeyError";
  error.code = 02;
  return error;
}

function transformToAssocArray(prmstr) {
  let params = {};
  let prmarr = prmstr.split("&");
  for (let i = 0; i < prmarr.length; i++) {
    let tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}

function cleanDomain(removeValue) {
  var domainName = window.location.host.split(".");
  if (domainName.includes(removeValue)) {
    domainName.shift();
    console.log(domainName);
  } else {
    console.log(domainName);
  }
}

function addParams(key, value) {
  let object = transformToAssocArray(window.location.search);
  if(object.hasOwnProperty(key)){
    throw new KeyError('Key alredy exist')
  }else{
  let queryParams = new URLSearchParams(window.location.search);
  let add = queryParams.set(key, value);
  return history.replaceState(null, null, "?" + queryParams.toString());
  }
  
}
// function updateParams
function updateParams(key, value) {
  let object = transformToAssocArray(window.location.search);
  if (object.hasOwnProperty(key)) {
    let queryParams = new URLSearchParams(window.location.search);
    let add = queryParams.set(key, value);
    return history.replaceState(null, null, "?" + queryParams.toString());
  } else {
    throw new KeyError("Key does'nt exist");
  }
}
// function getParams
function getParams(key) {
  let obj1 = {};
  let object = transformToAssocArray(window.location.search);
  if (object.hasOwnProperty(key)) {
    obj1 = object[key];
  } else {
    throw new KeyError("Keys does'nt exist");
  }
  return obj1;
}

// need to fix
function removeAll() {
  return (myUrl.search = {});
}

// RemoVE BY ID
function removeById(key) {
  let object = transformToAssocArray(window.location.search);
  if (object.hasOwnProperty(key)) {
  search_params = new URLSearchParams(window.location.search);
  search_params.delete(key);
  }else{
    throw new KeyError('Key does not existe')
  }
  return history.replaceState(null, null, "?" + search_params.toString());
}

console.log(
  "=---------------= Menu =---------------=\n[1]- Ajoute yon kle\n[2]- Modifye yon kle\n[3]- Suprime yon kle\n[4]- Rekupere yon kle yon kle\n[5]-Afiche Nom de domaine nan\n[6]- Kite program nan\n[7]- Efase tout paramet yo"
);

let again = true;

do {
  let option = parseInt(prompt("Chwazi yon opsyon"));
  // console.clear()
  switch (option) {
    case 1:
      let key = prompt("Antre kle a");
      let value = prompt("Antre valeur a");
      addParams(key, value);
      break;

    case 2:
      let key1 = prompt("Antre kle ou vle modifye valeur a");
      let value1 = prompt("Antre antre nouvo valeur a");
      updateParams(key1, value1);
      break;

    case 3:
      let key2 = prompt("Antre kle a wap suprime a");
      removeById(key2);
      break;

    case 4:
      let key3 = prompt("Antre kle a wap rekupere a");
      let y = getParams(key3);
      let a =(transformToAssocArray(window.location.search))
      console.log(`Vale kle ou rekupere a se ${key3}:`,a[key3]);
      break;

    case 5:
      let myUrl = window.location;
      console.log(`Nom de domaine nan se :${myUrl.host}`);
      break;
    case 6:
      console.log("Mesi deskew t itilize program nou an");
      again = false;
      setTimeout(() => {console.clear()},3000)
      break;
  }
  console.log(
    "=---------------= Menu =---------------=\n[1]- Ajoute yon kle\n[2]- Modifye yon kle\n[3]- Suprime yon kle\n[4]- Rekupere yon kle yon kle\n[5]-Afiche Nom de domaine nan\n[6]- Kite program nan"
  );
}while(again);
//
