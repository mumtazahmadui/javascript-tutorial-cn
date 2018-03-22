// From Addy Osmani's design patterns:
// "We would simply define all of our functions and variables in the private scope
// and return an anonymous object with pointers to the private functionality we wished to reveal as public."

// The benefit of this pattern is we can encapsulate as much functionality as possible. 
// It is immediately invoked 
var ARevealingModule = (function () {
  // variables in here are private
  // Calling ARevealingModule.name will return undefined
  var name;

  function publicGetName() {
    return name;
  }

  function publicSetName(newName) {
    name = newName;
  }

  function privateDescribeName() {
    console.log("Name: " + name)
  }
  // Returning methods will make them public
  // 'describeName' has not been return therefore it is inaccessible
  // The naming inside the module does not matter, the public accessor is the key in the return object below. 
  return {
    getName: publicGetName,
    setName: publicSetName
  }
})() // It is immediately invoked 

// What is accessible?:
// ARevealingModule.getName === function
// ARevealingModule.setName === function

// ARevealingModule.privateDescribeName === undefined
// ARevealingModule.publicGetName === undefined
// ARevealingModule.publicSetName === undefined


// Real-world examples: 
// Backbone.Memento by Derick Bailey - https://github.com/derickbailey/backbone.memento/blob/master/backbone.memento.js