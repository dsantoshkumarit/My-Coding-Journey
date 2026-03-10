class Node{
    constructor(data){
        this.data = data;
        this.pre = null;
        this.next = null;
    }
}

class Dequeue{
    constructor(){
        this.head = null
        this.tail = null;
    }
    enqHead(node){
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }
        else{
            this.head.pre = node;
            this.head.pre.next = this.head;
            this.head = this.head.pre;
        }
    }
    deqHead(){
        if(this.head === null){
            return null;
        }
        else if(this.head.next === null){
            let temp = this.head;
            this.head = null;
            this.tail = null;
            return temp;
        }
        else{
            this.head = this.head.next;
            this.head.pre.next = null;
            this.head.pre = null;
        }
    }
    enqTail(node){
        if(this.tail === null){
            this.head = node;
            this.tail= node;
        }
        else{
            this.tail.next = node;
            this.tail.next.pre = this.tail;
            this.tail = this.tail.next;
        }
    }
    deqTail(){
        if(this.tail === null){
            return null;
        }
        else if(this.head === this.tail){
            let temp = this.tail;
            this.head = null;
            this.tail = null;
            return temp;
        }
        else{
            let temp = null;
            this.tail = this.tail.pre;
            this.tail.next.pre = null;
            temp = thi.tail.next;
            this.tail.next = null;
            return temp;
        }
    }
    isEmpty(){
        return this.head === null;
    }
    front(){
        return (this.head !== null) ? this.head.data : null; 
    }
    rear(){
        return (this.tail !== null) ? this.tail.data : null;
    }
}