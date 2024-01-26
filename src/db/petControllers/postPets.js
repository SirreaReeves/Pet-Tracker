const petHelper = require('../models/pets');

const postPets = async (req, res) => {
        try {
            const {pet_name, picture_url, species, is_friendly} = req.body;
            const data = await petHelper.postPets(pet_name, picture_url, species, is_friendly);
            console.log(data);
            res.send(data).status(200);
        } catch(err) {
            res.send(err).status(404);
        }
};


module.exports = postPets;