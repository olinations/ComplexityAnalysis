/* ================ COMPLEXITY ANALYSIS REVIEW ================
 * For all functions here, please identify the time complexity
 * Extra credit:   List the patterns that you see across various 
 *                 time complexities and identify how consistent
 *                 these trends are.
 * Nightmare Mode: Consider if/ how you could refactor the code 
 *                 to have a lower time complexity
*/

// --------------- Problem 1 ---------------

var doSomething = function(){
  for(var i = 0; i < n; i++){
    // do something here
  }
  for(var j = 0; j < n; j++){
    // do something here
  }
}

// How many iterations does the first loop go through?
  // n 
// How many iterations does the second loop go through?
  // n
// What's the time complexity?
  // Linear.  There are two for loops, but they are not nested
  // within each other-- this creates a time complexity of O(2n),
  // but is still classified as linear.


// --------------- Problem 2 ---------------

var nestedLoops = function(){
  for(var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
      // do something
    }
  }
}

// How many iterations does the first loop go through?
  // n
// How many iterations does the second loop go through?
  // n
// What's the time complexity?
  // n squared (polynomial/ quadratic)
  // since the loops are nested, the inner loop goes through
  // n iterations n times, which is polynomial.


// --------------- Problem 3 ---------------

var retrieve = function(key, array){
  var hash = 0;
  for(var i = 0; i < key.length; i++){
    hash = (hash + Math.pow(i, hash)) % array.length;
  }
  return array[hash];
}

// What's the time complexity?
  // Linear.
  // The number of iterations the for loops executes 
  // is dependent on the length of key


/* Perhaps take a break here to go through complexityApplication.js */



// --------------- Problem 4 ---------------

Array.prototype.contains = function(target){
  for(var i = 0; i < this.length; i++){
    if(this[i] === target){
      return true;
    }
  }
  return false;
}

// What's the time complexity when used on unsorted arrays?
              // Linear
//            What about on sorted arrays?
              // Logarithmic because you can start in the middle
              // and keep checking the middles
//            How about overall?
              // Array.prototype.contains as defined above
              // has a linear time complexity

// How does that function compare to this one:

var contains = function(array, target){
  if(array.indexOf(target) !== -1){
    return true;
  }
  return false;
}

  // They're the same-- this code might look nicer, but the 
  // implementation fo indexOf still requires iterating over 
  // every element in the array to find the next index.
  // This function is also a linear time function.

// --------------- Problem 5 ---------------

var findDuplicates = function(array){
  var duplicates = [];
  for (var i = 0; i < array.length; i++){
    if (array.indexOf(array[i], i + 1) !== -1){
      if(duplicates.indexOf(array[i]) === -1){
        duplicates.push(array[i]);
      }
    }
  }
  return duplicates;
}

// What's the time complexity?


// --------------- Problem 6 ---------------

var findRepeats = function(array){
  var set = {};
  var repeats = [];
  for(var i = 0; i < array.length; i++){
    if( !(array[i] in set) ){
      set[array[i]] = 1;
    } else {
      set[array[i]]++;
    }
  }
  return results;
}

// How does this compare to problem 5 in implementation 
//                          and algorithmic complexity?
// What's the time complexity?


// --------------- Problem 7 ---------------

var fibonacci = function(n){
  return n > 2 ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
}

// What's the time complexity?
// What are a few ways you could improve upon this function's complexity?


// --------------- Problem 8 ---------------

var nFibonacci = function(n, x, prev){
  x = x || 1;
  if(n > 1){
    return nFibonacci(n - 1, x + prev|| 0, x);
  }
  return x;
}

// What's the time complexity?


// --------------- Problem 9 ---------------

var bubbleSort = function(array){
  var continueSorting = true;

  while(continueSorting){
    continueSorting = false
    for(var i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        continueSorting = true;
      }
    }
  }
  
  return array;
}


// Do I really need to state the question again?

// Nightmare mode:  Look up other sorting algorithms
//                  and compare their time complexity/ efficiency.
//                  Find anything interesting?
