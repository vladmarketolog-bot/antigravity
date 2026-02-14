document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileBtn.querySelector('i').classList.remove('fa-xmark');
                mobileBtn.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    // 2. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 4. PageSpeed Animation
    const scoreElement = document.getElementById('pagespeed-score');
    if (scoreElement) {
        const scoreObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateScore(scoreElement, 99);
                    scoreObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        scoreObserver.observe(scoreElement.parentElement);
    }

    function animateScore(element, target) {
        let current = 0;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / target));

        const timer = setInterval(() => {
            current += 1;
            element.textContent = current;
            if (current >= target) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // 5. AI Chatbot Logic
    const chatToggle = document.getElementById('ai-chat-toggle');
    const chatBubble = document.getElementById('ai-chat-bubble');
    const closeChat = document.getElementById('close-chat');

    if (chatToggle && chatBubble) {
        // Toggle interaction
        chatToggle.addEventListener('click', () => {
            chatBubble.classList.toggle('hidden');
        });

        // Close button
        if (closeChat) {
            closeChat.addEventListener('click', (e) => {
                e.stopPropagation(); // prevent triggering toggle if nested
                chatBubble.classList.add('hidden');
            });
        }

        // Auto-open after 5 seconds
        setTimeout(() => {
            chatBubble.classList.remove('hidden');
        }, 5000);
    }

    // 6. Form Submission (AJAX)
    const form = document.getElementById('leadForm');
    const successMsg = document.getElementById('form-success');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const btn = form.querySelector('button');
            const btnText = form.querySelector('.btn-text');
            const loadingIcon = form.querySelector('.loading-icon');

            // Loading State
            btnText.classList.add('hidden');
            loadingIcon.classList.remove('hidden');
            btn.disabled = true;

            const formData = new FormData(form);

            fetch('https://formsubmit.co/ajax/vlk-9494@yandex.ru', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success === "true" || data.success === true) {
                        // Success State
                        successMsg.classList.remove('hidden');
                        successMsg.classList.add('flex'); // Ensure flex display for centering
                        form.reset();
                    } else {
                        alert('Ошибка отправки. Пожалуйста, напишите в Telegram: @vladmarketolog');
                        resetBtn();
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Ошибка отправки. Пожалуйста, напишите в Telegram: @vladmarketolog');
                    resetBtn();
                });

            function resetBtn() {
                btnText.classList.remove('hidden');
                loadingIcon.classList.add('hidden');
                btn.disabled = false;
            }
        });
    }

});
