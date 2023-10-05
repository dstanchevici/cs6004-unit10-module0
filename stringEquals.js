
function run() {
    let x = 42;
    let y = "42";

    if (x == y) {
        println("x == y is true");
    }
    else {
        println("x == y is false");
    }

    if (x === y) {
        println("x === y is true");
    }
    else {
        println("x === y is false");
    }
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
