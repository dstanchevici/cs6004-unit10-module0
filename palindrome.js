
function run() {
    println ("<br>");
    let str = document.getElementById("textfield").value;
    println ("You entered: " + str);

    // WRITE YOUR CODE HERE to determine whether str is a palindrome
    let rawStr = "";
    for (let i=0; i<str.length; i++) {
        if (str.charAt(i) != " ") {
            rawStr = rawStr.concat(str.charAt(i).toLowerCase());
        }
    }

    //println ("Raw string: " + rawStr);
    //println ("Length=" + rawStr.length);

    let palindrome = true;
    let mid = Math.floor (rawStr.length / 2);

    //println ("mid=" + mid);

    for (let i=0; i<mid; i++) {
        if ( (rawStr.charAt(i)) !== (rawStr.charAt(rawStr.length-1-i)) ) {
            palindrome = false;
            break;
        }
    }

    if (palindrome) {
        println ("Palindrome");
    }
    else {
        println ("Not palindrome");
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
