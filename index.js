var rect = require('./rectangle');


function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l,b, (err, rectangle) => {
        if (err)
        {
        console.log("error: " ,err.message);
        }
        else
        {
        console.log("The area of rectangle of dimension l=" +l+ "and b=" +b+ "is" + rectangle.area());
        console.log("The perimeter of rectangle of dimension l=" +l+ "and b=" +b+ "is" + rectangle.area());
        }
    });
    console.log("This statement is after the callto rect()");
    //rect is a node module with 2 parameter and 1 call back  function(2 parameter)
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);