// EXERCISE 1: Asterick Pattern

function createPattern(num){
    
    var num = document.getElementById("num").value;
    var container=document.getElementsByClassName("exercise-container one")[0];
    
    for (let i = num; i >= 1; i--) {

        var a = "";
        for (let j = 1; j <= i; j++) {
          a = a + "*";
        }

        console.log(a);
        var pat = document.createElement("h1");
        pat.appendChild(document.createTextNode(a));
        pat.style.textAlign="left";
        container.appendChild(pat)
        
    }
  }

  // EXERCISE 2: OBJECTS

  var obj = {
    name: "Ajal Tandukar",
    address: "Kathmandu",
    email: "ajaltandukar@gmail.com",
    interests: ["sports", "music"],
    education: {
      educationName: "Bachlors in IT",
      enrolledDate: "2018"
    }
  };
  
  function objectEducation(){
    var container=document.getElementsByClassName("exercise-container two")[0];
    console.log(
      "Name: " +
        obj.education.educationName +
        ", Date: " +
        obj.education.enrolledDate
    );
  
    var display = document.createElement("p");
    display.appendChild(document.createTextNode("OPEN BROSWER CONSOLE FOR OUTPUT"));
    display.style.color="red";
    container.appendChild(display);
  }

  // EXERCISE 3: OBJECTS - SEARCHING

  var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'},
  ]

  function objectSearch(){
    var container=document.getElementsByClassName("exercise-container three")[0];

    
     
      var count=fruits.length
      
      for(var i=0;i<count;i++){
        
        var a=fruits[i]
        var b=(a.name).toLowerCase();

       if(b==='apple'){
         console.log(fruits[i])
       }
      }

    var display = document.createElement("p");
    display.appendChild(document.createTextNode("OPEN BROSWER CONSOLE FOR OUTPUT"));
    display.style.color="red";
    container.appendChild(display);
  }

  // EXERCISE 4: FUNCTIONS - TRANFORMATION

  var numbers = [1, 2, 3, 4];
  var newArr = [];
  
  function tranformation(){
    function transform(collection, tranFunc) {
        var container=document.getElementsByClassName("exercise-container four")[0];
        var result = numbers.forEach(function (val, index) {
        newArr.push(val * 2);
        });
        console.log(newArr);

        var display = document.createElement("p");
        display.appendChild(document.createTextNode("OPEN BROSWER CONSOLE FOR OUTPUT"));
        display.style.color="red";
        container.appendChild(display);
    }
    
    var output = transform(numbers, function (num) {
        return num * 2;
    });
}

// EXERCISE : SCATTER PLOT

var points = [
    {x: 10, y: 20},
    {x: 40, y: 40},
    {x: 60, y: 20},
    {x: 120, y: 80},
    {x: 90, y: 10},
    {x: 50, y: 50},
    
  ]
  
  for(var i=0;i<points.length;i++){
    var myElement =document.getElementsByClassName("box")[0];
    var dot = document.createElement("div")
    var a=points[i]
    var b=a.x
    var c=a.y
    
    dot.style.width ="10px";
    dot.style.height ="10px";
    dot.style.position="absolute";
    dot.style.top= b +"px";
    dot.style.left= c +"px";
    dot.style.background="blue";
    dot.style.borderRadius="50%";
  
    myElement.appendChild(dot)
  } 

  // EXERCISE : BOUNCING BALL

    var container=document.getElementsByClassName("exercise-container eight")[0];
    const wall = document.createElement("div");
    wall.setAttribute("id", "wall");

    wall.style.width = "400px";
    wall.style.height = "400px";
    wall.style.border = "1px solid black";
    wall.style.position = "absolute";
    wall.style.left = "35%";
    
    

    container.appendChild(wall);

    const ball = document.createElement("div");
    ball.setAttribute("id", "wall");

    ball.style.width = "30px";
    ball.style.height = "30px";
    ball.style.backgroundColor = "blue";
    ball.style.borderRadius = "50%";
    ball.style.top = "0px";
    ball.style.position = "relative";
    ball.style.margin = "auto";

    container.appendChild(ball);

    let ballMovement = "down";

    const ballAnimation = () => {
    if (ballMovement === "down") {
        ball.style.top = parseInt(ball.style.top) + 1 + "px";
        if (parseInt(ball.style.top) + 30 >= parseInt(wall.style.height)) {
        ballMovement = "up";
        }
    } else if (ballMovement === "up") {
        ball.style.top = parseInt(ball.style.top) - 1 + "px";
        if (parseInt(ball.style.top) <= 0) {
        ballMovement = "down";
        }
    }
    };
    setInterval(ballAnimation, 5);
