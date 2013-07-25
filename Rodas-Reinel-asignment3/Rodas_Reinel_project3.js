alert("JavaScript works!");

var name = "John";
var nickName = "\"Death Touch\"";
var numberOfGuards = 20;
var manyGuards = true;

console.log("My name is " + name + ".");
console.log("but they call me " + nickName + "\nSometimes I talk to myself.");
console.log("My job is to eradicate corruption in our kingdom, \n but I never imagine one day my target would be the King.");
console.log("I have counted about " + numberOfGuards + " guards outside this castle."); 

// conditionals

if (manyGuards === true) {
  
	if (numberOfGuards <= 20) {
		// run this code if both conditions are true
		// math process
		// output
		console.log("There are more guards that I expected, this means have to kill " + numberOfGuards*1 + " in order to be able to pass to the main chamber.");
		console.log("This is going to be hard, there is going to be trouble over here. I have to think of something quick...") 
		} else {
		// run this code if the first conditions is true and the second is false
		// output
		console.log("This is going to be a \"Pice of cake\".")
		}
} else {
	if ( nickName === "Poor baby") {
		console.log("That is a really weird nickname the guy at the bar last night said to me while I was drinking my beer. \n I'm sorry, I just got a flash back from last night. I will continue with my story." )
	} else {
		console.log("Not, that is not my nickname, my nickname is " + nickName + ".");
		console.log ("I'm sorry, I just got a flash back of an idiot thinking I was someone else last night at the bar. Now, I will continue with my story.")
		}
};

