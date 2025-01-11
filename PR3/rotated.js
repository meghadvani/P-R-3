function rotatedbinary(arr, el) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === el) {
            return mid;
        }

        if (arr[left] <= arr[mid]) {
            if (el >= arr[left] && el < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (el > arr[mid] && el <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}


console.log(rotatedbinary([5,6,1,2,3,4],6));