function checkStrength() {
    const password = document.getElementById("password").value;
    const bar = document.getElementById("strength-bar");
    const feedback = document.getElementById("feedback");
  
    let strength = 0;
    let remarks = [];
  
    
    if (password.length >= 8) strength++;
    else remarks.push("Too short");
  
    if (/[a-z]/.test(password)) strength++;
    else remarks.push("Add lowercase letters");
  
    if (/[A-Z]/.test(password)) strength++;
    else remarks.push("Add uppercase letters");
  
    if (/\d/.test(password)) strength++;
    else remarks.push("Add numbers");
  
    if (/[@$!%*?&]/.test(password)) strength++;
    else remarks.push("Add special characters");
  
    const colors = ["red", "orange", "yellow", "blue", "green"];
    const messages = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
  
    bar.style.width = `${(strength / 5) * 100}%`;
    bar.style.backgroundColor = colors[strength - 1] || "transparent";
    feedback.textContent = password ? messages[strength - 1] + " – " + remarks.join(", ") : "";
  }
  