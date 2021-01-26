/* 1. Determine the Big O 
a) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

Answer: O(1)

b) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

Answer: O(n)

-------------------------------------------------------------------------

2. Even or odd

What is the Big O of the following algorithm? Explain your answer.

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

Answer: O(1) because no matter the size of the input "value" the completion time will remain constant

-------------------------------------------------------------------------

3. Are you here?
What is the Big O of the following algorithm? Explain your answer.

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

Answer: 
O(nm) --> O(n^2)

-------------------------------------------------------------------------

4. Doubler
What is the Big O of the following algorithm? Explain your answer.

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

Answer: O(n) as the input increases, the output time increases linearly

-------------------------------------------------------------------------

5. Naive search
What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

Answer: O(n), each index is accessed once, so output is linear

-------------------------------------------------------------------------

6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

Answer: O(n^2) as the function loops multiple times through the array at each index

-------------------------------------------------------------------------

7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer.

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

Answer: This function returns the numbers in fibanacci sequence up to the nth (from "num") number. Runtime complexity is O(n) as the output scales linearly with the input.

-------------------------------------------------------------------------

8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer.

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

Answer: O(log(n)) as the data being searched is halved each time instead of searching through every index.

-------------------------------------------------------------------------

9. Random element
What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

Answer: O(1) because no matter the size of the input, the runtime remains constant

-------------------------------------------------------------------------

10. Who Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

Answer: This algorithm determines if a number is a prime number or not. Best case this algorithm is O(1), when the number is a fraction, less than two or divisible by two. Otherwise O(n) since input and output increase at the same rate

-------------------------------------------------------------------------
*/

//11. Tower of Hanoi

function hanoi(disks, from=0, via=2, to=1) {
  if (disks == 0) {

    return
  }
  hanoi(disks - 1, from, to, via)
  console.log('Move disk from ', from, ' to ', to)
  hanoi(disks - 1, via, from, to)
  return
}

hanoi(3)

/* 12. Iterative version
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

13. Recursive Big O
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

14. Iterative Big O
Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them. */