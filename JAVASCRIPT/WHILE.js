let isOver = false;
let counter = 1;
 
while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}
