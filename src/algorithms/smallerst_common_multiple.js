function gcd(smallerNum, greaterNum){
    if (smallerNum === 0 && greaterNum === 0) {
        return 0;
    }

    smallerNum = Math.abs(smallerNum);

    greaterNum = Math.abs(greaterNum);

    while(smallerNum){
        let nextSmallerNum = greaterNum % smallerNum;
        greaterNum = smallerNum;
        smallerNum = nextSmallerNum;
    }

    return greaterNum;
}

function lcm(a, b) {
    return Math.abs(a) * Math.abs(b) / gcd(a, b);
}

function smallestCommons(arr) {
    let smallerNum = arr[0];
    let greaterNum = arr[1];

    if (smallerNum > greaterNum) {
        let temp = greaterNum;
        greaterNum = smallerNum;
        smallerNum = temp;
    }

    let range = Array.from({ length: (greaterNum - smallerNum) + 1}, (v, k) => smallerNum + k);

    return range.reduce((a, b) => lcm(a, b));
}


smallestCommons([1,5]);

// TEST CASES
// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.