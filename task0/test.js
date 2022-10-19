/*
Write a function/method that given an array of positive and negative numbers 
outputs another array with the position (1 - based) of numbers with opposite sign.
Example:

Given:
[2,9,-1,-2,-9]


Outputs:
[[1,4],[2,5]]

[1,4] are the positions of the 2,-2 respectively
[2,5] are the positions of the 9,-9 respectively

If a number has no matching pair just ignore it.
Try to do it in an optimal way.
*/

const getOppsiteSign = ((arr1) => {
    var index = 1;
    var ret = [];
    const numberTimeToExecute = parseInt((arr1.length / 2)) + 1;
    arr1.forEach((item) => {
      if(numberTimeToExecute === index) return;
      const formulaForOpposite = item * -1;   
      if(arr1.includes(formulaForOpposite))
      {    
        ret.push([index, arr1.indexOf(formulaForOpposite) +1]);        
      }
      index=index+1;    
    });
    return ret;
  });
  
  const arr = [2,9,-1,-2,-9];
  console.log(getOppsiteSign(arr));
  
  
  
  