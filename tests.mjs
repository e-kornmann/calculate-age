import assert from 'assert';
import { getAge, getAgeGroup } from './index.mjs'

describe('age calculator', () => {
    it('someone born 1972 is 50 2022', () => {
        //act
        const result = getAge(1972, 2022);

        //assert
        assert.equal(result, 50);
    });

it('someone born 2021 is 1 2022', () => {
    // arrange
    // act
    const result = getAge(2021, 2022);

    // assert
    assert.equal(result, 1);
});

it('someone born 1983 is 39 2022', () => {
    // arrange
    // act
    const result = getAge(1983, 2022);

    // assert
    assert.equal(result, 39);
});

it('0-3 years old should be a toddler', () => {
      // arrange
      // act
      const result = getAgeGroup(0);
  
      // assert
      assert.equal(result, "toddler");
    });
it('4-12 years old should be a kid', () => {
    // arrange
    // act
    const result = getAgeGroup(5);

    // assert
    assert.equal(result, "kid");
  });
it('13-19 years old should be a teenager', () => {
    // arrange
    // act
    const result = getAgeGroup(19);
    
    // assert
    assert.equal(result, "teenager");
  });
it('20-39 years old should be a adult', () => {
    // arrange
    // act
    const result = getAgeGroup(20);
    
    // assert
     assert.equal(result, "adult");
  });
    it('above 39 years old ... you are just old', () => {
        // arrange
        // act
        const result = getAgeGroup(70);
    
        // assert
        assert.equal(result, "old");
      });
//specials
it('But 50 - that is prime age, my friend. PRIME. AGE.', () => {
    // arrange
    // act
    const result = getAgeGroup(50);
    
    // assert
    assert.equal(result, "prime");
    });
it('under 0 years old ... you are not born yet', () => {
    // arrange
    // act
    const result = getAgeGroup(-3);

    // assert
    assert.equal(result, "unborn");
  });
  it('above 100 years old ... you are verry old', () => {
    // arrange
    // act
    const result = getAgeGroup(120);

    // assert
    assert.equal(result, "verryold");
  });
  it('above 130 years old ... most likely not a human', () => {
    // arrange
    // act
    const result = getAgeGroup(130);

    // assert
    assert.equal(result, "nothuman");
  });


  });