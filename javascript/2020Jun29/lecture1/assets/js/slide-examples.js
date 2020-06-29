let threeIsGreaterThanTwoAndSixIsEqualToSix = 3 > 2 && 6 ==6;
let threeIsGreaterThanTwoAndSixIsEqualToSeven = 3 > 2 && 6 == 7;

let threeIsGreaterThanTwoOrSixIsEqualToSix = 3 > 2 || 6 == 6;
let threeIsGreaterThanTwoOrSixIsEqualToSeven = 3 > 2 || 6 == 7;
let threeIsLessThanTwoOrSixIsNotEqualToSix = 3 < 2 || 6 != 5;

let notThreeIsLessThanTwoOrSixIsNotEqualToSix = !( 3 < 2 || 6 != 6);
let notThreeIsGreaterThanTwoAndSixIsEqualToSix = !( 3>2 && 6==6);

console.log("threeIsGreaterThanTwoAndSixIsEqualToSix = " + threeIsGreaterThanTwoAndSixIsEqualToSix);
console.log("threeIsGreaterThanTwoAndSixIsEqualToSeven = " + threeIsGreaterThanTwoAndSixIsEqualToSeven);

console.log("threeIsGreaterThanTwoOrSixIsEqualToSix = " + threeIsGreaterThanTwoOrSixIsEqualToSix)
console.log("threeIsGreaterThanTwoOrSixIsEqualToSeven = " + threeIsGreaterThanTwoOrSixIsEqualToSeven)
console.log("threeIsLessThanTwoOrSixIsNotEqualToSix = " + threeIsLessThanTwoOrSixIsNotEqualToSix)

console.log("notThreeIsLessThanTwoOrSixIsNotEqualToSix = " + notThreeIsLessThanTwoOrSixIsNotEqualToSix)
console.log("notThreeIsGreaterThanTwoAndSixIsEqualToSix = " + notThreeIsGreaterThanTwoAndSixIsEqualToSix)
