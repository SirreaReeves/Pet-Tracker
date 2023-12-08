const knex = require('./knex');

class Pets {
  static async getAllPets() {
    try {
      const query = `SELECT * FROM pet_tracker`;
      const result = await knex.raw(query) 
      console.log(result);
      return result.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async postPets(pet_name, picture_url,species, is_friendly) {
    try {
        const query = `INSERT INTO pet_tracker (pet_name, picture_url, species, is_friendly) VALUES (?, ?, ?, ?)
        RETURNING *
        `;
        const result = await knex.raw(query, [pet_name, picture_url, species, is_friendly]);
        return result.rows;
    } catch(err) {
        console.error(err);
        return null;
    }
  }

  static async deletePets(id) {
    try {
        const query = `DELETE FROM pet_tracker WHERE id = ?`;
        const result = await knex.raw(query, [id]);
        return result
    } catch(err) {
        console.log(err);
        return null;
    }
  }
}

module.exports = Pets;