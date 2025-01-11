let arr=[3,4,52,41,30,2,4]
let arr2=[1,2,3,4,5,6]


function linearSearch(arr, el) {
    for (let i = 0; i < el.length; i++) {
        if (el[i] === x) {
            return i;
        }
    }
    return -1;
}


console.log(linearSearch(arr, 4)); 