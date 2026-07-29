//your JS code here. If required.
let arr = [1, 2, 3, 4];

let output = document.getElementById("output");

new Promise((resolve, reject) => {
    setTimeout(() => {
        let odd = arr.filter(num => num % 2 !== 0);
        output.innerText = odd;
        resolve(arr);
    }, 1000);
})
.then((data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let even = data
                .filter(num => num % 2 === 0)
                .map(num => num * 2);

            output.innerText = even;
            resolve();
        }, 2000);
    });
})
.catch((err) => {
    console.log(err);
});