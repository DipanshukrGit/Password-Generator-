function generatePassword() {
    const length = 12;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").value = password;
}

function savePassword() {
    const website = document.getElementById("website").value;
    const password = document.getElementById("password").value;
    if (website && password) {
        const savedPasswords = document.getElementById("savedPasswords");
        const passwordItem = document.createElement("div");
        passwordItem.classList.add("password-item");
        passwordItem.innerHTML = `<strong>${website}</strong>: <span class="hidden-password" onclick="this.innerText='${password}'; this.style.background='none'">Click to view</span>`;
        savedPasswords.appendChild(passwordItem);
    } else {
        alert("Please enter a website name and generate a password first.");
    }
}

document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.getElementById("saveBtn").addEventListener("click", savePassword);