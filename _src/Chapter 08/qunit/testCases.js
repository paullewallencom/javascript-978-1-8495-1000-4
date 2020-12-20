/*
test('isOdd()', function() {
	ok(isOdd(1), 'One is an odd number');
	ok(isOdd(7), 'Seven is an odd number');
	ok(isOdd(-7), 'Negative seven is an odd number');


	// tests that fail
	ok(isOdd(2), 'So is two');
	ok(isOdd(-4), 'So is negative four');
	ok(isOdd(0), 'Zero is an even number');
	
})
*/

test('assertions', function() {
	equals(5,5, 'five equals to five');
	equals(3,5, 'three is not equals to five');
})
