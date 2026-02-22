// Initialize Lucide icons
lucide.createIcons();

// --- Theme Management ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(icon => {
        icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
    });
    lucide.createIcons();
}

// Initial session setup
initTheme();

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const bookingModal = document.getElementById('bookingModal');
const closeModals = document.querySelectorAll('.close-modal');
const loginForm = document.getElementById('loginForm');
const mainContent = document.getElementById('mainContent');
const portalContent = document.getElementById('portalContent');

// --- Navigation & Modal Logic ---

function openModal(modal) {
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

loginBtn?.addEventListener('click', () => openModal(loginModal));

closeModals.forEach(btn => {
    btn.addEventListener('click', () => {
        closeModal(loginModal);
        closeModal(bookingModal);
    });
});

// Header and Scroll Spy Logic
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header-nav a');

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    let current = '';
    const scrollY = window.pageYOffset;

    // Header padding/shadow effect
    if (scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '0';
        header.style.boxShadow = 'none';
        current = 'home'; // Default to home when at top
    }

    // Scroll Spy: Find active section
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150; // Offset for header height
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    // Update active class
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        if (href === current || (current === 'home' && (link.getAttribute('href') === '#' || link.getAttribute('href') === ''))) {
            link.classList.add('active');
        }
    });
});

// Crisis / Emergency Help Logic
function initCrisisHelp() {
    const crisisButton = document.createElement('button');
    crisisButton.id = 'crisisBtn';
    crisisButton.innerHTML = '<i data-lucide="alert-circle" size="18"></i> Need Urgent Help?';
    crisisButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #e36159;
        color: #fff;
        border: none;
        padding: 12px 25px;
        border-radius: 50px;
        font-weight: 700;
        font-size: 13px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 10px 30px rgba(227,97,89,0.3);
        z-index: 10001;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;

    crisisButton.onmouseover = () => crisisButton.style.transform = 'scale(1.05)';
    crisisButton.onmouseout = () => crisisButton.style.transform = 'scale(1)';
    crisisButton.onclick = showCrisisModal;

    document.body.appendChild(crisisButton);

    // Crisis Modal Structure
    const modal = document.createElement('div');
    modal.id = 'crisisModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-inner" style="max-width: 500px; border-top: 8px solid #e36159; padding: 40px; text-align: center;">
            <span class="close-crisis" style="position: absolute; top: 20px; right: 20px; cursor: pointer; font-size: 24px;">&times;</span>
            <div style="background: #fdf2f2; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                <i data-lucide="phone-forwarded" color="#e36159" size="30"></i>
            </div>
            <h2 style="color: #e36159; margin-bottom: 20px;">Urgent <strong>Clinical Help</strong></h2>
            <p style="font-size: 14px; line-height: 1.6; color: #444; margin-bottom: 30px;">
                If you are in immediate danger or experiencing a life-threatening crisis, please use the following resources immediately.
            </p>
            
            <div style="background: #f4f4f4; padding: 25px; border-radius: 8px; margin-bottom: 25px; border: 1px solid #ddd;">
                <p style="font-weight: 800; color: #444; margin-bottom: 5px;">Toll-Free Crisis Hotline</p>
                <h2 style="margin: 10px 0; color: #e36159; font-size: 32px;">0800 202 791</h2>
                <p style="font-size: 12px; color: #777;">Available 24/7 across all networks in Uganda</p>
            </div>

            <div style="text-align: left; font-size: 13px; color: #666; border-left: 4px solid #eee; padding-left: 15px; margin-bottom: 30px;">
                <p style="font-weight: 700; color: #444;">Emergency Instructions:</p>
                <ul style="padding-left: 20px; list-style: disc;">
                    <li>Call the toll-free number above immediately.</li>
                    <li>Go to the nearest hospital emergency room.</li>
                    <li>If you are in danger, contact the Uganda Police Force (999/112).</li>
                </ul>
            </div>

            <p style="font-size: 11px; color: #999; font-style: italic;">Note: CareConnect Uganda is a counseling platform and does not replace emergency medical or police services.</p>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close-crisis');
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

    lucide.createIcons();
}

function showCrisisModal() {
    document.getElementById('crisisModal').style.display = 'flex';
}

// Language Selection Logic
function initLanguageSelector() {
    const langSelect = document.createElement('div');
    langSelect.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        z-index: 10000;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 50px;
        padding: 5px;
        display: flex;
        gap: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    `;

    const btnStyle = (active) => `
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: ${active ? 'var(--porto-primary)' : 'transparent'};
        color: ${active ? '#fff' : '#666'};
    `;

    langSelect.innerHTML = `
        <button id="langEn" style="${btnStyle(true)}">English</button>
        <button id="langLu" style="${btnStyle(false)}">Luganda</button>
    `;

    document.body.appendChild(langSelect);

    const btnEn = document.getElementById('langEn');
    const btnLu = document.getElementById('langLu');

    btnEn.onclick = () => {
        btnEn.style.cssText = btnStyle(true);
        btnLu.style.cssText = btnStyle(false);
        alert('Language switched to English. Standard platform content applied.');
    };

    btnLu.onclick = () => {
        btnLu.style.cssText = btnStyle(true);
        btnEn.style.cssText = btnStyle(false);
        alert('Olulimi lwakyusiddwa okuva mu Lungereza okudda mu Luganda. (Language switched to Luganda). Initial translations applied.');
    };
}

// Session Feedback Logic
function showFeedbackForm() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'feedbackModal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-inner" style="max-width: 450px; padding: 40px; text-align: center;">
            <h2 style="margin-bottom: 10px;">Session <strong>Feedback</strong></h2>
            <p style="font-size: 14px; color: #666; margin-bottom: 30px;">How was your experience with the specialist today?</p>
            
            <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 25px;">
                ${[1, 2, 3, 4, 5].map(i => `<i data-lucide="star" class="feedback-star" data-val="${i}" style="cursor: pointer; color: #ddd;"></i>`).join('')}
            </div>

            <textarea placeholder="Tell us more about the session (optional)..." style="width: 100%; height: 100px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 25px; font-family: inherit; font-size: 14px;"></textarea>
            
            <button class="btn-porto" style="width: 100%;" onclick="submitFeedback()">Submit Review</button>
        </div>
    `;
    document.body.appendChild(modal);
    lucide.createIcons();

    // Star interaction logic
    modal.querySelectorAll('.feedback-star').forEach(star => {
        star.onclick = function () {
            const val = this.getAttribute('data-val');
            modal.querySelectorAll('.feedback-star').forEach(s => {
                s.style.color = s.getAttribute('data-val') <= val ? '#ffc107' : '#ddd';
                s.setAttribute('fill', s.getAttribute('data-val') <= val ? '#ffc107' : 'none');
            });
        };
    });
}

function submitFeedback() {
    alert('Thank you for your feedback! This helps us maintain high clinical standards at CareConnect Uganda.');
    document.getElementById('feedbackModal').remove();
    window.location.href = 'dashboard.html';
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(loginModal);
        closeModal(bookingModal);
    }
});

// --- Auth Simulation ---

loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('userLoggedIn', 'true');
    showPortal();
    closeModal(loginModal);
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function logout() {
    localStorage.removeItem('userLoggedIn');
    showHome();
}

function showPortal() {
    if (mainContent) mainContent.style.display = 'none';
    if (portalContent) portalContent.style.display = 'block';

    // Smooth transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
    lucide.createIcons();
}

function showHome() {
    if (mainContent) mainContent.style.display = 'block';
    if (portalContent) portalContent.style.display = 'none';

    window.location.reload(); // Hard reset for clean state
}

// --- Booking Simulation ---

function showBooking() {
    openModal(bookingModal);
}

function selectType(type) {
    console.log(`Selected session: ${type}`);
    // Visual feedback for Porto buttons
    const btns = document.querySelectorAll('.modal-inner .btn-porto');
    btns.forEach(btn => {
        btn.style.background = '#fff';
        btn.style.color = 'var(--porto-primary)';
        if (btn.innerText.includes(type)) {
            btn.style.background = 'var(--porto-primary)';
            btn.style.color = '#fff';
        }
    });
}

function nextBookingStep(step) {
    alert("Moving to next step: Detailed Patient Intake (Simulation)");
    closeModal(bookingModal);
}

// --- Clinical Referral System ---

function showReferralModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'referralModal';
    modal.style.display = 'flex';
    modal.style.zIndex = '10002'; // Above session header

    modal.innerHTML = `
        <div class="modal-inner" style="max-width: 500px; padding: 40px; border-top: 5px solid #0d9488;">
            <span class="close-modal" onclick="document.getElementById('referralModal').remove()" style="float: right; cursor: pointer;">&times;</span>
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px;">
                <div style="background: #e0f2f1; color: #0d9488; padding: 10px; border-radius: 8px;"><i data-lucide="user-plus" size="24"></i></div>
                <h3 style="margin: 0;">Clinical <strong>Referral</strong></h3>
            </div>
            
            <p style="font-size: 14px; color: #666; margin-bottom: 25px;">Select a specialist to refer this client for specialized support.</p>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; font-weight: 700; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; color: #888;">Target Specialist</label>
                <select id="referTarget" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
                    <option value="1">Mr. Kamuze Jonathan (Family Support)</option>
                    <option value="2">Mrs. Calamus (Certified Social Worker)</option>
                    <option value="3">Kirungi Elmos (Children & Youth)</option>
                    <option value="4">Mr. Bwayo Ivan</option>
                    <option value="5">Mrs. Nankya Florence</option>
                    <option value="6">Mr. Kiseka Vicente</option>
                    <option value="7">Mr. SSebuyungo Marvin</option>
                    <option value="8">Mr. Ssekayiba Martin</option>
                    <option value="9">Kirabo Vicky</option>
                </select>
            </div>

            <div style="margin-bottom: 25px;">
                <label style="display: block; font-weight: 700; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; color: #888;">Clinical Reason / Notes</label>
                <textarea id="referNotes" placeholder="Explain the reason for referral (e.g., child protection requirement, specialized trauma care)..." 
                    style="width: 100%; height: 120px; padding: 15px; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; font-size: 14px;"></textarea>
            </div>

            <div style="display: flex; gap: 15px;">
                <button class="btn-porto" style="flex: 1; background: #444;" onclick="document.getElementById('referralModal').remove()">Cancel</button>
                <button class="btn-porto" style="flex: 2;" onclick="submitReferral()">Complete Referral</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    lucide.createIcons();
}

function submitReferral() {
    const target = document.getElementById('referTarget').options[document.getElementById('referTarget').selectedIndex].text;
    const notes = document.getElementById('referNotes').value;

    if (!notes) {
        alert('Please provide a clinical reason for the referral.');
        return;
    }

    alert(`Clinical Referral Successfully Initiated!\n\nTarget: ${target}\nStatus: Specialist notified. Referral document generated in patient record.`);
    document.getElementById('referralModal').remove();
}

// --- Low-Data Session & Notifications ---

function toggleSessionMode(mode) {
    const isLowData = mode === 'audio' || mode === 'chat';

    // UI Updates for session.html
    const typeTag = document.getElementById('sessionTypeTag');
    const visualizer = document.getElementById('audioVisualizer');

    // Mode Button Highlighting
    const modes = ['video', 'audio', 'chat'];
    modes.forEach(m => {
        const btn = document.getElementById(`modeBtn-${m}`);
        if (btn) {
            if (m === mode) {
                btn.style.background = '#1890ff'; // Active Blue
            } else {
                btn.style.background = '#444'; // Inactive Gray
            }
        }
    });

    if (typeTag) {
        typeTag.innerText = `${mode.toUpperCase()} CONNECTED`;
    }

    if (visualizer) {
        const participantPhotos = `
            <div style="display: flex; gap: 40px; align-items: center; margin-bottom: 30px;">
                <!-- Client -->
                <div style="text-align: center;">
                    <div style="width: 100px; height: 100px; background: #eee; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #ddd; margin-bottom: 10px;">
                        <i data-lucide="user" size="50" color="#aaa"></i>
                    </div>
                    <p style="font-size: 12px; font-weight: 700; color: #fff; margin: 0;">John Doe (Client)</p>
                </div>
                
                <div style="color: #666;"><i data-lucide="arrow-left-right" size="24"></i></div>

                <!-- Specialist -->
                <div style="text-align: center;">
                    <div style="width: 100px; height: 100px; background: #e0f2f1; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #0d9488; margin-bottom: 10px;">
                        <i data-lucide="user-check" size="50" color="#0d9488"></i>
                    </div>
                    <p style="font-size: 12px; font-weight: 700; color: #fff; margin: 0;">Mr. Kamuze (Specialist)</p>
                </div>
            </div>
        `;

        if (mode === 'video') {
            visualizer.innerHTML = `
                <div style="width: 400px; height: 250px; background: #333; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px solid #1890ff;">
                    <i data-lucide="video" size="50" color="#1890ff"></i>
                    <p style="position: absolute; bottom: 10px; font-size: 12px; color: #888;">Live Video Feed Enabled</p>
                </div>
                <h3 style="color: #fff; margin-top: 20px;">Video Session Active</h3>
                <p style="color: #666; font-size: 14px;">Mr. Kamuze Jonathan can see you.</p>
            `;
        } else if (mode === 'audio') {
            visualizer.innerHTML = `
                ${participantPhotos}
                <div style="display: flex; items-center; gap: 10px; background: #0d94881a; padding: 10px 20px; border-radius: 50px; border: 1px solid #0d9488; animation: pulse 2s infinite;">
                    <i data-lucide="mic" size="18" color="#0d9488"></i>
                    <span style="color: #0d9488; font-size: 13px; font-weight: 700;">Audio Active</span>
                </div>
                <p style="color: #666; font-size: 14px; margin-top: 15px;">Secure therapeutic conversation active.</p>
            `;
        } else if (mode === 'chat') {
            visualizer.innerHTML = `
                ${participantPhotos}
                <div style="display: flex; items-center; gap: 10px; background: #333; padding: 10px 20px; border-radius: 50px; border: 1px solid #444;">
                    <i data-lucide="message-square" size="18" color="#aaa"></i>
                    <span style="color: #aaa; font-size: 13px; font-weight: 700;">Chat Only Mode</span>
                </div>
                <p style="color: #666; font-size: 14px; margin-top: 15px;">Focus on secure written clinical dialogue.</p>
            `;
        }
        lucide.createIcons();
    }

    console.log(`Session switched to ${mode.toUpperCase()} mode.`);
}

function toggleMic() {
    const btn = document.getElementById('micToggleBtn');
    const icon = document.getElementById('micToggleIcon');

    if (!btn || !icon) return;

    const isMuted = btn.style.background === 'rgb(227, 97, 89)' || btn.style.background === '#e36159';

    if (isMuted) {
        btn.style.background = '#444';
        icon.setAttribute('data-lucide', 'mic');
        console.log("Microphone Unmuted");
    } else {
        btn.style.background = '#e36159';
        icon.setAttribute('data-lucide', 'mic-off');
        console.log("Microphone Muted");
    }
    lucide.createIcons();
}

function updateVolume(val) {
    const icon = document.getElementById('volumeIcon');
    if (!icon) return;

    if (val == 0) {
        icon.setAttribute('data-lucide', 'volume-x');
        icon.style.color = '#e36159';
    } else if (val < 50) {
        icon.setAttribute('data-lucide', 'volume-1');
        icon.style.color = '#888';
    } else {
        icon.setAttribute('data-lucide', 'volume-2');
        icon.style.color = '#0d9488';
    }

    console.log(`System volume set to: ${val}%`);
    lucide.createIcons();
}

// --- Clinical Chat System (WhatsApp Style) ---

function handleChatSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('chatInput');
    const container = document.getElementById('chatMessages');
    if (!input || !input.value.trim()) return;

    const msgText = input.value.trim();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Create Outgoing Bubble
    const outMsg = document.createElement('div');
    outMsg.style.alignSelf = 'flex-end';
    outMsg.style.maxWidth = '85%';
    outMsg.innerHTML = `
        <div style="background: #0d9488; color: #fff; padding: 12px 16px; border-radius: 15px 15px 0 15px; font-size: 13px; line-height: 1.5; box-shadow: 0 2px 5px rgba(0,0,0,0.1); position: relative;">
            ${msgText}
            <div style="text-align: right; font-size: 9px; color: #e0f2f1; margin-top: 5px;">${time} ✓✓</div>
        </div>
    `;

    container.appendChild(outMsg);
    input.value = '';
    container.scrollTop = container.scrollHeight;

    // Simulate Specialist Response
    setTimeout(() => {
        const inMsg = document.createElement('div');
        inMsg.style.alignSelf = 'flex-start';
        inMsg.style.maxWidth = '85%';
        inMsg.innerHTML = `
            <p style="font-size: 11px; color: #aaa; margin: 0 0 5px 5px; font-weight: 700;">Mr. Kamuze</p>
            <div style="background: #333; color: #fff; padding: 12px 16px; border-radius: 0 15px 15px 15px; font-size: 13px; line-height: 1.5; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                Thank you for sharing that. Let's explore those feelings further.
                <div style="text-align: right; font-size: 9px; color: #888; margin-top: 5px;">${time}</div>
            </div>
        `;
        container.appendChild(inMsg);
        container.scrollTop = container.scrollHeight;
        lucide.createIcons();
    }, 1500);
}

function sendSessionReminder(clientName, time) {
    console.log(`[SIMULATION] Sending SMS to ${clientName}: "Reminder: Your session at CareConnect starts in ${time}."`);
    console.log(`[SIMULATION] Sending Email to ${clientName}: "Appointment Confirmation & Link inside."`);
}

// --- Initialize ---

window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    if (localStorage.getItem('userLoggedIn') === 'true') {
        showPortal();
    }

    // Attach theme toggle listeners
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    lucide.createIcons();
});

// Smooth Scroll & Immediate Active State
document.querySelectorAll('.header-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Remove all active classes
        document.querySelectorAll('.header-nav a').forEach(link => link.classList.remove('active'));
        // Set this link as active
        this.classList.add('active');

        if (targetId === '#') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPos = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPos,
                behavior: 'smooth'
            });
        }
    });
});
