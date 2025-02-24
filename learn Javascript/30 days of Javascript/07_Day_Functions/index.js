console.log('LEVEL 1')

// Declare a function fullName and it print out your full name.
function fullName(){
    console.log('SHASWAT SINGH')
}

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName , lastName){
    return firstName+" "+lastName
}

console.log(fullName('wolf','gupta'))
// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(n1 , n2){
    return n1+n2
}
console.log(addNumbers(1,2))

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length , width ) => {
    return length*width
}

console.log(areaOfRectangle(2,3))

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length , width ) => {
    return 2*(length+width)
}

console.log(perimeterOfRectangle(2,3))

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const circumOfCircle = function(r){
    return  2 *Math.PI * r 
}

console.log(circumOfCircle(2))

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const weight = (mass, gravity = 9.81) => mass*gravity

console.log(weight(2))

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a,b,c){
    if (a>=b && a>=c) return a
    else if (b>=a && b>=c) return b
    return c
}

console.log(findMax(1,5,2))

console.log('LEVEL 2')

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadratic(a=0,b=0,c=0){
    let x1 = (-b + Math.sqrt(b*b - 4*a*c ))/ 2  * a
    
    let x2 = (-b - Math.sqrt(b*b - 4*a*c ))/ 2  * a

    return {x1,x2}

}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(){
    for (let el of arguments){
        // arguments is special keyword
        console.log(el)
    }
}

printArray([12,42,4335,3424,234,23432,423,4234])

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(){

    let now  = new Date()
    console.log(now.getDate()+'/'+now.getMonth()+"/"+now.getFullYear()+' '+now.getHours()+":"+now.getMinutes())
}
showDateTime()

// Declare a function name swapValues. This function swaps value of x to y.

function swapValues(a,b){
    let temp = a
    a = b
    b = temp
    return {a,b}
}

console.log(swapValues(2,55))

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr){
    let i = 0
    let j = arr.length - 1
    while (i<=j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i+=1
        j-=1
    }
    return arr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr){
    for (let i = 0 ;i<arr.length;i++){
        arr[i] = arr[i].toUpperCase()
    }
    return arr
}

console.log(capitalizeArray(['asda','apple','mango','car']))

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(arr,item){
    arr.push(item)
    return arr
}

console.log(addItem(['asda','apple','mango','car'],'pen'))

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(arr,index=-1){
    if (index > arr.length || index<0){
        return 'Index is not correct'
    }
    let start = arr.slice(0,index)
    let end = arr.slice(index+1,)
    return start.concat(end)
}

console.log(removeItem(['asda','apple','mango','car'],3))

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(n){
    let even = 0
    let odd =0
    for (let el=1;el<=n;el++){
        if (el%2==0){
            even += 1
        }
        else{
            odd += 1
        }
    }

    return {even,odd}
}

console.log(evensAndOdds(7))

// Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArgument() {
    let sum = 0
    for (let el of arguments) {
      sum += el
    }
    return sum
  }


console.log(sumOfArgument(2,3,3))
console.log(sumOfArgument(22,1,3))
console.log(sumOfArgument(2))

/*
Writ a function which generates a randomUserIp.

Write a function which generates a randomMacAddress

Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'
Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE
Exercises: Level 3
Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)
Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

Write a function arrayOfRgbColors which return any number of RGB colors in an array.

Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

Call your function isEmpty, it takes a parameter and it checks if it is empty or not

Call your function sum, it takes any number of arguments and it returns the sum.

Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'
Write a function called isPrime, which checks if a number is prime number.

Write a functions which checks if all items are unique in the array.

Write a function which checks if all the items of the array are the same data type.

JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

[(1, 4, 5, 7, 9, 8, 0)]
*/
// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

let sevenRandomNumbers = () => {
    let i= 0
    let randomArray = []
    while (i<7){
        let rand = Math.floor(Math.random()*10)
        
        if ()
    }
}
