//alert("JavaScript works!");

// Reinel Rodas 
// SDI 1307
// Project 3

var name = "John";
var nickName = "\"Death Touch\"";
var numberOfGuards = 20;
var manyGuards = true;
var weapons = ["dagger","sword","crossbow" ];
// My first outputs

console.log("My name is " + name + ".");
console.log("but they call me " + nickName + "\nSometimes I talk to myself.");
console.log("My job is to eradicate corruption in our kingdom, \n but I never imagine one day my target would be the King.");
console.log("I have counted about " + numberOfGuards + " guards outside this castle."); 

// conditionals

if (manyGuards === true) {
	// runs this code if true
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
 	// 2.0
	
	//procedure
console.log("Hello this is " + name + " again, and this is the continuation of my story.");
	
var firstGuards = function(armored) {
	
	var deathGuards = 5;
	
		if( armored === 5) {
			
			console.log("I was able to kill " + deathGuards + " guards so far without being spotted.");
			
		} else {
			
			console.log(" I'm lost." );
			
			};
};

firstGuards(5);
	
//Boolean Function

console.log("After I killed these guys, I went to the main hall.");
 
var hallEnemies = function(blackArmor, whiteArmor) {
	 
	 var totalOfEnemies = blackArmor + whiteArmor;
	 
	 if ( whiteArmor === 3) {
		 
	 } else {
		 
		 };
	
	return totalOfEnemies
};

var totalGuards = hallEnemies(2,3);
 
console.log("and I was able to kill " + totalGuards + " more.");

//Number Function
console.log("I go to the kitchen, and I see there are some enemies. I'm going to take them down one by one.");

var kitchenGuards = function(totalEnemies) {
	
	var totalGuards = totalEnemies
	
	while (totalEnemies > 0) {
		
		console.log(totalEnemies + " is down.");
		totalEnemies--;
		
		if (totalEnemies > 0) {
		
			console.log("ohh!! there is the otherone.");
			
		} else {
			
			console.log("no more guards.");
		}
		
	}
	 return totalGuards
};
var kitchenPersonel = kitchenGuards(3);
console.log("Wow, I can't believe it!!. I was able to kill " + kitchenPersonel + " guards so fast.");

//String Function

console.log("After I clear the kitchen, I have to go to the second floor.");

var secondFloor = function(firstGuard, secondGuard) {
	
	var guards = firstGuard + secondGuard;
	
	console.log("The guard with green armor was " + firstGuard + " and the other one was" + secondGuard + " to kill.");
	
	return guards;
};

var enemies = secondFloor("one easy"," one hard");

console.log("these enemies were " + enemies + " to kill.");

//Array Function

console.log("Now, I believe it is time to go the King's Chambers. Time to keep my nickname " + nickName + " up to date hahahhaha!!!");

console.log("I see there are some enemies, I have to take them down.");

var enemiesChamber = function(gold, weapon) {
	
	var eliteGuards = gold + weapon;
	
	for ( var totalEnemies = 1; totalEnemies <= 3; totalEnemies++) {
		
		console.log(totalEnemies + " is down")
		
		if (totalEnemies < 3){
			
			console.log("ohh!! there is another one.");
			
		} else {
			
			console.log("no more guards");
			
		};
		
	};
	
	return eliteGuards;
};

var elite = enemiesChamber(3 , weapons[2]);
	
console.log("After the fight with the guards I was able to recover " + elite + ".");
console.log("hahaha it is funny because the total of weapons I cary is " + weapons.length)

