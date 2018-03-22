// In classical object-oriented programming languages, a constructor is a special method used to initialize a newly created object once memory has been 
// allocated for it. In JavaScript, as almost everything is an object, we're most often interested in object constructors.

// Object constructors are used to create specific types of objects - both preparing the object for use and accepting arguments which a constructor can use 
// to set the values of member properties and methods when the object is first created.



// The three common ways to create new objects in JavaScript are as follows:


// Each of the following options will create a new empty object:
 
var newObject = {};
 
// or
// var newObject = Object.create( Object.prototype );
 
// or

// var newObject = new Object();

// There are then four ways in which keys and values can then be assigned to an object:

// ECMAScript 3 compatible approaches
 
// 1. Dot syntax
 
// Set properties

// newObject.someKey = "Hello World";
 
// Get properties

// var value = newObject.someKey;

 
// 2. Square bracket syntax
 
// Set properties
// newObject["someKey"] = "Hello World";
 
// Get properties
// var value = newObject["someKey"];

 
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
 
// 3. Object.defineProperty
 
// Set properties

Object.defineProperty( newObject, "someKey", {

    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true

});




// var defineProp = function ( obj, key, value ){

//   var config = {
//     value: value,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   };

//   Object.defineProp( obj, key, config );
// };

// newObject.defineProp();

console.log(newObject);










