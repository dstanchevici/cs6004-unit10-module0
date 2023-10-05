
function add (x, y) {
    return x + y;
}

function run() {
    let i = add (3,4);
    let j = add (i, add(i,i+1));
    println ("i=" + i + " j=" + j);
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
