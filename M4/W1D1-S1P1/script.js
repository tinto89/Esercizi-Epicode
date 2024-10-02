// 1. 50

function num50(num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    return true;
  } else return false;
}

// 2. stringa

function removeChar(myStr, position) {
  let charArr = myStr.split("");
  charArr.splice(position, 1);
  return charArr.join("");
}

// 3. 40 60 70 100

function numbers(x, y) {
  if (
    (x > 40 && x < 60 && y > 40 && y < 60) ||
    (x > 70 && x < 100 && y > 70 && y < 100)
  ) {
    return true;
  } else return false;
}

// 4. città

function cityCheck(city) {
  let checkcity = city.toLowerCase();
  if (checkcity.startsWith("los") || checkcity.startsWith("new")) {
    return city;
  } else return false;
}

// 5. array counter

let arrIndex = 0;
function arrCounter(myArr) {
  for (let i = 0; i < myArr.length; i++) {
    arrIndex++;
  }
}

// 6. check 1 e 3

function not1and3(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 3) {
      return false;
    }
  }
  return true;
}

// 7. angolo

function corner(cor) {
  if (cor < 90) return "acuto";
  if (cor > 90 && cor < 180) return "ottuso";
  if (cor === 90) return "retto";
  if (cor === 180) return "piatto";
}

// 8. acronimo

function extractAcronym(mySrt) {
  let acronym = mySrt.split(" ");
  let extract = "";
  for (let i = 0; i < acronym.length; i++) {
    let srt = acronym[i];
    extract += srt.charAt(0);
  }
  return extract.toUpperCase();
}
