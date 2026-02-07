const axios = require('axios');
require('dotenv').config();

const TOCHKA_TOKEN = process.env.TOCHKA_TOKEN;
// Note: URLs might differ for sandbox vs production. 
// Standard URL from docs for Get Customers/Retailers usually under /uapi/open-banking/v1.0 or similar
// But we used acquiring/v1.0 for payments.
// Let's try the base Open Banking URL for customers as implied by docs "Get Customers List" which is usually separate.
// If unsure, we try both or common base. 
// Common base: https://enter.tochka.com/uapi/open-banking/v1.0/customers
const API_BASE = 'https://enter.tochka.com/uapi/open-banking/v1.0';

async function checkSettings() {
    if (!TOCHKA_TOKEN || TOCHKA_TOKEN.includes('your_jwt')) {
        console.error('❌ ОШИБКА: Сначала вставьте ваш TOCHKA_TOKEN в файл .env!');
        return;
    }

    console.log('🔄 Запрашиваем данные у Точка Банка...');

    try {
        // 1. Get Customers
        console.log('\n--- 1. Список Клиентов (Customer Code) ---');
        try {
            const customersRes = await axios.get(`${API_BASE}/customers`, {
                headers: { 'Authorization': `Bearer ${TOCHKA_TOKEN}` }
            });

            const customers = customersRes.data.Data.Customers;
            if (customers && customers.length > 0) {
                customers.forEach(c => {
                    console.log(`✅ Найдена организация: ${c.name}`);
                    console.log(`   Customer Code: ${c.customerCode}`);
                    console.log(`   (Вставьте этот код в .env как TOCHKA_CUSTOMER_CODE)`);
                });
            } else {
                console.log('⚠️ Клиенты не найдены.');
            }
        } catch (e) {
            console.error('Ошибка получения клиентов:', e.message);
        }

        // 2. Get Retailers (Merchant ID)
        console.log('\n--- 2. Эквайринг (Merchant ID) ---');
        try {
            // Retailers usually under acquiring API
            const retailersRes = await axios.get(`https://enter.tochka.com/uapi/acquiring/v1.0/retailers`, {
                headers: { 'Authorization': `Bearer ${TOCHKA_TOKEN}` }
            });

            const retailers = retailersRes.data.Data.retailers; // check case sensitivity in response
            if (retailers && retailers.length > 0) {
                retailers.forEach(r => {
                    console.log(`✅ Торговая точка: ${r.name} (URL: ${r.url})`);
                    console.log(`   Merchant ID: ${r.merchantId}`);
                    // console.log(`   (Может потребоваться, если у вас несколько точек)`);
                });
            } else {
                console.log('⚠️ Торговые точки не найдены. Вы подали заявку на Эквайринг?');
            }
        } catch (e) {
            console.error('Ошибка получения ритейлеров (возможно, нет доступа к эквайрингу):', e.message);
        }

    } catch (error) {
        console.error('❌ Общая ошибка соединения:', error.message);
    }
}

checkSettings();
