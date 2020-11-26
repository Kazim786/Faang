//First faang problem

const numbs = [1, 3, 7, 9, 2];
let target = 11



const finder = (arr) => 
{
  const index = []
  for(let i = 0; i < arr.length; i++)
  {
    for(let j = (i + 1); j < arr.length; j++)
    {
      if(arr[i] + arr[j] === target)
      {
        index.push(i, j)
      }
    }
  }
return index;
}

console.log(finder(numbs))

//IT WORKS :D

//Brute force solution