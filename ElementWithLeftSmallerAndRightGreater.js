const ElementWithLeftSmallerAndRightGreater = (arr, n) => {
    let result = -1; //0(1)
    let firstElement = arr[0]; //0(1)
    let lastElement = arr[n -1]; //0(1)
    let minArr = []; //0(n)
    let maxarr = []; //0(n)

    //we are starting with first element and comparing if other elements are greater than that
    //0(1) assignment of i in loop
    for(let i = 0; i < n; i++){ //0(n) for loop
        if(arr[i] > firstElement){ //0(1)
            firstElement = arr[i]; //0(1)
        }
        maxarr.push(firstElement); //0(1)
    }
    //we are starting with last element and comparing if other elements are smaller than that
    //0(1) assignment of i in loop
    for(let i = n -1; i >= 0; i--){ //0(n) for loop
        if(arr[i] < lastElement){ //0(1)
            lastElement = arr[i]; //0(1)
        }
        minArr.unshift(lastElement); //0(n)
    }

    //0(1) assignment of i in loop
    for(let i = 0; i < n; i++){ //0(n) for loop
        //here we are checking the element shouldnt be the first element in the list neither last one
        if(i !== 0 && i !== arr.length -1){ //0(1)
            if(minArr[i] === maxarr[i]){ //0(1)
                result = maxarr[i]; //0(1)
                break;
            }
        }
    }
    return result;
}
console.log(ElementWithLeftSmallerAndRightGreater([4,3,2,7,8,9], 6)); // 7
console.log(ElementWithLeftSmallerAndRightGreater([ 5, 1, 4, 3, 6, 8, 10, 7, 9 ], 9)); // 6
console.log(ElementWithLeftSmallerAndRightGreater([ 5, 1, 4, 4 ], 4)); // -1
// Time complexity: 0(n^2)
// Space complexity: 0(n)