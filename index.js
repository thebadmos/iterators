/*
Use the following object for this set of questions:
var users = [
  {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
];

*/

/*1.Write a function called printEmails which console.log's each email for the users.*/
function printEmails(){
    users.forEach(function(e){
    console.log(e.email);
    });
    };

/*2.Write a function called printHobbies which console.log's each hobby for each user.*/
function printHobbies(){
    users.map((e) => {
        return e.hobbies.forEach((hobby) => {
            console.log(hobby);
        })
    });
};

/*3.Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in*/
function findHometownByState(state){
    var myUser = users.filter((e) => {
        return e.hometown.state == state;
    });
    return myUser[0];
};

/*4.Write a function called allLanguages which returns an array of all of the unique values*/
function allLanguages(){
    var lang = [];
    users.map((el) => {
        return el.favoriteLanguages.forEach((langCode) => {
            lang.push(langCode);
        })
    });
    var filLang = lang.filter((val, index, array) => {
        return array.indexOf(val) === index;
    });
    return filLang;
};



/*5.Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in*/
function hasFavoriteEditor(favEdit){
    var Editor = users.map((val) => {
        return val.favoriteEditor;
    });
    var checkEdit = Editor.some((el) => {
        return el.toLowerCase() == favEdit.toLowerCase();
    });;
    return checkEdit;
};

/*6. Write a function called findByUsername which takes in a string and returns an object in the users array that has that username*/
function findByUsername(str){
    var findUser = users.filter((user) => {
        return user.username.toLowerCase() === str.toLowerCase();
    });
    return findUser;
};

/*7. Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).*/


/*8.Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function). */

function removeVowels(str){
  var transStr = str.split("");
  let returnedArr = [];
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  transStr.reduce((acc, next, index) => {
      if(vowels.indexOf(next) == -1){
          returnedArr.push(next);
      }
  }, []);
  return returnedArr;
}