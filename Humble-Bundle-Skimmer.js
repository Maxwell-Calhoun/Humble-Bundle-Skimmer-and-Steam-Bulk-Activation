function main() {
    keys = document.getElementsByClassName("keyfield-value");
    combinedKeys = '';
    for (let ii = 0; ii < keys.length; ii++) {
        if (ii == keys.length - 1) {
            combinedKeys += keys[ii].innerHTML;
        } else {
            combinedKeys += keys[ii].innerHTML + ',';
        }
    }
    console.log(combinedKeys);
}