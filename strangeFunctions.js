
function funcFetcher (funcName)
{
    function max (a,b) {
        if (a > b) {return a;} else {return b;}
    }
    function min (a,b) {
        if (a < b) {return a;} else {return b;}
    }

    if (funcName === "max") return max;
    if (funcName === "min") return min;
    else return null;
}

let concat = (...args) => {
    let s = "";
    for (let i=0; i<args.length; i++) {
        s = s + args[i];
    }
    return s;
}

function run() {
    let func = funcFetcher ("max");
    let k = func (3,4);
    println ("k=" + k);

    println ( concat("ba", "tm", "an") );
}

//////////////////////////////////////////////////////////////////////////
 // Useful print functions similar to Java's System.out.print() / println()

 function print (outputStr)
 {
     document.getElementById("output").innerHTML += outputStr;
 }

 function println (outputStr)
 {
     document.getElementById("output").innerHTML += outputStr + "<br>";
 }