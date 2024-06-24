class Stack {
    constructor() {
        this.item = [];
    }

    push(data) {
        this.item.push(data);
    }

    isEmpty() {
        return this.item.length === 0;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("empty data");
            return null; // Return null or a suitable value when the stack is empty
        }
        return this.item.pop();
    }

    print() {
        return this.item.join(', '); // Join items with a comma and space for better readability
    }
}

let stackdata = new Stack();
stackdata.push(38);
stackdata.push(48);
stackdata.push(18);
let data = stackdata.print();
console.log(data); // Corrected to print the result of stackdata.print()
