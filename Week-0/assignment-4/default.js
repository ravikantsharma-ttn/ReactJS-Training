let tracker = {
    invocations: 0,
    instances: 0,
    createTracker(func){
        this.instances++;
        let invocations = this.invocations;
        console.log("number of instances", this.instances)
        return function (...args) {
            invocations++;
            console.log("number of invocations", invocations)
            return func(...args);
        };
    }
}


// function createTracker() {
//     let invocations = 0;
//     let instances = 0;

//     return {function (func) {
//         instances++;
//         console.log("number of instances", instances)
//         return function (...args) {
//             invocations++;
//             console.log("number of invocations", invocations)
//             return func(...args);
//         };
//     },invocations, instances};
// }

const trackFunction = tracker.createTracker(add);
//console.log("qqqq", trackFunction.instances)

function add(a, b) {
    return a + b;
}

console.log(trackFunction(2, 3));
console.log(trackFunction(4, 5));
console.log(trackFunction(6, 5));

console.log("Number of invocations:", tracker.invocations);
console.log("Number of instances:", tracker.instances);
