const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null); // Expect the err to be null

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim()); 

      done();
    });
  });

  it('returns an error for an invalid/nonexistent breed, via callback', (done) => {
    fetchBreedDescription('qwerty', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(desc, null); // Expect the desc to be null

      // compare returned description
      assert.equal(err,`The requested breed: qwerty is not found`); // Expect the error to be `The requested breed: qwerty is not found`

      done();
    });
  });
});