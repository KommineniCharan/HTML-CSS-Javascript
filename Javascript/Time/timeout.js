setTimeout(() => {
  console.log("TimeOut1");
}, 10000);

console.log("Without Timeout");

setTimeout(() => {
  console.log("Timeout2");
}, 5000);
