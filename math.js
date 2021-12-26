

const fs = require("fs");
const inquirer=require("inquirer");
//Prompt the user
inquirer
.prompt([
{
  type:'input',
  name:'name',
  message:"What is your name ?"
},
{
  type:'list',
  name:'contact',
  message:"What is your preferred method of communication?",
  choices:["email","phone","slack","smoke-signal"]
},
{
  type:'checkbox',
  name:'stack',
  message:"What language do you know ?",
  choices:["html","css","javascript","sql"]
}
])//write the user response to a file
.then(function(data){
  //Bonus generate the name of user file from their input
  const filename=
data.name
.toLowerCase()
.split('')
.join('')+'.json';
fs.writeFile(filename,JSON.stringify(data,null,'|t'),function(err){
if(err){
  return console.log(err);
}
console.log('success');
});
});
=============================================
//all of the 'createGreeting' functions are equivalent 
var createGreeting=function(message,name){
    return message + " ," + name + "!";
    };
    
    var greet=greeting=>console.log(greeting);
    var greeting=createGreeting("hello","there");
    greet(greeting);
    ============
    var funnyCase=string=>{
        var newString=" ";
        for(var i=0;i<string.length;i++){
          if(i%2===0) newString+=string[i].toLowerCase();
          else newString +=string[i].toUpperCase();
        }
        return newString;
      };
      console.log('funny case:');
      console.log(funnyCase("you can't do whatever you want all the time !|n"));
      //=======================================
      var map=(arr,cb)=>{
        var result=[];
        for(var index=0;index<arr.length;index++){
          var currentElement=arr[index];
          result.push(cb(currentElement,index));
        }
        return result;
      };
      
      var numbers=[1,2,3,4,5,6,7,8,9,10];
      var doubled=map(numbers,element=>element*2);
      console.log('2.Doubled Numbers:');
      console.log(doubled);
      //
      var filter=(arr,cb)=>{
        var result=[];
        for(var index=0;index<arr.length;index++){
          var currentElement=arr(index);
          if(cb(currentElement,index)){
            result.push(currentElement);
          }
        }
        return result;
      };
      var evenNumbers=filter(numbers,currentElement=>currentElement%2===0);
      console.log('\n3.Even Numbers:');
      console.log(evenNumbers);
      //
      var netflixQueue={
        queue:[
          'Mr. Nobody',
          'The matrix',
          'eternal sunshine of the spotless mind',
          'fight club'
        ],
        watchmovie:function(){
          this.queue.pop();
        },
        addMovie:function(movie){
          this.queue.unshift(movie);
        },
        printQueue:function(){
          let list="";
          for(let i=this.queue.length-1;i>=0;i--){
            let currentMovie=this.queue[i];
            list+=(this.queue.length-i)+'.'+currentMovie+'\n';
          }
          console.log(list);
        }
      };
      console.log('\n4.printing movie queue:|n');
      netflixQueue.printQueue();
      netflixQueue.watchmovie();
      console.log('\nwatched a movie!/n');
      netflixQueue.printQueue();
      console.log('\nadding a movie !\n');
      netflixQueue.addMovie('black swan');
      console.log('printing movie queue:\n');
      netflixQueue.printQueue();
      ===================================
      const originalArray=[1,7,4,5,10];
const doubleArray=originalArray.map(function(data){
return data*2;
});
console.log(originalArray);
console.log(doubledArray);
const tripledArray=originalArray.map(data=>data*3);
console.log(tripledArray);

const tripledArray=originalArray.map(data=>data*3);
console.log(tripledArray);

const oddorEven=originalArray.map(num=>(num=>(num%2===0?'even':'odd')));
console.log(oddorEven);
=======================
const arya={
  first:'arya',
  last:'star',
  origin:'winterfell'
  };
  const{first,last,origin}=arya;
  console.log(first);
  console.log(origin);
  const john={
      first:'john',
      last:'snow',
      title:'prince',
      family:{
          brothers:{
              brother1:'rob stark',
              brother2:'rickon stark'
          },
          sisters:{
              sister1:'arya stark',
              sister2:'sansa stark'
          }
      }
  };
  const{brother1,brother2}=john.family.brothers;
  console.log(brother1);
  console.log(brother2);
  //
  const characters=['ned stark','the quiet wolf','house stark'];
  const[name,alias,allegiance]=characters;
  console.log(name,alias,allegiance);
  ================================
  function MiniBank(balance){
    this.balance=balance;
    this.getBalance=function(){
        return this.balance;
    };
    //add a 'setBalance()' function
    this.setBalance=function(value){
        this.balance=value;
    };
    //add a 'deposit ()'function
    this.deposit=function(value){
        //bonus code
    if(typeof value !=='number'|| value<=0){
        throw new Error("'value' must be a positive number");
    }
    let newBalance=this.getBalance()+value;
    this.setBalance(newBalance);
    console.log('Deposited${value}');
    };
    //add a 'withdraw ()' function
    this.withdraw=function(value){
        //bonus code
        if(typeof value!=='number' || value<=0){
            throw new Error("'value' must be a positive number");
        }
        let newBalance=this.getBalance()-value;
        //bonus code
        if(newBalance<0){
            throw new Error('insufficient funds for this transaction');
        }
        this.setBalance(newBalance);
        console.log('Withdrew${value}');
    };
    this.printBalance=function(){
        console.log('Balance:${this.getBalance()}');
    };
}
//=================================
//create a new 'bank' object
let bank=new MiniBank(0);
//print the 'bank' balance
bank.printBalance();
//deposit some money 
bank.deposit(85);
bank.printBalance();
//withdrew some money and print 'bank' balance
bank.withdraw(20);
bank.printBalance();
========================
//create a constructor function
function Character(name,strength,hitpoints){
  this.name=name;
  this.strength=strength;
  this.hitpoints=hitpoints;
}
//create a prototype method
Character.prototype.printStats=function(){
  console.log(
'Name:'+
this.name+
'\nStrength:'+
this.strength+
'\nHitpoints:'+
this.hitpoints
  );
  console.log('\n================================\n');
};
//
Character.prototype.isAlive=function(){
  if(this.hitpoints>0){
      console.log(this.name+ ' is still alive');
      console.log('\n=======================\n');
  }else{
console.log(this.name+' has died');
  }
};
//
Character.prototype.attack=function(opponent){
  opponent.hitpoints-=this.strength;
  console.log(this.name+'attacked'+opponent.name+'!!');
  console.log('\n========================\n');
};
//=======================
let warrior=new Character('Crusher',10,75);
console.log(warrior)
console.log(warrior._proto_)
let rogue=new Character('Dodger',20,50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();
======================
class Shape{
  constructor(area,perimeter){
      this.area=area;
      this.perimeter=perimeter;
  }
  printinfo(){
      console.log('Area:${this.area}');
      console.log('Perimeter:${this.perimeter}');
  }
}
const shape=new Shape(25,25);
shape.printinfo();
===============================
const Shape=require("./shape");

class Rectangle extends Shape{
    constructors(sideA,sideB){
        const area=sideA*sideB;
        const perimeter=sideA*2+sideB*2;

        super(area,perimeter);
        this.sideA=sideA;
        this.sideB=sideB;
    }
}
const rectangle=new Rectangle(12,9);
rectangle.printInfo();
========================
class Phone{
  constructor(number,ringtone){
      this.number=number;
      this.ringtone=ringtone;
  }
  ring(){
      console.log(this.number);
      console.log(this.ringtone);
  }
}
const apple=new Phone('222-333-4444','ring-ring');
apple.ring();
module.exports=Phone