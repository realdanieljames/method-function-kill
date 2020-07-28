/******************
 * YOUR CODE HERE *
 ******************/

//-----------------------------------------------------------------------//
//-----------------------------------------------------------------------//
/**************
 * NEW PERSON *
 **************/

const newPerson = function (firstName = 'Anonymous', lastName = 'Person', age, married = false) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    married: married,

    
    goingOn: function () {
      let showAge = this.age + 1
      return showAge
    },


    ageUp: function () {
      this.age = this.age + 1
    },


    getFullName: function () {
      return `${this.firstName} ${this.lastName}`
    },


    marry: function (marryToPersonName) {
      //    sets the given person's married status to married
      marryToPersonName.married = true

      //    sets the person's spouseName to be the full name of the given person
      this.spouseName = marryToPersonName.getFullName(marryToPersonName)

      //     sets the given person's spouseName to be the full name of the original person
      marryToPersonName.spouseName = this.getFullName(this)

      //    sets the person's married status to married
      this.married = true
    },

    divorce : function (anotherPerson){

      //    ✓ sets the person's marital status to not married
      this.married = false
      
      //    ✓ sets the marital status of the given person to not married
      anotherPerson.married = false
      
      //      ✓ removes the person's spouseName property entirely
      delete this.spouseName
      delete anotherPerson.spouseName

    },

  }
}

//-----------------------------------------------------------------------//
//-----------------------------------------------------------------------//



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
