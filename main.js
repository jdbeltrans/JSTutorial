var attr = "active";

var student = {
    "name": "Pedro",
    "lastname": "Perez",
    "age": 30,
    "subjects": ["Web Development", "Differential calculus", "Physics"],
    "program": {
      "name": "Systems Engineering",
      "foundedAt": 1990
    },
    "active": true
  };

  student.code = "123456" // crea el atributo code y se lo asigna
  delete student.code; //elimina el code
  
  console.log(student[attr]);
  console.log(student.hasOwnProperty("code")); // false, pues no existía


// arreglo de students
  var students = [
    {
    "name": "Pedro",
    "lastname": "Perez",
    "age": 30,
    "subjects": ["Web Development", "Differential calculus", "Physics"],
    "program": {
      "name": "Systems Engineering",
      "foundedAt": 1990
    },
    "active": true
  },
     {
    "name": "Juanita",
    "lastname": "Cañón",
    "age": 22,
    "subjects": ["Web Development", "Math 2", "Arts"],
    "program": {
      "name": "Electrical Engineering",
      "foundedAt": 1980
    },
    "active": false
  }
    ];
  
  console.log(students[1]); //mostrará toda la info de Juanita

  // arrays anidados
    var arrayExample = [[1,2],[3,4],[5,6]];
    console.log(arrayExample[2][1]); //imprime el 6

    students.push({ //agrega un nuevo estudiante y lo pone en la última posición del array
        "name":"Juancho",
        "lastname":"Silva",
      })
      
      students.pop(); //elimina automaticamente el último elemento del array
      students.shift(); //elimina automaticamente el primer elemento del array
      students.unshift(); //agrega automaticamente el elemento en la primera posición del array

      //funcion 
      function addStudent(message = "Hello Student"){ //se puede poner el message acá directamente 
  
        return message;
      }
      
      console.log(addStudent()); //imprime Hello Student

      //otra forma de imprimir mediante un arrow function
      var hello = (name) => "Hello " +name;
      console.log(hello("Martha")); // imprime Hello Martha

      //Function, add property with the number of courses by student
      students = students.map(student => {
        student["course_num"] = student.subjects.length;
      return student;
    });
      console.log(students);

      //function to get the students of the system engineering program
      var students_syseng = students.filter(student => student.program.name === "Systems Engineering");
      console.log(students_syseng);

      //function to find the first student with the lastname Cañón
      var studentCañon = students.find(student => student.lastname === "Cañón");
      console.log(studentCañon);

      //function to get the average of the students age
      var studentAgeAvg = students.reduce((s1, s2) => s1.age + s2.age );
      console.log(studentAgeAvg);

      //Conditional (ternary) operator
      function fullCourse(){
        if(students.length === 2){ //cantidad de students = 2
            return "El curso está lleno";
          } else{
              return "Hay cupos disponibles";
          }
      }

      var isFull = (students.length === 2) ? "El curso está lleno" : "Hay cupos disponibles"; //en esta linea se hace el ternary y funciona igual que el if de arriba
    

      console.log(fullCourse());
      console.log(isFull);

      //getting an element by ID
      var parrafo1 = document.getElementById("parrafo1");
      console.log(parrafo1);
      parrafo1.innerHTML =  "Este es un párrafo de prueba chan!"; //modifica el parrafo1
      parrafo1.style["fontSize"] = 30; //cambia el tamaño del parrafo1
      
      //getting an element by tag name
      var htmlImage = document.getElementsByTagName("img");
      console.log(htmlImage);
      htmlImage[0].width = 100; // cambia el tamaño de la imagen

      //getting an element by class
      var parrafos = document.getElementsByClassName("parrafo");

      for(var i = 0; parrafos.length;i++){

        parrafos[i].style["color"] = "red";
      }

      //creating a new paragraph

      function addElement(){
        //creating a new p element
        var newParagraph = document.createElement("p");
        newParagraph.id = "paragraph4";
        // creating its content
        var newContent = document.createTextNode("This is a new paragraph");
        // adding the text node to the newly created p
        newParagraph.appendChild(newContent);
        //adding the newly created element and its content to the DOM
        document.body.insertBefore(newParagraph, paragraphs[1].nextSibling);
        //running on page load
      }
      document.body.onload = addElement;

      //Querying elements
      var paragraphsWithClass = document.querySelectorAll("p.paragraph"); //trae todos los p que adicionalmente tienen la clase paragraph 
      console.log(paragraphsWithClass);

      paragraphsWithClass[1].addEventListener("mouseover", function() { //cuando el mouse pase por encima, se va a activar esa funcion que es un mensaje de alerta
          alert(this);
      });


      