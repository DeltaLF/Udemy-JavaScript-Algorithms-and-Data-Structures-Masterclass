
const capitalizeFirst = (arr:string[],index:number=0):string[] => {
    if( index > arr.length - 1) return arr;
    // handle string
    if( arr[index].length > 0){
        // mutate the original array
        arr[index] = arr[index][0].toUpperCase().concat(arr[index].slice(1));
    }
    return capitalizeFirst(arr, index + 1);
};

export {capitalizeFirst};
