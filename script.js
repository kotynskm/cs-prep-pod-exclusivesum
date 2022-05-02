function exclusiveSum(arr) {

    // call map on arr, pass in the element that is being iterated over and the index, we will use the index value inside the callback function
    const resultArr = arr.map((element,index) => {
        // call reduce on arr, pass in initialVal and currentVal, then compare if index in map is the same index as in reduce, if it is then skip that number - sum all others
        const sumToPush = arr.reduce((initialValue,currentValue,rIndex) => {
            // if rIndex !== index, sum the nums
            if(rIndex !== index){
                initialValue += currentValue;
                
            }
            return initialValue;
        },0);
        return sumToPush;
    });
    return resultArr;
}
