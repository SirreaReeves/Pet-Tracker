// A "seed" file is how we can pre-populate our database with data.
// This is useful for testing and development purposes.

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries (you can just use knex and delete everything)
  await knex('pet_tracker').del();
  // Now run your logic to create your resources with your models
  await knex('pet_tracker').insert([{pet_name: "Fluffy", picture_url: "cat.jpeg", species: "cat", is_friendly: false}, {pet_name: "Rex", picture_url: "", species: "dog", is_friendly: true}, {pet_name: "Screamin Jean", picture_url: "", species: "bird", is_friendly: false}]);
};
