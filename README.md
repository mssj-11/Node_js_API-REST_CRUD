#   API REST con Node js


##   Requisitos:
*   Node js
*   Express
*   POSTMAN

##  Proceso:
1. Inicializar el proyecto como `npm` con el comando: **`npm init`**
2. Agregarle nombre al `package name`, en este caso: **`nodejsapi`**
3. Instalación de la dependencia Express: **`npm install express`**


##  Otra opción de código en el método PUT:
````js
app.put('/api/students/:id', (req, res) => {
  const student = students.find(c => c.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('El estudiante no ha sido encontrado');

  Object.assign(student, req.body);

  res.send(student);
});
```