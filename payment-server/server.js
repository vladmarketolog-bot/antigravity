const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());

// Serve all static files from the parent directory (frontend)
app.use(express.static(path.join(__dirname, '../')));

// Serve specific static files from parent directory (explicit routes)
app.get('/success.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../success.html'));
});

app.get('/fail.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../fail.html'));
});

const PORT = process.env.PORT || 3000;

// Configuration from environment variables
const TOCHKA_TOKEN = process.env.TOCHKA_TOKEN;
const TOCHKA_BASE_URL = process.env.TOCHKA_BASE_URL || 'https://enter.tochka.com/uapi/acquiring/v1.0';

/**
 * Endpoint to create a payment link
 * POST /create-payment
 * Body: { email: 'client@example.com', name: 'Иван Иванов' }
 */
app.post('/create-payment', async (req, res) => {
    try {
        const { email, name } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Configuration from env
        const customerCode = process.env.TOCHKA_CUSTOMER_CODE;
        const taxSystemCode = process.env.TAX_SYSTEM_CODE || 'osn'; // Default to OSN if not set

        if (!customerCode) {
            return res.status(500).json({ error: 'Server configuration error: TOCHKA_CUSTOMER_CODE is missing' });
        }

        // Prepare the payment request payload
        // Documentation: Create Payment Operation With Receipt (API v1.0)
        const payload = {
            customerCode: customerCode,
            amount: 10000, // 10,000 RUB
            purpose: "Оплата участия в закрытом клубе Antigravity Lab (1 месяц)",
            redirectUrl: process.env.REDIRECT_URL,
            failRedirectUrl: process.env.FAIL_REDIRECT_URL,
            paymentMode: ["card", "tinkoff", "sbp", "dolyame"], // All available methods
            saveCard: false,
            // merchantId: process.env.TOCHKA_MERCHANT_ID, // Optional if only one merchant
            taxSystemCode: taxSystemCode,
            Client: {
                email: email,
                name: name || "Участник Клуба", // Fallback if name is not provided
                // phone: "+79990000000" // Optional
            },
            Items: [
                {
                    name: "Доступ в закрытый клуб Antigravity Lab",
                    amount: 10000,
                    quantity: 1,
                    vatType: "none", // No VAT
                    paymentMethod: "full_payment",
                    paymentObject: "service",
                    measure: "шт."
                }
            ]
        };

        console.log('Sending request to Tochka:', payload);

        // Call Tochka Bank API
        // Correct endpoint for v1.0 payment with receipt
        const response = await axios.post(`${process.env.TOCHKA_BASE_URL}/payments_with_receipt`, payload, {
            headers: {
                'Authorization': `Bearer ${TOCHKA_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Tochka API response:', response.data);

        // The API returns 'paymentLink' in the Data object usually, based on docs:
        // Response schema: { Data: { paymentLink: "..." } }
        // But let's handle if it returns directly or strictly wrapped.
        // Documentation says "Successful Response Schema -> Data object required".

        const paymentData = response.data.Data || response.data; // Flexible handling

        if (paymentData && paymentData.paymentLink) {
            res.json({ url: paymentData.paymentLink, operationId: paymentData.operationId });
        } else {
            console.error('Unexpected response structure:', response.data);
            res.status(502).json({ error: 'Received unexpected response from bank', details: response.data });
        }

    } catch (error) {
        console.error('Error creating payment:', error.response ? error.response.data : error.message);
        res.status(500).json({
            error: 'Failed to create payment link',
            details: error.response ? error.response.data : error.message
        });
    }
});

// Webhook endpoint to receive payment status updates
app.post('/webhook/payment', (req, res) => {
    // Verify signature if applicable (Tochka usually signs webhooks)
    const data = req.body;

    console.log('Received webhook:', data);

    if (data.event === 'acquiringInternetPayment' && data.status === 'APPROVED') {
        // Payment successful!
        // TODO: Update your database, grant access to the user, send email, etc.
        console.log(`Payment approved for Operation ID: ${data.operationId}`);
    }

    res.status(200).send('OK');
});

// Helper to get retailers (useful for debugging setup)
app.get('/retailers', async (req, res) => {
    try {
        const response = await axios.get(`${TOCHKA_BASE_URL}/retailers`, {
            headers: { 'Authorization': `Bearer ${TOCHKA_TOKEN}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Payment server running on http://localhost:${PORT}`);
});
