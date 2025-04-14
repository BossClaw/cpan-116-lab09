// CPAN 116 LAB 9 – ARRAYS

// ArrayUtilities Class

// [X] Use a class called ArrayUtilities that already holds a method for adding up the elements in an array.
//     [X] This method is created while demonstrating arrays in the lesson.
//     [X] This method is called totalOfElements.
//     [X] This method takes an array and size as parameters and returns the total of the values in the array.

// [*] Make a method to fill the array indexes with elements.
//     [X] This method takes an array of integers and size of array as a parameter.
//     [X] Call this method as insertElement.
//     [X] This method returns an array.
//     [*] To pass an array as a parameter, use the square bracket notation after the data type, EG
//          ▪ to pass an array called myArray as a parameter: Integer myArray[].
//          ▪ to write the return type as an array: Integer[]
//          ▪ to write a return statement: Return myArray

//     [X] ▪ use a For loop to ask the user for numbers and fill the array with them.
//     [X] • Make a method to print the elements in the array.
//          [X] This method takes an array of integers and size of array as a parameter.
//          [X] Use a For loop to iterate every index and display the element stored at the specific index/subscript.

// [X] In the main method, do the following:
//      [X] Declare an array and set the size to user input.
//      [X] Call a method of ArrayUtilities class to fill the array with integers.
//      [*] Print the array by calling another method of ArrayUtilities class.
//      [*] Call a method of ArrayUtilities class to print the sum of the numbers in an array.

// [X] Match the sample run output.

// REQUIRED FOR NODE.JS USER INPUT VIA CLI
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// ===========================================================================================
// ARRAYUTILITIES CLASS

class ArrayUtilities {
	// METHOD TO FILL THE ARRAY WITH USER INPUT
	static insertElement(size, callback) {
		// INIT ARR AND INDEX
		let myArray = [];
		let idx = 0;

		// WORKAROUND FOR NODE.JS TO LOOP AND GET USER INPUT
		const ask = () => {
			// KEEP ASKING IF IDX IS LESS THAN SIZE
			if (idx < size) {
				rl.question(`Enter number ${idx + 1}: `, (input) => {
					// V2DO - FORCE NUMERICAL INPUT ONLY
					if (isNaN(input)) {
						console.log(` !!! Received input ${input} wasn't a number! Please try again.`);
					} else {
						myArray.push(parseInt(input));
						idx++;
					}
					ask();
				});
			} else {
				// ONCE INPUT IS FINISHED, CALL THE CALLBACK FUNCTION TO FINISH LAB
				console.log('');
				callback(myArray);
			}
		};

		// RUN THE INPUT LOOP
		ask();
	}

	// METHOD TO PRINT THE ARRAY ELEMENTS
	static printArray(myArray, arr_length) {
		console.log(`Elements in array(${arr_length}):`);
		for (let i = 0; i < arr_length; i++) {
			//console.log(`   myArray[${i}] ${myArray[i]}`);
			console.log(myArray[i]);
		}
	}

	// METHOD TO RETURN THE TOTAL OF ELEMENTS
	static totalOfElements(myArray) {
		return myArray.reduce((sum, num) => sum + num, 0).toFixed(1);
	}
}

// ===============================================================================
// MAIN METHOD / FUNC

function main() {
	// GET USER INPUT FOR SIZE OF ARRAY
	// V2DO - ENSURE VALUE IS AT LEAST 1
	// V2DO - LIMIT TO SOMETHING 'REALISTIC' EG: NOT 100,000 :D
	rl.question('Enter the size of the array: ', (answer) => {
		const size = parseInt(answer);

		// CALL ARRAY UTILITIES FUNCTION WITH SIZE & ARRAY TO LOOP AND GET INPUT
		// NOTE - BECAUSE OF WAITING FOR USER INPUT LOOP, THE FUNCTION CALLS A CALLBAKC FUNC
		// AND PASSES retArray TO THAT FUNCTION TO THEN SET myArray AND FINISH THE LAB
		ArrayUtilities.insertElement(size, (retArray) => {
			let myArray = retArray;

			// ONCE INPUT FUNC IS FINISHED, PRINT THE RETURNED myARRAY
			ArrayUtilities.printArray(myArray, myArray.length);

			// GET THE SUM OF THE ARRAY VALS
			const sum = ArrayUtilities.totalOfElements(myArray);
			console.log(`Sum of array elements: ${sum}`);

			// DISPOSE OF NODE READLINE
			rl.close();
		});
	});
}

// ===============================================================================
// CALL THE MAIN FUNC TO RUN IT

main();
