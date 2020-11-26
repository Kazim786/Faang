//First faang problem

const numbs = [1, 3, 7, 9, 3];
let target = 11



const finder = (arr, t) => 
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
      if(arr[i] + arr[j] === t)
      {
        index.push(i, j)
        return index
      }
     
    }
  }
return null;
}

console.log(finder(numbs, target))

//IT WORKS :D

//Brute force solution