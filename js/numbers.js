const numbers=[];
for(let i=0; i<7; i++)
    {
        numbers[i] = Math.floor(Math.random() * 50) + 1;
}
document.getElementById("numbers").innerHTML = numbers;

const stars=[];
for(let i=0; i<2; i++)
    {
        stars[i] = Math.floor(Math.random() * 12) + 1;
}
document.getElementById("stars").innerHTML = stars;