const numberEl = document.querySelector('.number');

for (let i = 1; i < 101; i++) {
    
    console.log(i);

    numberEl.innerHTML += `<span> ${i} </span>`
}