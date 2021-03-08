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

      