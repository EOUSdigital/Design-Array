//TODO Module 3 - Lesson 02.02: Creating Arrays - Challenges

//TODO 🧩 Step 4: Mini-Challenge: Custom Task List Manager

//* 🎯 Scenario:

//  We are building a simple task manager. The user can:
//  1. Start with an empty task list.
//  2. Add 5 tasks dynamically (use .push()).
//  3. Remove the first task once it’s completed (use .shift())
//  4. Check if a specific task (like 'Submit report') is still pending (use .includes()).
//  5. Reverse the list to show latest tasks first
//  6. Print the final task list in a user-friendly way:
//      - 📝 Pending Tasks:
//          • Review code
//          • Update documentation
//          • Team meeting

//* ✅ Bonus:
//  • If 'Submit report' is missing, log:
//      - ⚠️  You forgot to submit the report!
//  • If it is there:
//      - ✅ Report submission is still on your list.


//! Solution

//* Step 1.

const taskManager = [];

//* Step 2.

taskManager.push('leading staff');
taskManager.push('strategic planning');
taskManager.push('decision-making');
taskManager.push('managing budgets');
taskManager.push('meetings and presentations');

//* Step 3.

taskManager.shift();

//* Step 4.

if (taskManager.includes('Submit report')) {
    console.log('✅ Report submission is still on your list.');
} else {
    console.log('⚠️  You forgot to submit the report!');
};

//* Step 5.

taskManager.reverse();

//* Step 6.

console.log('📝 Final checklist:');
taskManager.forEach(item => console.log('•', item));


//TODO 🧩 New Challenge: Logic-Driven Array Management

//* 🎯 Scenario: "Event Guest List Manager"
//  We are organizing a private event.
//  We will manage a guest list dynamically — but now, with logic-first thinking.

//* ✅ Requirements:
//  1. Start with an empty array called guestList.
//  2. Add 5 guest names using .push().
//  3. One guest cancels — remove the first guest using .shift().
//  4. A VIP guest arrives — add them to the front using .unshift().
//  5. Check if 'John Doe' is invited:
//      • If yes ➔ log: "✅ John Doe is on the guest list!"
//      • If no ➔ log: "❌ John Doe was not invited."
//  6. Reverse the list to show the latest updates first.
//  7. Print a final guest list like:
//      - 📝 Final Guest List:
//          • VIP Guest
//          • Guest 4
//          • Guest 3

//? 🧠 Quiz Challenge:
//  Answer these quick logic questions:
//  1. What method will you use to remove the first guest?
//  2. If you check .includes('John Doe'), what should your true and false messages be?
//  3. Why would reversing the guest list be useful in this context?

//? Quiz Solutions:
//  1. The method used to remove the first guest is .shift().
//  2. If we check includes('John Doe'), we must confirm that 'John Doe' is on the list, else 'John Doe' is not on the list, which means it is not a guest.
//  3. Reversing the guest list will help us review the latest update from the guest system.


//! Solution

//* Step 1.

const guestList = [];

//* Step 2.

guestList.push('Charles');
guestList.push('Dorothea');
guestList.push('Philip');
guestList.push('Elisabeth');
guestList.push('George');


//* Step 3.

guestList.shift();

//* Step 4.

guestList.unshift('William');

//* Step 5.

if (guestList.includes('John Doe')) {
    console.log("✅ John Doe is on the guest list!");
} else {
    console.log("❌ John Doe was not invited.");
};

//* Step 6.

guestList.reverse();

//* Step 7.

console.log('📝 Final Guest List:');
guestList.forEach(item => console.log('•', item));


//TODO Recap Quiz

//* Questions 1.

//  What does this return?

['x', 'y', 'z'].length;

//? Result: 3 - because .length will count the elements from array.

//* Question 2.

//  Which method adds an item to the start of an array?

//  a) .push()
//  b) .shift()
//  c) .unshift()
//  d) .pop()

//? Result: c - because unshift() method adds new elements to the beginning of an array.

//* Question 3.

//  What will this log?

const nums = [1, 2, 3];
nums.push(4);
console.log(nums);

//? Result: [1, 2, 3, 4] - because push  method adds new items to the end of an array, in this case '4'.

//* Question 4.

//  Which method removes the last item from an array?

//? Result: To remove the last item from an array, we will use .pop().

//* Question 5.

//  What will this log?

const colors = ['red', 'blue', 'green'];
colors.shift();
console.log(colors);

//? Result: ['blue', 'green'] - because shift() method removes the first item of an array.

//* Question 6.

//  How do you check if 'apple' exists in this array?

const fruits = ['banana', 'orange', 'apple'];

//? Result: fruits.includes('apple'); - To check if an  item exists in an array we will use includes(value). The method returns true if an array contains a specified value, otherwise returns false if the value is not found. The includes(value) method is case sensitive.

//* Question 7.

//  What does .reverse() do to an array?
//  Does it create a new array or modify the existing one?

//? Result: The .reverse(value) method will reverse the order of the elements in the given array. This method will not create a new array; it will modify the existing one.

//* Question 8.

//  What is the result of:

[].push('item');

//? Result: ['item'] - because .push('item') returns 1 because the array now has 1 element.

const arr = [];
let result = arr.push('item');

console.log(result);  // → 1  (the length)
console.log(arr);     // → ['item']


//* Question 9.

//  True or False:
//  .includes() is case sensitive.

//? Result: True - .includes(value) is case sensitive.

//* Question 10.

// We have this array:

const tasks = ['a', 'b', 'c', 'd'];

//  Which sequence will result in:

['x', 'b', 'c'];

//  a) tasks.push('x')
//  b) tasks[0] = 'x'
//  c) tasks.unshift('x')
//  d) tasks.reverse()

//? Result: b - because value 'a' will be replaced by 'x' at index 0.

