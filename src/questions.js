var selectElementsStartingWithA = function(array) {
    return startWithA = array.filter((item) => item.startsWith("a"));
}

var selectElementsStartingWithVowel = function(array) {
    // return startWithVowel = array.filter((item) => {if (item.charAt(0) == "a"||item.charAt(0) == "i" || item.charAt(0) == "o"){
    //     return array;
    // }}
    return (array.filter(word => word.charAt(0).match("[aeiouy]")));
}

var removeNullElements = function(array) {
   return array.filter((val) => val !== null);
}

var removeNullAndFalseElements = function(array) {
    return array.filter((val) => val !== null && val !== false);
}

var reverseWordsInArray = function(array) {
    return array.map(item => item.split('').reverse().join(''));
}

var everyPossiblePair = function(array) {
    const result = array.map(item => item)
    console.log(result)
    return result;
}

var allElementsExceptFirstThree = function(array) {
    
    return array.filter(item => array.indexOf(item)>2)
}

var addElementToBeginning = function(array, element) {
    return 'Write your method here';
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
