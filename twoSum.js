//First faang problem

const numbs = [1, 3, 7, 9, 2];
let target = 11



const finder = (arr) => 
{
  const index = []
    if(arr.length === 0 || arr.length === 1)
    {
        alert("Array does not fit constraint")
    }



  for(let i = 0; i < arr.length; i++)
  {
    for(let j = (i + 1); j < arr.length; j++)
    {
      if(arr[i] + arr[j] === target)
      {
        index.push(i, j)
      }
      else 
      {
        alert("No 2 numbers fit the constraint")
      }
    }
  }
return index;
}

console.log(finder(numbs))

//IT WORKS :D

//Brute force solution