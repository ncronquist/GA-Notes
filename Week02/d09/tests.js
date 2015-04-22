// How to write tests
//
// test constructor

// If you need to test a function; make sure it is a function first
assert.equal(typeof(myCar.start), 'function', 'there is not start() function');

// If the function is supposed to return a value; make sure that value is the
// correct type
assert.equal(typeof(myCar.start()),'boolean', 'Start function does not return a boolean');



// At the end of each set of tests; run success function
success();
