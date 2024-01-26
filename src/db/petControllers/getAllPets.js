const petHelper = require('../models/pets');

const getAllPets = async (req, res) => {
        const data = await petHelper.getAllPets();
        console.log(data);
        res.send(data).status(200);
};

module.exports = getAllPets;