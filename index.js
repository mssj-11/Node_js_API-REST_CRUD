const express = require('express');
const app = express();

//  Usara archivos en formato JSON
app.use(express.json());

//  Arreglo de estudiantes
const students = [
    { id: 1, name: 'Mike', age: 24, enroll: true  },
    { id: 2, name: 'Julio', age: 29, enroll: false  },
    { id: 3, name: 'Maria', age: 25, enroll: true  },
    { id: 4, name: 'Julia', age: 21, enroll: true  },
    { id: 5, name: 'Gerardo', age: 18, enroll: true  },
    { id: 6, name: 'Orlando', age: 21, enroll: false  },
    { id: 7, name: 'Andrea', age: 24, enroll: true  },
    { id: 8, name: 'Sarahi', age: 27, enroll: true  },
    { id: 9, name: 'Pedro', age: 28, enroll: true  },
    { id: 10, name: 'Omar', age: 26, enroll: true  },
    { id: 11, name: 'Hugo', age: 22, enroll: true  },
    { id: 12, name: 'Luis', age: 20, enroll: false  }
];


app.get('/', (req, res) => {
    res.send('API REST en Node.js');
});


app.get('/api/students', (req, res) => {
    res.send(students);
});


app.get('/api/students/:id', (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('El estudiante no ha sido encontrado');
    else res.send(student);
});


app.post('/api/students', (req, res) => {
    //  Datos del estudiante
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: (req.body.enroll === 'true')
    };

    //  Agregando el estudinate al arreglo
    students.push(student);
    //  Mostrando el estudiante en la consulta/pagina
    res.send(student);
});



app.put('/api/students/:id', (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('El estudiante no ha sido encontrado');

    // Validar que se han enviado todos los campos necesarios
    const { name, age, enroll } = req.body;
    if (!name || !age || !enroll) return res.status(400).send('Faltan campos obligatorios');

    // Actualizar los datos del estudiante
    student.name = name;
    student.age = age;
    student.enroll = enroll;

    // Responder con el estudiante actualizado
    res.send(student);
});



app.delete('/api/students/:id', (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if(!student) return res.status(404).send('Estudiante no encontrado');
    //  Si si seencontro se crea el indice
    const index = students.indexOf(student);
    students.splice(index, 1);  //  Borrando
    res.send(student);  //  Mostrando el Estudiante eliminado
});



//  Puerto
const port = process.env.port || 80;
app.listen(port, () => console.log(`Iniciando en el puerto ${port}`));