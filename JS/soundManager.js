// ===== Sound Effects Manager =====
// Handles button hover and click sound effects using Web Audio API
// Fixed: Proper browser-compliant audio context initialization

class SoundManager {
    constructor() {
        this.audioContext = null;
        this.isMuted = false;
        this.soundVolume = 0.3;
        this.isInitialized = false;
        this.lastSoundTime = 0;
        this.minSoundInterval = 50; // Minimum milliseconds between sounds
        
        // Wait for first user interaction before initializing audio context
        this.setupInitializationTriggers();
    }

    // Setup listeners for first user interaction to initialize audio context
    setupInitializationTriggers() {
        const events = ['click', 'mousedown', 'touchstart', 'keydown'];
        
        events.forEach(event => {
            document.addEventListener(event, () => {
                if (!this.isInitialized) {
                    this.initAudioContext();
                }
            }, { once: true });
        });
    }

    // Initialize Web Audio API context (must be called after user interaction)
    initAudioContext() {
        if (this.isInitialized) return;

        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioContext = new AudioContext();
                
                // Resume audio context if suspended (required for browsers with autoplay restrictions)
                if (this.audioContext.state === 'suspended') {
                    this.audioContext.resume().catch(err => {
                        console.log('Audio context resume failed:', err);
                    });
                }
                
                this.isInitialized = true;
                console.log('Audio context initialized successfully');
            }
        } catch (e) {
            console.log('Audio context initialization error:', e);
        }
    }

    // Play hover sound effect (higher pitched pleasant beep)
    playHoverSound() {
        if (this.isMuted || !this.isInitialized || !this.audioContext) return;
        
        // Debounce sounds to prevent overlapping
        const now = Date.now();
        if (now - this.lastSoundTime < this.minSoundInterval) return;
        this.lastSoundTime = now;

        try {
            // Ensure audio context is running
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            const currentTime = this.audioContext.currentTime;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            // Hover sound: High-pitched, pleasant beep (ascending)
            oscillator.frequency.setValueAtTime(1200, currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1400, currentTime + 0.06);
            
            gainNode.gain.setValueAtTime(this.soundVolume * 0.7, currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + 0.06);

            oscillator.type = 'sine';
            oscillator.start(currentTime);
            oscillator.stop(currentTime + 0.06);
            
            // Clean up after sound finishes
            oscillator.onended = () => {
                oscillator.disconnect();
                gainNode.disconnect();
            };
        } catch (e) {
            console.log('Hover sound error:', e);
        }
    }

    // Play click sound effect (higher pitched pleasant beep)
    playClickSound() {
        if (this.isMuted || !this.isInitialized || !this.audioContext) return;
        
        // Debounce sounds to prevent overlapping
        const now = Date.now();
        if (now - this.lastSoundTime < this.minSoundInterval) return;
        this.lastSoundTime = now;

        try {
            // Ensure audio context is running
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            const currentTime = this.audioContext.currentTime;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            // Click sound: Higher-pitched, pleasant beep (descending slightly)
            oscillator.frequency.setValueAtTime(1600, currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1300, currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(this.soundVolume * 0.6, currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + 0.1);

            oscillator.type = 'sine';
            oscillator.start(currentTime);
            oscillator.stop(currentTime + 0.1);
            
            // Clean up after sound finishes
            oscillator.onended = () => {
                oscillator.disconnect();
                gainNode.disconnect();
            };
        } catch (e) {
            console.log('Click sound error:', e);
        }
    }

    // Toggle sound on/off
    toggleSound() {
        this.isMuted = !this.isMuted;
        return !this.isMuted;
    }

    // Set volume (0 to 1)
    setVolume(volume) {
        this.soundVolume = Math.max(0, Math.min(1, volume));
    }

    // Get current mute status
    isSoundEnabled() {
        return !this.isMuted;
    }
}

// Create global sound manager instance
const soundManager = new SoundManager();

// ===== Auto-attach sound effects to all buttons =====
document.addEventListener('DOMContentLoaded', function() {
    // Attach sound effects to all buttons
    attachSoundEffects();
    
    // Create and inject sound control button
    createSoundToggleButton();
    
    // Re-attach sounds if new elements are added dynamically
    const observer = new MutationObserver(() => {
        attachSoundEffects();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Function to attach sound effects to interactive elements
function attachSoundEffects() {
    // Target all interactive elements
    const selectors = 'button, a[role="button"], .btn, .cta-primary, .cta-secondary, .suggestion-item, [onclick]';
    const elements = document.querySelectorAll(selectors);
    
    elements.forEach(element => {
        // Check if already has listeners attached
        if (element.dataset.soundAttached) return;
        element.dataset.soundAttached = 'true';
        
        // Hover sound
        element.addEventListener('mouseenter', function(e) {
            // Prevent sound if hovering a disabled element
            if (!this.disabled) {
                soundManager.playHoverSound();
            }
        });

        // Click sound
        element.addEventListener('click', function() {
            soundManager.playClickSound();
        });
    });
}

// ===== Create Sound Control Button =====
function createSoundToggleButton() {
    // Don't create if already exists
    if (document.getElementById('soundToggle')) return;
    
    const soundToggle = document.createElement('div');
    soundToggle.id = 'soundToggle';
    soundToggle.className = 'sound-toggle-btn';
    soundToggle.innerHTML = '🔊';
    soundToggle.title = 'Click to toggle sound effects';
    soundToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        z-index: 1000;
        font-weight: bold;
        border: none;
        outline: none;
    `;

    soundToggle.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
    });

    soundToggle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });

    soundToggle.addEventListener('click', function() {
        const isEnabled = soundManager.toggleSound();
        this.innerHTML = isEnabled ? '🔊' : '🔇';
        this.style.background = isEnabled 
            ? 'linear-gradient(135deg, #4CAF50, #45a049)' 
            : 'linear-gradient(135deg, #999, #777)';
        
        // Play a confirmation sound when toggling
        if (isEnabled) {
            soundManager.playClickSound();
        }
    });

    document.body.appendChild(soundToggle);
}
