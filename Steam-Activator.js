const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function parseKeys(input) {
  return input
    .split(",")
    .map((key) => key.trim())
    .filter((key) => key.length > 0);
}

function isVisible(el) {
  if (!el) return false;

  const style = window.getComputedStyle(el);

  return (
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    el.offsetParent !== null
  );
}

async function checkIfFailed() {
  const errorDisplay = document.getElementById("error_display");

  await delay(1500);

  return isVisible(errorDisplay);
}

async function enterKeys(keys) {
  const failedKeys = [];

  for (let i = 0; i < keys.length; i++) {
    const keyInput = document.getElementById("wallet_code");
    const validateBtn = document.getElementById("validate_btn");
    const errorDisplay = document.getElementById("error_display");

    if (!keyInput || !validateBtn) {
      console.error("Could not find the input box or submit button.");
      return;
    }

    const currentKey = keys[i];

    if (errorDisplay) {
      errorDisplay.innerText = "";
      errorDisplay.style.display = "none";
    }

    console.log(`Trying key ${i + 1} of ${keys.length}: ${currentKey}`);

    keyInput.value = currentKey;

    keyInput.dispatchEvent(new Event("input", { bubbles: true }));
    keyInput.dispatchEvent(new Event("change", { bubbles: true }));

    await delay(500);

    validateBtn.click();

    const failed = await checkIfFailed();

    if (failed) {
      console.log(`Failed key: ${currentKey}`);
      failedKeys.push(currentKey);
    } else {
      console.log(`No error detected for key: ${currentKey}`);
    }

    await delay(2000);
  }

  const output = failedKeys.join(",");

  console.log("Done trying all keys.");
  console.log("Failed keys:");
  console.log(output);

  if (failedKeys.length > 0) {
    prompt("Copy failed keys:", output);
  }

  alert(
    failedKeys.length === 0
      ? "Done. No failed keys detected."
      : `Done. Found ${failedKeys.length} failed keys.`,
  );
}

function main() {
  const input = prompt("Enter keys separated by commas:");

  if (!input) {
    console.log("No keys entered.");
    return;
  }

  const keys = parseKeys(input);

  if (keys.length === 0) {
    console.log("No valid keys found.");
    return;
  }

  enterKeys(keys);
}

main();
