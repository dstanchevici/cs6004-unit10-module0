function run () {

    let person = {
        name: "Tarzan",
        debut: 1912,
        toString: function () {
                return this.name + " debuted in " + this.debut;
            }
    };
    println (person.toString());

    let superhero = new Object ();
    superhero.name = "Zorro";
    superhero.debut = 1919;
    superhero.toString = function () {
       return this.name + " debuted in " + this.debut;
    };
    println (superhero.toString());

    let c = new ComicCharacter ("Sheena", 1937);
    println (JSON.stringify(c));
}

function ComicCharacter (n, d) {
    this.name = n;
    this.debut = d;
    this.toString = function () {
        return this.name + " debuted in " + this.debut;
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