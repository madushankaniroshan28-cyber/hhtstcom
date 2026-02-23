// Floating particles effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
        overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            bottom: -10px;
            left: ${startX}px;
            opacity: ${Math.random() * 0.5 + 0.2};
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.8);
            animation: floatUp ${duration}s linear ${delay}s infinite;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.5;
        }
        90% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

createParticles();

// Add glow orbs
function createGlowOrbs() {
    const orbsContainer = document.createElement('div');
    orbsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.insertBefore(orbsContainer, document.body.firstChild);

    for (let i = 0; i < 5; i++) {
        const orb = document.createElement('div');
        const size = Math.random() * 300 + 200;
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const duration = Math.random() * 30 + 20;
        
        orb.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
            border-radius: 50%;
            left: ${startX}px;
            top: ${startY}px;
            filter: blur(40px);
            animation: orbFloat ${duration}s ease-in-out infinite;
            animation-delay: ${i * 2}s;
        `;
        
        orbsContainer.appendChild(orb);
    }
}

const orbStyle = document.createElement('style');
orbStyle.textContent = `
    @keyframes orbFloat {
        0%, 100% {
            transform: translate(0, 0) scale(1);
        }
        25% {
            transform: translate(100px, -100px) scale(1.2);
        }
        50% {
            transform: translate(-50px, 100px) scale(0.8);
        }
        75% {
            transform: translate(-100px, -50px) scale(1.1);
        }
    }
`;
document.head.appendChild(orbStyle);

createGlowOrbs();

// Add mouse trail effect
let mouseTrail = [];
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 5px;
        height: 5px;
        background: white;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        animation: trailFade 0.5s ease-out forwards;
    `;
    document.body.appendChild(trail);
    
    setTimeout(() => trail.remove(), 500);
});

const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% {
            transform: scale(1);
            opacity: 0.8;
        }
        100% {
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(trailStyle);
