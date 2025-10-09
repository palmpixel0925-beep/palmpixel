let arr = [3, 4, 2, 2, 5, 3];
let swap = [];
for (let i = 0; i <= arr.length - 1; i++) {
  for (let j = 0; j <= arr.length - 1; j++) {
    if (arr[i] == arr[j]) {
      swap[j] += swap[j];
      break
    }
  }
}

console.log(swap);
