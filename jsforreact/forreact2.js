/*
const person = {
    talk(){
        console.log('this:',this);
    }
};
person.talk();

const person = {
    talk(){
        setTimeout(function(){
            console.log('this:',this);
        }, 1000);
    }
};
person.talk();


const person = {
    talk(){
        let selfref = this;
        setTimeout(function(){
            console.log('selfref:',selfref);
        }, 1000);
    }
};
person.talk();
*/

const person = {
    talk(){
        setTimeout(() => {console.log('this:', this), 1000});
    }
};

person.talk();

console.log('');
console.log('array function map/MAP');

const colors = ['red','green','blue'];
const items = colors.map((color)=> `<li>${color}</li>`); //similar to '<li>'+color+'</li>' the way of using `S{}` is template litering
console.log(items);

console.log('');
console.log("object destructuring");
const details = {
    name: "satya",
    fname:"ramesh",
    mname: "indhu"
};
console.log(details.name);
const {name: n, fname: f, mname: m} = details;
console.log(n);

function det(nn,fn){
    this.name = nn;
    this.fname = fn;
}

const infor = new det('satya','ramesh');
const {name: ni, fname: fi} = infor;
console.log(`${ni} son of ${fi}`);

console.log('');
console.log('spread operator');
const l1 =[1,2,3];
const l2 = [5,6];
//l3 = l1.concat(l2)

let l3 = [...l1, ...l2]
console.log(l3);
//use
l3 = [0,...l1,4,...l2];
console.log(l3)

//similarly objects
const namedet = {
    name : 'satya'
};
const jobdet = {
    job : 'dev'
};

const totdet = {
    ...namedet,
    comapny: 'vedantu',
    ...jobdet
};
console.log(totdet);

console.log('');
console.log('classes and inhertance');

//default modularing import .. from ..
//named modularing import {..} from ..
import People ,{hehe} from "./people.js";
class developer extends People{
    constructor(pname, tech){
        super(pname);
        this.tech = tech;
    }
    canFreelance(){
        console.log(this.name + ' can develop with ' + this.tech);
    }
}

const random = new developer('satya', 'MERN');
random.canWalk();
random.canFreelance();
console.log(random);
