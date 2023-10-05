
function run() {
    let s = "hello";       // A string
    println ("s=" + s);

    let i = 1;             // A number that happens to be an integer
    println ("i=" + i);

    let d = 3.141;         // A number that happens to be a real
    println ("d=" + d);

    let person = {         // An object defined like a JSON value
       name: "Alice",
       age: 19
    }
    println (person.name + " is " + person.age + " years old");

    let flag = true;
    println ("flag=" + flag);
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
