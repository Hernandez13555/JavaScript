let palabra = "123LOrem ipsum dolor ; sit, amet culpa consectetur adipisicing 521 elit. Nihil repudiandae 9 recusandae ipsa ad. Temporibus culpa odio iste laudantium praesentium, enim corrupti quidem explicabo magnam unde hic at dolorem ea, numquam dicta."
palabra = "1238       vaca"

let regex = /^([0-9]{4,6}).+([a-z]{4,6})$/g;

console.log(regex.test(palabra)); 
// console.log(regex.exec(palabra));
console.log(palabra.match(regex));

