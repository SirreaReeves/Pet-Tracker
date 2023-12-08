const petHelper = require('./db/models/pets');
const express = require('express');
const path = require ('path');
const app = express();
app.use(express.json());
const PORT = 8080;

const publicDir = path.join(__dirname, '..', 'public');
const staticAssests = express.static(publicDir);
app.use(staticAssests);


const pets = [{pet_name: 'kitty', picture_url: '', species: 'cat', is_friendly: false}];

app.get('/', (req, res) => {
    res.send('Server is live').status(200);
});

// app.get('/getpets', (req, res) => {
//     res.send(pets).status(200);
// });

app.get('/getpets', async (req, res) => {
    const data = await petHelper.getAllPets();
    console.log(data);
    res.send(data).status(200);
})

app.post('/addpets', (req, res) => {
    try {
        const {pet_name, picture_url, species, is_friendly} = req.body;
        const currPet = {
            pet_name,
            picture_url,
            species,
            is_friendly
        }
        pets.push(currPet);
        res.send(currPet).status(200);
    } catch(err) {
        res.send(err).status(404);
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});