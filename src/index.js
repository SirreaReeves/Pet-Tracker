const petHelper = require('./db/models/pets');
const express = require('express');
const path = require ('path');
const app = express();
app.use(express.json());
const PORT = 8080;

const publicDir = path.join(__dirname, '..', 'public');
const staticAssests = express.static(publicDir);
app.use(staticAssests);

app.get('/', (req, res) => {
    res.send('Server is live').status(200);
});

app.get('/getpets', async (req, res) => {
    const data = await petHelper.getAllPets();
    console.log(data);
    res.send(data).status(200);
})

app.post('/addpets', async (req, res) => {
    try {
        const {pet_name, picture_url, species, is_friendly} = req.body;
        const data = await petHelper.postPets(pet_name, picture_url, species, is_friendly);
        console.log(data);
        res.send(data).status(200);
    } catch(err) {
        res.send(err).status(404);
    }
});

app.delete('/deletepets:id', async (req, res) => {
    const {id} = req.params;
    const data = await petHelper.deletePets(id);
    const foundPet = pets.findIndex(pet => Number(id) === pet.id);
    pets.splice(foundPet, 1);
    console.log(id)
    res.send('deleted').status(200);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});