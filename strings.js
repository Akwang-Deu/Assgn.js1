let y = "Extravaganza";
console.log(y[8]);
console.log(y[9]);
console.log(y[10]);
console.log(y[11]);

//question2
const food ="The quick fox jumped over the lazy dog";
let a = "eat";
let b = `The q${a}uick fox jumped over the lazy dog`;
console.log(b)

//question3
let r = "The quick brown fox jumps over the lazy dog";
console.log((r.match("the")).length)
console.log((r.match("brown")).length)

//question4
let d = "The pupils are reading in the library";
console.log(d.indexOf('are'));
let e = "The child was sitting on the table it fell";
console.log(e.indexOf('sitting'));


//question5
let g = "wonderful";
h = g.toUpperCase();
console.log(h);
let c = "Amazing"
i = c.toLowerCase();
console.log(i);
let j = "UnderERneath";
k = j.toLowerCase()
console.log(k)

let m= "A wonderful world";
let titleCase = "";
m.split(" ").forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";
});
console.log(titleCase);
    
    
    




