//your JS code here. If required.
const arr = [1, 2, 3, 4];
const output = document.getElementById("output");

function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  });
}

getArray()
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = data.filter((num) => num % 2 === 0);
        output.innerText = evenNumbers.join(",");
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evenNumbers.map((num) => num * 2);
        output.innerText = doubled.join(",");
        resolve(doubled);
      }, 2000);
    });
  })
  .catch((err) => console.log(err));