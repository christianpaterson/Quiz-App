const questions = [
    {
        question: "Excited for this quiz?",
        //choices: [ "Nope", "Let's do it", "I quit", "I'm scared" ],
        a: "Nope",
        b: "Let's do it",
        c: "I quit",
        d: "I'm scared",
        correct: "b"
    },
    {
        question: "Which of the following values is considered falsy in JavaScript?",
        a: "{}",
        b: "[]",
        c: "'0'",
        d: "''",
        correct: "d"
    },
    {
        question: "Which of the following is NOT true of JavaScript strings?",
        a: "They are objects",
        b: "They are iterable, and for..of works on them",
        c: "They are array-like, with numeric indexes and length",
        d: "JavaScript creates wrapper objects to perform methods on them",
        correct: "a"
    },
    {
        question: "Which of the following is NOT true about Number() conversions in JavaScript?",
        a: "null is converted 0",
        b: "[99] is converted to 99",
        c: "true is converted to 1",
        d: "undefined is converted to 0",
        correct: "d"
    },
    {
        question: "Which of the following expressions evaluate to true in JavaScript?",
        a: "'toString' in Object;",
        b: "'11' > '3';",
        c: "'one' < 3;",
        d: "NaN === Nan;",
        correct: "a"
    },
    {
        question: "Which is true when using reduce without it's optional 2nd argument?",
        a: "The callbackFn's accumulator is set to the initialValue argument",
        b: "The callbackFn starts executing with the 1st value in the array as currentValue",
        c: "The callbackFn's accumulator argument is set to the array's 1st value",
        d: "You can run it on an empty array",
        correct: "c"
    },
    {
        question: "Which of the following is NOT true about functions in JavaScript?",
        a: "JS functions can be stored in object properties AND array elements",
        b: "With closures, lexical scope refers to the function definition scope rather than the function invocation scope",
        c: "A closure gives you access to an inner function's scope from an outer function.",
        d: "let a = [x => x*x, 2]; console.log(a[0](a[1])); ==> 4",
        correct: "c"
    },
    {
        question: "Which of the following is NOT true about Node.js?",
        a: "It can interact with the OS",
        b: "It can manipulate HTML & CSS",
        c: "It can access the local file system",
        d: "It can be run outside of a browser environment",
        correct: "b"
    },
    {
        question: "Which of the following is NOT true of OOP in JavaScript?",
        a: "Access control, abstracting away internal details, and having methods defined as properties within an object are all examples of encapsulation",
        b: "JavaScript does not support the creation of static methods directly within a class declaration",
        c: "JavaScript objects use prototypal inheritance, meaning they inherit directly from other objects (their prototypes)",
        d: "Polymorphism allows objects of different classes to be treated as instances of a common interface or shared set of methods, which may or may not be defined within a superclass",
        correct: "b"
    },
    {
        question: "Which of the following is NOT true about JavaScript in general?",
        a: "With the addition of Worker Threads, typically single-threaded JS becomes fully parallel",
        b: "JavaScript supports asynchronous programming with callback functions, promises, asynch, and await",
        c: "JS has APIs for working with text, dates, regular expressions, standard data structures, and the DOM",
        d: "Executed JavaScript creates an execution context that consists of a Variable Environment and a Thread of Execution",
        correct: "a"
    }
];