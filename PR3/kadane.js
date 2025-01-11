// Find the Max sum using Kadane's algorithm....

// Array = [-2,1,12,9,7,5];     output = 34


function maxsum(arr){

    let sum = 0;
    let maxsum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        
        sum = sum + arr[i];

        if(sum > maxsum)
        {
            maxsum = sum;
        }
        if(sum < 0)
        {
            sum = 0;
        }
    }

    return maxsum;
}

console.log(maxsum([-2,1,12,9,7,5]));
