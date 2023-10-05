
function run() {
    let i = 5, x = 3.141;
    println (typeof(i));
    println (typeof(x));
    println (typeof("hello"));
    println (typeof(run));

    let person = {
        firstname: "Bruce",
        lastname: "Wayne",
        age: 34
    };

    println (JSON.stringify(person));
    println ("age" in person);
    delete person.age;
    println (JSON.stringify(person));
    println ("age" in person);
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
