// Disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showWarning('Right-click is disabled! 💀');
    return false;
});

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', function(e) {
    // F12
    if (e.keyCode === 123) {
        e.preventDefault();
        showWarning('Developer tools are disabled! 💀');
        return false;
    }
    
    // Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        showWarning('Inspect element is disabled! 💀');
        return false;
    }
    
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        showWarning('Console is disabled! 💀');
        return false;
    }
    
    // Ctrl+Shift+C (Inspect)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
        showWarning('Inspect is disabled! 💀');
        return false;
    }
    
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        showWarning('View source is disabled! 💀');
        return false;
    }
    
    // Ctrl+S (Save)
    if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        showWarning('Saving is disabled! 💀');
        return false;
    }
});

// Detect DevTools
let devtoolsOpen = false;
const element = new Image();
Object.defineProperty(element, 'id', {
    get: function() {
        devtoolsOpen = true;
        showWarning('Developer tools detected! 💀');
        // Redirect or blank page
        setTimeout(() => {
            document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Orbitron;color:white;font-size:3rem;text-align:center;flex-direction:column;"><div style="font-size:5rem;margin-bottom:20px;">💀</div>ACCESS DENIED<div style="font-size:1rem;margin-top:20px;color:#999;">Developer tools are not allowed</div></div>';
        }, 1000);
    }
});

setInterval(() => {
    console.log(element);
    console.clear();
}, 1000);

// Disable text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// Disable copy
document.addEventListener('copy', function(e) {
    e.preventDefault();
    showWarning('Copying is disabled! 💀');
    return false;
});

// Disable cut
document.addEventListener('cut', function(e) {
    e.preventDefault();
    showWarning('Cutting is disabled! 💀');
    return false;
});

// Disable drag
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
});

// Show warning message
function showWarning(message) {
    const warning = document.createElement('div');
    warning.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(20, 20, 20, 0.98);
        border: 3px solid #ff0000;
        padding: 30px 50px;
        border-radius: 10px;
        z-index: 999999;
        text-align: center;
        box-shadow: 0 0 50px rgba(255, 0, 0, 0.8);
        animation: warningShake 0.5s ease;
        font-family: Orbitron, monospace;
        color: #ff0000;
        font-size: 1.2rem;
        font-weight: bold;
    `;
    
    warning.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 15px;">⚠️</div>
        <div>${message}</div>
    `;
    
    document.body.appendChild(warning);
    
    setTimeout(() => {
        warning.style.animation = 'warningFadeOut 0.3s ease';
        setTimeout(() => warning.remove(), 300);
    }, 2000);
}

// Add warning animations
const warningStyle = document.createElement('style');
warningStyle.textContent = `
    @keyframes warningShake {
        0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
        25% { transform: translate(-50%, -50%) rotate(-5deg); }
        75% { transform: translate(-50%, -50%) rotate(5deg); }
    }
    
    @keyframes warningFadeOut {
        from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
    
    * {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
`;
document.head.appendChild(warningStyle);

// Clear console repeatedly
setInterval(() => {
    console.clear();
}, 500);

// Detect if page is in iframe
if (window.top !== window.self) {
    window.top.location = window.self.location;
}

// Prevent printing
window.addEventListener('beforeprint', function(e) {
    e.preventDefault();
    showWarning('Printing is disabled! 💀');
    return false;
});

// Obfuscate console
console.log = function() {};
console.warn = function() {};
console.error = function() {};
console.info = function() {};
console.debug = function() {};

// Anti-debugging
(function() {
    function detectDebugger() {
        const start = new Date();
        debugger;
        const end = new Date();
        if (end - start > 100) {
            document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Orbitron;color:white;font-size:3rem;text-align:center;flex-direction:column;"><div style="font-size:5rem;margin-bottom:20px;">💀</div>DEBUGGER DETECTED<div style="font-size:1rem;margin-top:20px;color:#999;">Access denied</div></div>';
        }
    }
    setInterval(detectDebugger, 1000);
})();

// Disable view source via URL
if (window.location.href.includes('view-source:')) {
    window.location.href = 'about:blank';
}

console.log('%c⚠️ STOP!', 'color: red; font-size: 50px; font-weight: bold;');
console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and will give them access to your account.', 'font-size: 16px;');
console.log('%c💀 Unauthorized access is prohibited!', 'color: red; font-size: 20px; font-weight: bold;');
