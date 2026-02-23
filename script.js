function downloadCheat(game) {
    // Create download notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(20, 20, 20, 0.95);
        border: 2px solid #ffffff;
        padding: 30px 50px;
        border-radius: 10px;
        z-index: 10000;
        text-align: center;
        box-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
        animation: fadeIn 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 15px;">💀</div>
        <h2 style="color: #ffffff; margin-bottom: 10px; font-size: 1.5rem;">DOWNLOADING...</h2>
        <p style="color: #cccccc; font-size: 0.9rem;">Preparing ${game.toUpperCase()} cheat files</p>
        <div style="margin-top: 20px; height: 4px; background: #111111; border-radius: 2px; overflow: hidden;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: #ffffff; transition: width 0.1s;"></div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Simulate download progress
    let progress = 0;
    const progressBar = notification.querySelector('#progress-bar');
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Show completion message
            setTimeout(() => {
                notification.innerHTML = `
                    <div style="font-size: 3rem; margin-bottom: 15px;">✅</div>
                    <h2 style="color: #ffffff; margin-bottom: 10px; font-size: 1.5rem;">DOWNLOAD COMPLETE</h2>
                    <p style="color: #cccccc; font-size: 0.9rem;">Check your downloads folder</p>
                `;
                
                setTimeout(() => {
                    notification.style.animation = 'fadeOut 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }, 2000);
            }, 500);
        }
        progressBar.style.width = progress + '%';
    }, 100);
}

// Buy options popup - Simple & Beautiful
function openBuyOptions(cheatName) {
    createButtonBurst(event);
    
    const popup = document.createElement('div');
    popup.className = 'payment-popup-overlay';
    popup.innerHTML = `
        <div class="payment-popup-container">
            <!-- Close button -->
            <button class="popup-close-btn" onclick="this.closest('.payment-popup-overlay').remove()">
                ✕
            </button>
            
            <!-- Main skull -->
            <div class="main-skull">💀</div>
            
            <!-- Title -->
            <h2 class="popup-title">${cheatName}</h2>
            
            <!-- Payment buttons -->
            <div class="payment-buttons">
                <a href="https://wa.me/94713159199?text=Hi, I want to buy ${encodeURIComponent(cheatName)}" 
                   target="_blank" class="payment-btn whatsapp-btn">
                    <span class="btn-icon">📱</span>
                    <span class="btn-text">WhatsApp</span>
                </a>
                
                <a href="https://discord.gg/DJ7bP3TABc" 
                   target="_blank" class="payment-btn discord-btn">
                    <span class="btn-icon">💬</span>
                    <span class="btn-text">Discord</span>
                </a>
            </div>
            
            <!-- Info text -->
            <p class="popup-info">
                ⚡ Instant Delivery • 🔒 100% Secure • ✅ 24/7 Support
            </p>
        </div>
    `;
    
    document.body.appendChild(popup);
}

// Particle burst effect when clicking button
function createButtonBurst(e) {
    if (!e) return;
    
    const button = e.target.closest('.buy-btn');
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 100 + Math.random() * 50;
        
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            left: ${centerX}px;
            top: ${centerY}px;
            pointer-events: none;
            z-index: 99999;
            box-shadow: 0 0 10px #ffffff;
        `;
        
        document.body.appendChild(particle);
        
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        }).onfinish = () => particle.remove();
    }
}

// Add popup animations
const popupAnimStyle = document.createElement('style');
popupAnimStyle.textContent = `
    @keyframes skullBounce {
        0%, 100% {
            transform: translateY(0) scale(1);
        }
        50% {
            transform: translateY(-10px) scale(1.05);
        }
    }
    
    @keyframes titleGlow {
        0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
        }
        50% {
            text-shadow: 0 0 40px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.8);
        }
    }
`;
document.head.appendChild(popupAnimStyle);

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
`;
document.head.appendChild(style);

// Add matrix rain effect in background
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.1;
        pointer-events: none;
    `;
    document.body.insertBefore(canvas, document.body.firstChild);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 33);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

createMatrixRain();


// Loading screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after page loads
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remove from DOM after transition
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 2000); // Show for 2 seconds minimum
});


// Mini countdown for Android Panel card
function startMiniCountdown() {
    const countdownDate = new Date();
    countdownDate.setMonth(countdownDate.getMonth() + 1); // 1 month from now
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        if (distance < 0) {
            const countdown = document.getElementById('android-countdown');
            if (countdown) {
                countdown.innerHTML = '<div style="color: #00ff00; font-weight: 900; text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);">AVAILABLE NOW!</div>';
            }
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('mini-days');
        const hoursEl = document.getElementById('mini-hours');
        const minutesEl = document.getElementById('mini-minutes');
        const secondsEl = document.getElementById('mini-seconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// Notify me function
function notifyMe() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(20, 20, 20, 0.98);
        border: 3px solid #00ff00;
        padding: 40px 60px;
        border-radius: 15px;
        z-index: 100000;
        text-align: center;
        box-shadow: 0 0 50px rgba(0, 255, 0, 0.6);
        animation: fadeIn 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 20px;">✅</div>
        <h2 style="color: #00ff00; margin-bottom: 15px; font-size: 1.8rem; font-family: Orbitron, monospace; text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);">NOTIFICATION SET!</h2>
        <p style="color: #cccccc; font-size: 1rem; line-height: 1.6;">
            We'll notify you on WhatsApp when<br>
            <strong style="color: #ff0000;">ANDROID FU#KER PANEL</strong> is available!
        </p>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Open WhatsApp
    window.open('https://wa.me/94713159199?text=Hi, please notify me when ANDROID FU#KER PANEL is available!', '_blank');
}

// Start mini countdown on page load
startMiniCountdown();
