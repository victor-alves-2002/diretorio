let gate = prompt("Choose gate: a, b, or c");
let win = false;
switch (gate) {
    case "a": {
        let message = "Gate A";
        alert(message);
        break;
    }
    case "b": {
        let message = "Gate B";
        alert(message);
        win = true; // Agora o usuário pode ganhar escolhendo "b"
        break;
    }
    case "c": {
        let message = "Gate C";
        alert(message);
        break;
    }
    default:
        alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}