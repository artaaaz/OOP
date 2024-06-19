class Book {
    constructor(namebook, say, read) {
        this.namebook = namebook;
        this.say = say;
        this.read = read;
    }
}

class Hujan extends Book {
    constructor(namebook, say) {
        super(namebook, say, true); 
    }

    description() {
        return `${this.namebook} is sad.`; 
    }
}

class Hello extends Book {
    constructor(namebook, say) {
        super(namebook, say, false); 
    }

    description() {
        return `${this.namebook} is funny.`; 
    }
}

const myHujan = new Hujan("Buku Hujan", 234); 
const myHello = new Hello("Buku Hello", 123); 

console.log(myHujan.description()); 
console.log(myHello.description()); 
console.log(myHujan); 
console.log(myHello); 

