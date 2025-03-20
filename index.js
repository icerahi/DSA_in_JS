// O(n)

const persons = ["rahi", "imran", "hasan", "abir", "salman"];

const findPerson = (arr, person) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === person) {
      console.log("person found");
    }
  }
};

findPerson(persons, "abir");

//O(1)

const numbers = [1, 2, 3, 4, 5];
const findNumber = (arr, number) => {
  console.log(arr[number]);
};
findNumber(numbers, 3);

//O(n^2)
//quardratic time
function findPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]}, ${arr[j]}`);
    }
  }
}
const numbers_ = [1, 2, 3, 4, 5];
findPairs(numbers_);


//If we combine all the "O" operation it becomes O(n^2 + n)\
//O(n^2) is a dominant term
//"n" is a Non-dominant term
//So we remove the "non-dominant" term and we're only left with O(n^2)
//this way, we simplify our big O

//O(log n)