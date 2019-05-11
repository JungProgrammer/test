export default class appSevice{
    constructor(text){
        this.text = text;
    }

    log(){
        console.log(`'[appService]: ${this.text}'`);
    }
}