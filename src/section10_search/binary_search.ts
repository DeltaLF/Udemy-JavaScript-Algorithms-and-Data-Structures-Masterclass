
const binarySearch = (arr:number[], target:number):number =>{
    let left = 0;
    let right = arr.length -1;
    while(left <= right ){
        let middle = Math.floor((left + right)/2);
        if( target === arr[middle] ){
            return middle;
        }
        if( target > arr[middle] ){
            left = middle + 1;
        }else{
            right = middle - 1;
        }
    }
    return -1;
}

export { binarySearch };