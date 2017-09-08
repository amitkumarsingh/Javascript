function linearSearch(arr , elem) {
    let len = arr.length;
    let i =0;
    for(i;i<len;i++){
        if(arr[i] === elem){
            return i;
        }
    }
    return -1;
}

let searchArray = [10,6,4,3,9,2];
let pos = linearSearch(searchArray , 12); 

if(pos !== -1){
    console.log('element found at position ' + pos);
} else {
    console.log('element not found');
}