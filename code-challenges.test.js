// UNIT 4 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.


// describe(functionName, () => {
//   it("what it returns", () => {
//     expect(functionName().toEqual("expected output"))
//   })
// })


// a) Create a test with expect statements for each of the variables provided.


// Create a test where the input is 
describe("fibonacciGenerator", () => {
  const fibonacciLength1 = 6
  const fibonacciLength2 = 10
  it("returns an array of the fibonacci sequence where the length of the array is defined by the argument.", () => {
    expect(fibonacciGenerator(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciGenerator(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Test ran: good failure
// Test ran: failure TypeError: fibonacciGenerator(...).toEqual is not a function
// Solution: expect statement parenthesis encompassing the whole statement instead of just the function invocation
// Test ran: Pass



const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
const fibonacciGenerator = (number) => {
  let fibonacciArray=[1, 1]
  let i = 2
  while (fibonacciArray.length < number){
    fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i-2])
  i++
  }
  return fibonacciArray
}

// Pseudo code:
// Create a test to see if a function that generates a fibonacci sequence will pass
// Test returned good failure
// Create a function to take in a number and return an array of that length containing a fibonacci sequence
// Create an array with the starting two numbers.
// Set a variable for the index equal to 2
// While the length of the fibonacci array is less than the argument
// Push the second to last and last number in the array added together to the array
// Return the fibonacciArray

// I'm never quite sure how much help I'm allowed on these. I was not able to do it from memory. I researched how to use a loop to set a conditional and stumbled upon a while loop after trying a for loop and .map with no success. I ran into some issues with my test. It kept failing even though my function was logging properly. I asked chat gpt to explain my error code and it came back saying .toEquals needs to be used directly on the expect statement. I then realized I had a set of parenthesis around the whole statement instead of around just the expect statement. After fixing this issue my test passed.


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("voteTally", () => {
  const votes1 = { upVotes: 13, downVotes: 2 }
  const votes2 = { upVotes: 2, downVotes: 33 }
  it("returns the total value of votes", () => {
    expect(voteTally(votes1)).toEqual(11)
    expect(voteTally(votes2)).toEqual(-31)
  })
})
// Test ran: good failure
// Test ran: NaN
//  Soultion: destructure both the keys and the values
// Test ran: pass

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
const voteTally = (object) => {
  const { upVotes: upVotesValue,  downVotes: downVotesValue } = object
  totalVotes = upVotesValue - downVotesValue;
  return totalVotes
}

// Pseudo code:
// Create a function called voteTally that takes in an object and returns a total sum
// Destructure object to acces the value of each key value pair
// Subtract the value the downvotes from the upvotes
// Return the total votes
// Create a function called voteTally that takes an object with the key value pairs being upvotes and downvotes returning the total vote count.

// I racked my brain for a bit on this one. I remembered the spread operator then realized I wanted to destructure. I get those mixed up. I destructured but couldn't get it to work at first. Realized I needed to destructure with the value as well. 