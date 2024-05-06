(() => {
  console.log("Immediate Invoking");
})();

((a, b) => {
  let result = a + b;
  console.log(result);
})(30, 50);
