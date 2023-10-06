function run()
{
    let fruits = ["banana", "kiwi", "apple", "orange"];
    let amounts = [4, 12, 9, 6];

    amounts[2] += 1;

    let fruitAmounts = [
        ["banana", 12],
        ["kiwi", 9],
        ["apple", 4],
        ["orange", 6]
    ];
    fruitAmounts[2][1] ++;

    println ("We have " + amounts[0] + " of " + fruits[0]);
    println ("And " + fruitAmounts[2][1] + " of " + fruitAmounts[2][0]);

    fruits.push("pear");
    let last = fruits.pop();
    let first = fruits.shift();
    fruits.unshift (first);

    println ("#fruits=" + fruits.length + " first=" + first + " last=" + last);

    let subarray = fruits.slice(1,3);
    subarray.sort();
    for (let i=0; i<subarray.length; i++) {
        println (subarray[i]);
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