let tracker = {
     invocations : 0,
     instances: 0,
    createTracker(func){
        this.instances++;
        //console.log("number of instances", this.instances)
        return function (...args) {
            this.invocations++;
           // console.log("number of invocations", this.invocations)
            return func(...args);
        };
    }
}
//tracker.createTracker.bind(tracker);

function add(a, b) {
    return a + b;
}

const trackAddFunctionObj = Object.create(tracker);
const trackAddFunction= trackAddFunctionObj.createTracker(add);

console.log(trackAddFunction(2, 3));
console.log(trackAddFunction(4, 5));

console.log("Number of invocations:", trackAddFunctionObj.invocations);
console.log("Number of instances:", trackAddFunctionObj.instances);
