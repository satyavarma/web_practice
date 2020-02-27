export function hehe(){
    console.log('without default so inside {}');
}
export default class People {
    constructor(name){
        this.name = name;
    }
    canWalk(){
        console.log(this.name + ' can walk');
    }
}