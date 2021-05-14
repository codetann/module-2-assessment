/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//! //////////////// PROBLEM 1 ////////////////// !//
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition =
  "A version control system that takes snapshots of your code. Allowing you to save changes, revert changes, create branches for features, and many more.";

//! //////////////// PROBLEM 2 ////////////////// !//
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition =
  "An online tool that allows users to push their git changes to the cloud for storing and collaborating with others on the same code base.";

///////////////////////////////////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//! //////////////// PROBLEM 3 ////////////////// !//
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
  description:
    "Creates a git repository for you to start tracking changes to your code.",
  code: "git init",
};

//! //////////////// PROBLEM 4 ////////////////// !//
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
  description:
    "A command used to clone a repository from GitHub(or any other online tool that uses git) to a users computer, allowing the user to start working with that code base",
  code: "git clone [ - url - ]",
};

//! //////////////// PROBLEM 5 ////////////////// !//
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {
  description:
    "A command that lets a user see what changes have been staged and what have not",
  code: "git status",
};
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
  description:
    "A command that lets a user add files/changes to the staging area",
  code: "git add .",
};

//! //////////////// PROBLEM 5 ////////////////// !//
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
  description:
    "A command that lets a user save their changes to their local repository along with a message of what they changed/added",
  code: "git commit -m 'initial commit'",
};

//! //////////////// PROBLEM 5 ////////////////// !//
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
  description: "A command that lets a user push/send their changes to github",
  code: "git push -u origin main'",
};
