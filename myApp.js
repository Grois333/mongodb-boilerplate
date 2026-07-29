require('dotenv').config();

// Set up mongoose connection
const mongoose = require('mongoose');

// Connect to the MongoDB database using the connection string from the .env file
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let Person;

//create a document instance using the Person model
const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Isaac",
    age: 25,
    favoriteFoods: ["Pizza", "Sushi"]
  });
  person.save((err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

//create many people using Model.create() with the argument arrayOfPeople
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

// find all the people having a given name, using Model.find() -> [Person]
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

// find just one person which has a certain food in the person's favorites, using Model.findOne() -> Person
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

//find the only person having a given _id, using Model.findById() -> Person
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

//find a person by _id, add "hamburger" to the list of the person's favoriteFoods, and then save the person. -> Person
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if (err) return done(err);
    person.favoriteFoods.push(foodToAdd);
    person.save((err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};


//Create a person schema called personSchema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 0 },
  favoriteFoods: [String]
});

//Create a person model called Person
Person = mongoose.model('Person', personSchema);

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
