class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    enq(val){
        if(this.head === null){
            this.head = new Node(val);
            this.tail = this.head;
        }
        else{
            this.tail.next = new Node(val);
            this.tail = this.tail.next;
        }
    }
    deq(){
        if(this.head === null){
            return null;
        }
        else if(this.head.next === null){
            const temp = this.head;
            this.head = null;
            this.tail = null;
            return temp;
        }
        else{
            const temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            return temp;
        }
    }
    front(){
        return (this.head ) ? this.head.data : null;
    }
    rear(){
        return (this.tail ) ? this.tail.data : null;
    }
    isEmpty(){
        return this.head === null;
    }
}

export {Node, Queue};