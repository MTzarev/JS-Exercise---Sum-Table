function sumTable() {
let rows = document.querySelectorAll(`table tr`);
let sum = 0;
for (let i=1; i<rows.length-1; i++){
let cost = rows[i].lastChild
sum +=Number(cost.textContent)
}
document.getElementById(`sum`).textContent=sum;
}
