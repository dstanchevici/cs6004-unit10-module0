
function run() {
    // WRITE YOUR CODE HERE

    let s = "42";
    let i = 1 + Number(s);
    println ("i=" + i);

    let j = Number(false);
    println ("j=" + j);

    let k = Number("How could this be a number?");
    println ("k=" + k);

    let m = i / 0;
    println ("m=" + m);

    let pi = 3.141;
    let piStr = String(pi);
    println (typeof(pi) + " and " + typeof(piStr));

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
