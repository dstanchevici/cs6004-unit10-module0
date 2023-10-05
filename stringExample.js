
function run() {
    // WRITE YOUR CODE HERE
    let str = "I don't like sentences that end abrup";
    println("str=" + str);
    let len = str.length;
    println("str.length=" + len);
    let subStr = str.slice(2,12);
    println("subStr(2,12)=" + subStr);
    let x = str.indexOf("like");
    println("indexOf(\"like\")=" + x);
    let y = str.slice(-1);
    println("str.slice(-1)=" + y)

    let str2 = " Whatever     ";
    println("str2=" + str2);
    let str3 = str2.trim().toLowerCase();
    println("str3=" + str3);
    let str4 = str2.charAt(1);
    println("str4=" + str4);

    let str5 = "don't like";
    if (subStr == str5) {
        println("["+ subStr + "] equals [" + str5 + "]");
    }
    else {
        println("["+ subStr + "] equals [" + str5 + "]");
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
