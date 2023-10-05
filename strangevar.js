// After running this as is, follow the instructions in each 
// of two comments that start with 1. and 2.

function run() {
    // 1. Comment out the line x=1. What do you observe?
    //x = 1;
    println (x);

    y = 2;
    println (y);

    if (true) {
        var x = 5;
	println (x);
    }

    // 2. Un-comment the line below. What do you observe?
    let y = 3;

    var x = 4;
    println (x);
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
