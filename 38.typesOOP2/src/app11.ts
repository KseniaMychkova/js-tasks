// Создайтекласс Counter, которыйбудет представлять счетчик. У класса должнобыть: • Свойство count,значениекоторогозадается через сеттер. • Метод increment—увеличиваетзначениесчётчикана 1. • Метод decrement—уменьшаетзначениесчётчикана1.


class Counter{
    count:number;

    setCount (count:number){
        this.count = count
    }

    increment (){
        this.count++
    }

    decrement(){
        this.count--
    }
    
    getCount () {
        return this.count
    }
}

const counter = new Counter()
counter.setCount(5)
console.log(counter.getCount());
counter.increment()
console.log(counter.getCount());
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getCount());
counter.decrement()
console.log(counter.getCount());

