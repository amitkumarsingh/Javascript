function binarySearch(arr, elem) {
    let mid = Math.floor(arr.length / 2);
    
    if (arr[mid] === elem) {
        return mid;
    } else if (arr[mid] < elem && arr.length > 1) {
        return binarySearch(arr.splice(mid, Number.MAX_VALUE), elem);
    } else if (arr[mid] > elem && arr.length > 1) {
        return binarySearch(arr.splice(0, mid), elem);
    } else {
        return -1;
    }
    
}

let a = [10,12,14,16,18,20],
    pos = binarySearch(a, 16);

if(pos !== -1){
    console.log('element found at position ' + pos);
} else {
    console.log('element not found');
}