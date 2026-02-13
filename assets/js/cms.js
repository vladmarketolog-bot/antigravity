/**
 * Antigravity CMS Client
 * Fetches content from Google Sheets Web App and updates the DOM.
 */

const CMS_CONFIG = {
    // Placeholder URL - User needs to provide the real one
    URL: 'https://script.google.com/macros/s/AKfycbzrqP4hdIFQlYSkFWHgvR7XTkG-jZ-EKMB0xy4agKJP6IGxmP_zi0honPU5f4t7EHcpvw/exec',
    STORAGE_KEY: 'antigravity_cms_data',
    CACHE_TIME: 1000 * 60 * 5 // 5 minutes cache
};

async function initCMS() {
    console.log('Creating CMS connection...');

    if (!CMS_CONFIG.URL) {
        console.warn('CMS URL not configured. Using default content.');
        return;
    }

    try {
        // Try to get from cache first to avoid flashing
        const cached = localStorage.getItem(CMS_CONFIG.STORAGE_KEY);
        if (cached) {
            const { timestamp, data } = JSON.parse(cached);
            if (Date.now() - timestamp < CMS_CONFIG.CACHE_TIME) {
                applyCMSData(data);
                // Fetch fresh data in background
                fetchAndApply(false);
                return;
            }
        }

        // Fetch fresh data
        await fetchAndApply(true);

    } catch (error) {
        console.error('CMS Error:', error);
    }
}

async function fetchAndApply(shouldApply) {
    const response = await fetch(CMS_CONFIG.URL);
    const data = await response.json();

    // Cache the data
    localStorage.setItem(CMS_CONFIG.STORAGE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data: data
    }));

    if (shouldApply) {
        applyCMSData(data);
    }
}

function applyCMSData(data) {
    const elements = document.querySelectorAll('[data-cms]');

    elements.forEach(el => {
        const key = el.getAttribute('data-cms');
        if (data[key]) {
            // Check if content is actually different to avoid unnecessary repaints
            if (el.innerHTML !== data[key]) {
                // Simple text replace, but keeps HTML tags if they were in the sheet
                el.innerHTML = data[key];
                el.classList.add('cms-updated');

                // Add a subtle flash effect
                el.style.transition = 'color 0.5s ease';
                const originalColor = window.getComputedStyle(el).color;
                el.style.color = '#00FFFF'; // Accent color flash
                setTimeout(() => {
                    el.style.color = originalColor;
                }, 500);
            }
        }
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initCMS);
