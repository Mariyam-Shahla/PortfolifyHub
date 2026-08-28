/* ==========================================================================
     FILE 3: script.js
     ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. MOBILE NAVIGATION HAMBURGER TOGGLE
       ========================================== */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburgerBtn.classList.toggle('open');
        });

        // Close mobile menu when any nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                hamburgerBtn.classList.remove('open');
            });
        });
    }

    /* ==========================================
       2. SMOOTH ACTIVE LINK HIGHLIGHT ON SCROLL
       ========================================== */
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.style.color = 'var(--teal)';
            } else {
                item.style.color = '';
            }
        });
    });

    /* ==========================================
       3. PRICING BUTTON SELECTOR AUTO-FILL INQUIRY
       ========================================== */
    const serviceSelectDropdown = document.getElementById('service');
    const pricingSelectButtons = document.querySelectorAll('[data-service-select]');

    if (serviceSelectDropdown && pricingSelectButtons.length > 0) {
        pricingSelectButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const serviceName = button.getAttribute('data-service-select');
                for (let i = 0; i < serviceSelectDropdown.options.length; i++) {
                    if (serviceSelectDropdown.options[i].value === serviceName) {
                        serviceSelectDropdown.selectedIndex = i;
                        break;
                    }
                }
            });
        });
    }

    /* ==========================================
       4. SIMPLE SUBMISSION FEEDBACK HANDLER
       ========================================== */
    const inquiryForm = document.getElementById('inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            // Note: Using standard mailto action as specified in requirements.
            // You can easily plug in an async backend fetch here later when required.
            const submitBtn = inquiryForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                setTimeout(() => {
                    submitBtn.textContent = 'Inquiry Prepared! Opening Mail Client...';
                    submitBtn.style.backgroundColor = '#16A34A';
                }, 200);
            }
        });
    }

});

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active state from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active state to clicked button
            button.classList.add('active');

            // Show corresponding target pane
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});