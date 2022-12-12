import assert from "assert";
import { getAge, getAgeGroup, getAgeForPerson, divideIt } from "./index.mjs";

describe("age calculator", () => {
  it("someone born 1972 is 50 2022", () => {
    //act
    const result = getAge(1972, 2022);

    //assert
    assert.equal(result, 50);
  });

  it("someone born 2021 is 1 2022", () => {
    // arrange
    // act
    const result = getAge(2021, 2022);

    // assert
    assert.equal(result, 1);
  });

  it("someone born 1983 is 39 2022", () => {
    // arrange
    // act
    const result = getAge(1983, 2022);

    // assert
    assert.equal(result, 39);
  });

  it("0-3 years old should be a toddler", () => {
    // arrange
    // act
    const result = getAgeGroup(0);

    // assert
    assert.equal(result, "toddler");
  });
  it("4-12 years old should be a kid", () => {
    // arrange
    // act
    const result = getAgeGroup(5);

    // assert
    assert.equal(result, "kid");
  });
  it("13-19 years old should be a teenager", () => {
    // arrange
    // act
    const result = getAgeGroup(19);

    // assert
    assert.equal(result, "teenager");
  });
  it("20-39 years old should be a adult", () => {
    // arrange
    // act
    const result = getAgeGroup(20);

    // assert
    assert.equal(result, "adult");
  });
  it("above 39 years old ... you are just old", () => {
    // arrange
    // act
    const result = getAgeGroup(70);

    // assert
    assert.equal(result, "old");
  });
  //specials
  it("But 50 - that is prime age, my friend. PRIME. AGE.", () => {
    // arrange
    // act
    const result = getAgeGroup(50);

    // assert
    assert.equal(result, "prime");
  });
  it("under 0 years old ... you are not born yet", () => {
    // arrange
    // act
    const result = getAgeGroup(-3);

    // assert
    assert.equal(result, "unborn");
  });
  it("above 100 years old ... you are verry old", () => {
    // arrange
    // act
    const result = getAgeGroup(120);

    // assert
    assert.equal(result, "verryold");
  });
  it("above 130 years old ... most likely not a human", () => {
    // arrange
    // act
    const result = getAgeGroup(130);

    // assert
    assert.equal(result, "nothuman");
  });
});

describe("constants and variables", () => {
  it.skip("const means constant", () => {
    const aNumber = 1;
    aNumber = 2;
  });
  it("you can change a let variable", () => {
    // arrange
    let aNumber = 1;

    // act
    aNumber = 2;

    // assert
    assert.equal(aNumber, 2);
  });
  it("uninitialized variables are undefined", () => {
    // act
    let aNumber;

    // assert
    assert.equal("undefined", typeof aNumber);
    assert.equal(undefined, aNumber);
  });
  it("null should be used for not set", () => {
    // arrange
    // declaring a dummy function
    const peekIntoTheBox = () => {
      return false;
    };

    // act
    let isCatAlive = null;

    // assert
    assert.equal(null, isCatAlive);
    isCatAlive = peekIntoTheBox();
  });
});

describe("loops does things over and over", () => {
  it.skip("while-loops just keeps going ...", () => {
    // act
    while (1 < 2) {
      console.log("Another lap in the loop");
    }
  });
});
describe("arrays", () => {
  it.skip("array keep values", () => {
    // arrange
    const array1 = [1, 2, 3, 4];
    const array2 = ["Marcus", "Eliza", "Obaid"];
    const array3 = ["Marcus", 49, true];
  });
  it("getting elements out of arrays", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid"];

    // act
    const firstElement = names[0];
    const secondElement = names[1];

    const length = names.length;
    const lastElement = names[names.length - 1];

    // assert
    assert.equal(firstElement, "Marcus");
    assert.equal(secondElement, "Eliza");
    assert.equal(lastElement, "Obaid");
    assert.equal(length, 3);
  });
  it("calling getAge for each age, (Doing things in the loop)", () => {
    // arrange
    const currentYear = 2022;
    const birthYears = [1972, 2022, 1980];

    // act
    for (let i = 0; i < birthYears.length; i++) {
      const age = getAge(birthYears[i], currentYear);

      console.log(
        `If you born in ${birthYears[i]} you are ${age} in ${currentYear}`
      );
    }
  });
  it("adding elements to array with push", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid"];
    assert.equal(names.length, 3);

    // act
    names.push("Arvid");

    //arrange
    assert.equal(names.length, 4);
    assert.equal(names[3], "Arvid");
  });
  it("removing elements from array with pop", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid", "Arvid"];
    assert.equal(names.length, 4);

    // act
    names.pop();

    // arrange
    assert.equal(names.length, 3);
    assert.equal(names[3], undefined);
  });
  it("removing elements from array using slice", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid", "Arvid"];
    assert.equal(names.length, 4);

    // act
    names.splice(0, 1);

    // arrange
    assert.equal(names.length, 3);
    assert.equal(names[0], "Eliza");
  });
  it("adding elements to an immutable array", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid"];
    assert.equal(names.length, 3);

    // act
    const newNames = [...names, "Arvid"];

    // arrange
    assert.equal(names.length, 3);
    assert.equal(newNames.length, 4);
  });
  it("filter an array - immutable", () => {
    // arrange
    const numbers = [10, 23, 1, 33, 8, 12];

    // act
    const lowNumbers = numbers.filter((x) => x > 10);

    // arrange
    assert.equal(lowNumbers.length, 3);
  });
});

describe("objects are for building things", () => {
  it("our first object - a human", () => {
    // act
    const person = {
      name: "Marcus",
      birthYear: 1972,
      isTeacher: true,
    };

    // assert
    assert.equal(person.name, "Marcus");
    assert.equal(person.birthYear, 1972);
    assert.equal(person.isTeacher, true);
  });
  it("get age for person", () => {
    // arrange
    const currentYear = 2022;
    const person = {
      name: "Marcus",
      birthYear: 1972,
      isTeacher: true,
    };

    // act
    const age = getAgeForPerson(person, currentYear);

    // assert
    assert.equal(age, 50);
  });
  it("a object with an array in it", () => {
    // act
    const person = {
      name: "Dirk",
      favmovies: ["KillBill", "Rambo", "StarWars"],
    };

    // assert
    // assert.equal(person.favmovies.length, 3);
    // assert.equal(person.favmovies[0], 'KillBill');
    // assert.equal(person.favmovies[person.favmovies.length-1],'StarWars');
    // assert.equal(...person.favmovies, 'KillBill Rambo StarWars');
    assert.equal(person.favmovies.length, 3);
    assert.equal(person.favmovies[0], "KillBill");
    assert.equal(person.favmovies[person.favmovies.length - 1], "StarWars");
    assert.deepEqual(person.favmovies, ["KillBill", "Rambo", "StarWars"]);
    assert.equal(person.favmovies[person.favmovies.length - 2], "Rambo");
  });
  it("a person has a list of favorite movies with releaseYears containing the Actors who played in those mo", () => {
    // act
    const person = {
      name: "People",
      favoriteMovies: [
        {
          title: "Star Wars IV",
          releaseYear: 1977,
          actors: ["Mark Hamill", "Harrison Ford", "Carrie Fischer"],
        },
        {
          title: "Star Wars V",
          releaseYear: 1980,
          actors: [
            "Mark Hamill",
            "Harrison Ford",
            "Carrie Fischer",
            "Billie Dee Williams",
          ],
        },
        {
          title: "Star Wars IX",
          releaseYear: 2017,
          actors: ["Adam Driver", "Oscar Isaac", "Hayden Christensen"],
        },
      ],
    };

    // assert
    assert.equal(person.favoriteMovies.length, 3);
    assert.equal(person.favoriteMovies[0].title, "Star Wars IV");
    assert.equal(person.favoriteMovies[2].releaseYear, 2017);
    assert.equal(person.favoriteMovies[1].actors[3], "Billie Dee Williams");
  });
});

describe("division", () => {
  it("4 divided with 2 is 2", () => {
    // act
    const result = divideIt(4, 2);

    // assert
    assert.equal(result, 2);
  });
  it('4 divided with 0 is ???', () => {
    // act
    const result = divideIt(4, 2);
 
       assert.throws(
      () => divideIt(4, 0),
      Error);
      assert.equal(result, 2);
  });
  it('4 divided with 0 should throw error', () => {
    // arrange
    try {
      // act
      const result = divideIt(4, 0);
  
    } catch (error) {
      // assert
      assert.notEqual(error, undefined);
      assert.equal(error.message, 'Please... No division by zero... I cannot cope with that. /Your computer');
    }
  });
  it.skip('throwing an error in a test will...', () => {

       const equal = (actual, expected) => {
        if(actual != expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
      }
      equal(4,2)
  });
});
 
    // assert
    // console.log(result);
