function bigSorting(unsorted) {
    // Write your code here
    let array = [];


    for (let i = 0; i < unsorted.length; i++) {
        //convert array elements 'unsorted[i]' to BigInt to accept large numbers.
        let num = BigInt(unsorted[i]);
        //add the converted elements to a new array 'array' using the push() method.
        array.push(num)
    }


    //sort the array in numerical/ascending order with a double for loop.
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }


    //return the sorted array.
    return array


}
