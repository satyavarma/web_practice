function dispr(nn){
    console.log('var');
    for(var i=0;i<nn;i++){
        console.log(i);
    }
    console.log(i)
}
function disprlet(nn){
    console.log('let');
    for(let j=0;j<nn;j++){
        console.log(j);
    }
    //console.log(i);
}
dispr(10);
disprlet(10);
console.log('const');
const c = 10;
console.log(c);
//c = 20;

//objects
console.log('')
const person = {
    name: 'satya',
    talk(){             //talk() == talk: function() its method
        console.log('Satya is talking something.');
    }
};
console.log(person.name);
console.log(person['name']);
const targetmember = 'name';
console.log(person[targetmember]);
person[targetmember] = 'varma';
console.log(person.name);
person.name = 'siva'
console.log(person.name)
person.talk();
person.talk;
person.firstn = 'rudraraju';
console.log(person.firstn);
console.log(person)
delete person.firstn;
for(val in person){
    console.log(val);
}
console.log(person.name.toUpperCase())
console.log('')

function details(fname,lname){
    this.namef = fname;
    this.namel = lname;
    this.name = function(){
        return this.namef+" "+this.namel;
    };
    this.NAME = this.namef+" "+this.namel;
}
let newperson = new  details('satya','varma');
console.log(newperson.NAME)
let freturn = newperson.name()
console.log(freturn);
//prototype is used to add new elements to object

details.prototype.sirname = 'rudraraju'
details.prototype.formalfullname = function(){
    let nn = this.namef+" "+this.namel+" "+this.sirname;
    nn = nn.toUpperCase();
    return (nn);
};
let anotherperson = new details('siva', 'vamsi');
console.log(anotherperson);
console.log(anotherperson.formalfullname());
console.log('')
console.log('this')
let student = {
    id: 12,
    meth(){
        console.log(this)
    }
};
student.meth();
let met = student.meth;
met() //her this refers to main window.
//using bind to define where to point this
met = student.meth.bind(student)
met()

console.log('');
console.log('arrow functions');

/*
const square = function(number){
    return number*number
}
similar
*/
const square = number => number*number ;
console.log(square(5));

const jobs = [
    {id:1, status:true},
    {id:2, status:true},
    {id:3, status:false}
];

//activejobs = jobs.filter(function(job){return job.status});
const activejobs = jobs.filter(job => job.status);
console.log(activejobs);
