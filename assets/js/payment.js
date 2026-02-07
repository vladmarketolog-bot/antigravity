// --- CONFIGURATION ---
const PAYMENT_LINK = "https://merch.tochka.com/order/?uuid=78b849cc-0352-4ffb-abdf-ed8017b21bf2";
const EMAIL_SERVICE_URL = "https://formsubmit.co/ajax/vlk-9494@yandex.ru";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbywidUlqB9KdP1dVo_8soPyd3z1R-6eTc9QXkK38dy0c_vx19RGO40SMDWsCcQysT0-/exec";
// ---------------------

function initiatePayment() {
    const modal = document.getElementById('payment-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
    const modal = document.getElementById('payment-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") closePaymentModal();
});

async function submitPaymentForm(event) {
    event.preventDefault();

    const name = document.getElementById('client-name').value;
    const email = document.getElementById('client-email').value;
    const telegram = document.getElementById('client-telegram').value;
    const btn = document.getElementById('modal-pay-button');

    // UI Loading State
    btn.disabled = true;
    btn.innerText = 'Перенаправление...';
    btn.classList.add('opacity-75', 'cursor-not-allowed');

    // Prepare Data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("telegram", telegram);

    // Analytics & Metadata
    formData.append("Browser", navigator.userAgent);
    formData.append("Screen", `${window.screen.width}x${window.screen.height}`);
    formData.append("Language", navigator.language);
    formData.append("Timezone", Intl.DateTimeFormat().resolvedOptions().timeZone);
    formData.append("LocalTime", new Date().toLocaleString());
    formData.append("Page", window.location.href);
    formData.append("Referrer", document.referrer || "Direct");

    // UTM Parameters
    const urlParams = new URLSearchParams(window.location.search);
    const utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    utmFields.forEach(field => formData.append(field, urlParams.get(field) || ''));

    formData.append("_subject", "Новая заявка (Antigravity Lab)");
    formData.append("_captcha", "false");

    // Redirection Logic (ensures we always redirect)
    let redirected = false;
    const doRedirect = () => {
        if (!redirected) {
            redirected = true;
            window.location.href = PAYMENT_LINK;
        }
    };

    // Safety Timeout (2.5s)
    setTimeout(() => {
        if (!redirected) doRedirect();
    }, 2500);

    const promises = [];

    // 1. Send Email (FormSubmit)
    promises.push(
        fetch(EMAIL_SERVICE_URL, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).catch(e => console.error("Email error:", e))
    );

    // 2. Send to Google Sheets
    if (GOOGLE_SCRIPT_URL) {
        const googleParams = new URLSearchParams();
        for (const pair of formData.entries()) {
            googleParams.append(pair[0], pair[1]);
        }
        promises.push(
            fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: googleParams
            }).catch(e => console.error("Sheets error:", e))
        );
    }

    // Wait for all requests or timeout
    Promise.allSettled(promises).then(() => doRedirect());
}
