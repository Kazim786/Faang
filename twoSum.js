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

//Brute force solution^^

//Opimized version

const finder = (arr, t) => {
    const numsMap = {};
    for(let i = 0; i < numsMap.length; i++)
    {
        const currentMapVal = numsMap[arr[i]]
        if(currentMapVal >= 0)
        {
            return 
        }
    }
}

//Find most recent and oldest tweet





const array = [
  {
    tweet: "hi",
    date: 2012
  },
  {
    tweet: "UFC",
    date: 2014
  },
  {
    tweet: "IM A BIG FAN",
    date: 2020
  }
]

// console.log(array[0].tweet)

const oldestAndRecent = (arr) => {
  oldest = 2021
  recent = 0
  let datesStored = []
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i].date < oldest)
    {
      oldest = arr[i].date;
      
      
    }
    if(arr[i].date > recent)
    {
      recent = arr[i].date;
    }
  }
      datesStored.push(oldest)
      datesStored.push(recent)

      return datesStored
  
}
//arr[i].date > recent

console.log(oldestAndRecent(array))