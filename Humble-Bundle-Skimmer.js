function cleanKeyText(value) {
  return value
    .replace(/\s+/g, "")
    .replace(/&nbsp;/gi, "")
    .trim()
    .toUpperCase();
}

function getKeysFromCurrentPage() {
  const keyElements = Array.from(
    document.getElementsByClassName("keyfield-value"),
  );
  const keys = [];

  for (let i = 0; i < keyElements.length; i++) {
    const rawText =
      keyElements[i].innerText || keyElements[i].textContent || "";
    const cleanedKey = cleanKeyText(rawText);

    if (/^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}$/.test(cleanedKey)) {
      keys.push(cleanedKey);
    }
  }

  return keys;
}

function main() {
  const keys = getKeysFromCurrentPage();
  const output = keys.join(",");

  console.log("Keys from current Humble page:");
  console.log(output);

  prompt("Copy these keys:", output);

  alert(`Done. Found ${keys.length} keys on this page.`);
}

main();
