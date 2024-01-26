const petHelper = require('../models/pets');

const deletePets = async (req, res) => {
        const {id} = req.params;
        const data = await petHelper.deletePets(id);
        res.send('deleted').status(200);
};

module.exports = deletePets;