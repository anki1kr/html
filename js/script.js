// copy paste 
document.addEventListener("copy", (e) => {
    e.preventDefault();
    if (e.clipboardData) {
        e.clipboardData.setData("text/plain", "Padhle bhai 😛 Copy-Paste karna hai se ghar nhi chalta");
    } else if (window.clipboardData) {
        window.clipboardData.setData("Text", "Padhle bhai 😛 Copy-Paste karna hai se ghar nhi chalta");
    }
});

// 

