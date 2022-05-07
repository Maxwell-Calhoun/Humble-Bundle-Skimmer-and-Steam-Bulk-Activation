function enterKey(k,c) {
    key = document.getElementById("product_key");
    register = document.getElementById("register_btn");
    check = document.getElementById("accept_ssa");
    
    if (document.getElementById("error_display").visible()) {
    	console.log("Key: " + k[c - 1] + " was not activated");
    }
    
    DisplayPage('code');
    
    if (!check.checked) {
        check.click();
    }
    
    if (c < k.length && key.visible) {
        key.value = k[c];
        setTimeout(() => register.click(), 500);
        c++;
        setTimeout(() => enterKey(k,c), 3000);
    }    
    
}

function main() {
    DisplayPage('code');
    counter = 0;
    const input = prompt("Enter unparsed keys:");
    keys = input.split(',');
    enterKey(keys,counter);
}