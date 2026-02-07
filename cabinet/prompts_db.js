const PROMPTS_DB = [
    // ==========================================
    // BUSINESS & SALES
    // ==========================================
    {
        id: "biz_1",
        category: "business",
        tags: ["Продажи", "Оффер", "Стратегия"],
        icon: "fa-briefcase",
        color: "text-blue-400",
        bg: "bg-blue-500/20",
        title: "Генератор Офферов ($100M Leads)",
        description: "Создание неотразимого предложения (Grand Slam Offer) по методу Алекса Хормози. Идеально для упаковки продукта.",
        model: "Gemini 1.5 Pro",
        content: `Act as Alex Hormozi.
I need to create a Grand Slam Offer for my product.

Product Description: [INSERT PRODUCT HERE]

Your task:
1. Identify the Dream Outcome.
2. List obstacles.
3. Turn obstacles into solutions.
4. Add Scarcity/Urgency.
5. Add a "Crazy Guarantee".
6. Name the offer using the "Magic Headline" formula.

Output format: Markdown table.`
    },
    {
        id: "biz_2",
        category: "business",
        tags: ["Outreach", "Email", "B2B"],
        icon: "fa-handshake",
        color: "text-emerald-400",
        bg: "bg-emerald-500/20",
        title: "Cold Outreach (Холодные письма)",
        description: "Переписывает ваши черновики холодных писем, повышая открываемость и конверсию в ответ.",
        model: "Gemini 1.5 Flash",
        content: `You are a world-class Copywriter specializing in B2B Cold Outreach.
Review my current cold email draft below.

Draft: [INSERT DRAFT]

Goal: Increase open rate and reply rate.
Tone: Professional but conversational, concise (under 100 words), value-first.

Task:
1. Critique the subject line and propose 3 alternatives.
2. Rewrite the body to follow the "Hook-Value-CTA" framework.
3. Remove any "fluff" or "I hope this email finds you well" clichés.`
    },
    {
        id: "biz_3",
        category: "business",
        tags: ["Startup", "SaaS", "Idea"],
        icon: "fa-lightbulb",
        color: "text-pink-400",
        bg: "bg-pink-500/20",
        title: "SaaS Идеатор (Micro-SaaS)",
        description: "Генерирует идеи для Micro-SaaS на основе болей в конкретной нише. Помогает найти 'Голубой океан'.",
        model: "Gemini 1.5 Pro",
        content: `You are a Silicon Valley Product Manager and Market Analyst.
I want to build a Micro-SaaS in the [NICHE] industry.

Your task:
1. Analyze the current pain points in this niche that are solvable by AI.
2. Propose 3 Micro-SaaS ideas that can be built in 2 weeks (MVP).
3. For each idea, define:
   - The "Aha!" moment.
   - Core Feature (MVP).
   - Monetization strategy.

Constraints: Must be B2B. No complex legal compliances.`
    },
    {
        id: "biz_4",
        category: "business",
        tags: ["Юриспруденция", "Договоры", "Безопасность"],
        icon: "fa-gavel",
        color: "text-red-400",
        bg: "bg-red-500/20",
        title: "Юрист: Анализ Договора",
        description: "Находит скрытые риски и 'красные флаги' в юридических документах. Спасает от плохих контрактов.",
        model: "Gemini 1.5 Pro",
        content: `Act as a Senior Corporate Lawyer.
Review the attached contract clause for potential risks for me (the Service Provider).

Clause: "[INSERT CLAUSE]"

1. Highlight any red flags or ambiguous terms.
2. Explain the worst-case scenario.
3. Propose a more favorable rewriting of the clause.`
    },

    // ==========================================
    // ANTIGRAVITY SPECIFIC (NEW)
    // ==========================================
    {
        id: "ag_1",
        category: "coding",
        tags: ["Antigravity", "Агенты", "Архитектура"],
        icon: "fa-rocket",
        color: "text-brand-accent",
        bg: "bg-brand-accent/20",
        title: "Архитектор AI-Агентов",
        description: "Спроектируйте сложную систему из нескольких агентов (Planner, Executor, Reviewer) для решения комплексных задач.",
        model: "Gemini 1.5 Pro",
        content: `Act as a Senior AI Engineer specializing in Autonomous Agents.
I need to design a multi-step agent flow for the following task: [DESCRIBE TASK, e.g., "Researching Competitors and writing a report"].

Design the architecture:
1. **Planner Agent**: What is its specific instruction?
2. **Executor Agents**: Split the task into sub-agents (e.g., Researcher, Writer). Define their tools.
3. **Reviewer Agent**: Critiques the output.

Format as a JSON structure compatible with Google Antigravity definitions.`
    },
    {
        id: "ag_2",
        category: "marketing",
        tags: ["Nano Banana", "Visual", "Midjourney"],
        icon: "fa-image",
        color: "text-yellow-400",
        bg: "bg-yellow-500/20",
        title: "Nano Banana: Фотореализм",
        description: "Генерация стоковых фото кинематографического качества. Помогает настроить свет, камеру и композицию.",
        model: "Nano Banana",
        content: `I want to generate a hyper-realistic stock photo of: [DESCRIBE SCENE].

Use the following parameters significantly to ensure Antigravity quality:
--ar 16:9 
--style raw 
--v 6.1
--stylize 250

Prompt Structure:
[Subject], [Action], [Context/Location], [Lighting], [Camera Angle], [Film Type].

Example:
"A futuristic hacker sitting in a neon-lit server room, typing furiously on a holographic keyboard, cinematic lighting, shot on 35mm lens, f/1.8, bokeh effect --ar 16:9 --style raw"`
    },

    // ==========================================
    // VIBECODING (AI-Assisted Dev)
    // ==========================================
    {
        id: "vibe_1",
        category: "vibecoding",
        tags: ["Cursor", "Composer", "Feature"],
        icon: "fa-wand-magic-sparkles",
        color: "text-purple-400",
        bg: "bg-purple-500/20",
        title: "Cursor Composer: Новая Фича",
        description: "Используйте в режиме Composer (Cmd+I) в Cursor IDE для добавления нового функционала без поломки старого.",
        model: "Claude 3.5 Sonnet",
        content: `(Select the relevant files in Cursor Composer)

I want to add a [FEATURE NAME] to this page.
Current behavior: [DESCRIBE CURRENT].
Desired behavior: [DESCRIBE DESIRED].

Specific requirements:
1. Use existing Tailwind classes (don't create new CSS).
2. Match the design aesthetic of the "Hero" section.
3. Handle edge cases (e.g., empty state).

don't delete existing code unless necessary.`
    },
    {
        id: "vibe_2",
        category: "vibecoding",
        tags: ["Refactor", "Clean Code", "Vibes"],
        icon: "fa-broom",
        color: "text-emerald-400",
        bg: "bg-emerald-500/20",
        title: "Spaghetti to Lasagna (Refactor)",
        description: "Превращает запутанный 'спагетти-код' в чистую, модульную и читаемую структуру.",
        model: "Gemini 1.5 Pro",
        content: `This file is getting messy.
Refactor the selected code to be more "Vibecoding" friendly.

1. Break down this huge component into smaller, named sub-components in the same file.
2. Extract the logic into a custom hook use[FeatureName].
3. Add JSDoc comments only where flow is complex.
4. Keep the same functionality, just clean up the "Vibe" of the code.`
    },
    {
        id: "vibe_3",
        category: "vibecoding",
        tags: ["UI", "Tailwind", "Design"],
        icon: "fa-palette",
        color: "text-pink-400",
        bg: "bg-pink-500/20",
        title: "Make it Pop (UI Polish)",
        description: "Улучшает визуальный стиль веб-элементов: добавляет тени, глассморфизм и анимации.",
        model: "Nano Banana (Vision)",
        content: `(Paste screenshot of current UI or select code)

This UI looks too "default bootstrap". Make it look expensive and premium (Linear.app style).

1. Add subtle borders (white/5).
2. Add a glassmorphism effect to the cards.
3. Change strict borders to soft shadows.
4. Add a subtle hover animation (scale-105).
5. Use Inter font with tight letter-spacing.`
    },
    {
        id: "vibe_4",
        category: "vibecoding",
        tags: ["Bug", "Fix", "Rage"],
        icon: "fa-fire-extinguisher",
        color: "text-red-400",
        bg: "bg-red-500/20",
        title: "Fix it Fix it Fix it!",
        description: "Экстренное исправление багов. Когда ничего не работает и нужно починить 'прямо сейчас' любой ценой.",
        model: "Gemini 1.5 Flash",
        content: `I am getting this error: [PASTE ERROR].
I have tried:
- Restarting server.
- Clearing cache.

Nothing works.

Analyze the dependencies between [FILE A] and [FILE B].
Find the racetrack condition or state mismatch.
Fix it aggressively. I don't care about "best practice", I need it to WORK right now.`
    },
    {
        id: "vibe_5",
        category: "vibecoding",
        tags: ["Docs", "Readme", "Explain"],
        icon: "fa-book",
        color: "text-yellow-400",
        bg: "bg-yellow-500/20",
        title: "Readme.md за 5 секунд",
        description: "Автоматически пишет профессиональную документацию для вашего проекта.",
        model: "Gemini 1.5 Pro",
        content: `Read my entire codebase (Cmd+Enter to add all files).

Write a beautiful README.md that includes:
1. 🚀 One-line pitch.
2. 🛠 Tech Stack badges.
3. ⚡️ "Quick Start" (npm install && npm run dev).
4. 🏗 Project Structure diagram (mermaid).
5. 🤝 Contribution guidelines.

Make it look like a top-tier Open Source repo.`
    },
    {
        id: "vibe_6",
        category: "vibecoding",
        tags: ["Tests", "QA", "Jest"],
        icon: "fa-check-double",
        color: "text-green-400",
        bg: "bg-green-500/20",
        title: "Test Driver (Auto-Tests)",
        description: "Генерирует модульные тесты (Unit Tests) для проверки надежности критических функций.",
        model: "Claude 3.5 Sonnet",
        content: `Look at the [FUNCTION NAME] function.

Write 5 Unit Tests (Jest/Vitest) that cover:
1. The Happy Path (Standard usage).
2. Edge cases (Null/Undefined inputs).
3. Malicious inputs (SQL injection attempts).
4. Performance limit (large array).

Don't mock dependencies unless absolutely necessary. Integration tests preferred.`
    },
    {
        id: "vibe_7",
        category: "vibecoding",
        tags: ["Naming", "Variables", "Clean"],
        icon: "fa-tag",
        color: "text-blue-300",
        bg: "bg-blue-400/20",
        title: "Naming Guru",
        description: "Придумывает понятные и правильные имена для переменных и функций. Больше никаких 'var x'.",
        model: "Gemini 1.5 Flash",
        content: `Rename these variables/functions to be self-documenting.

Code:
[PASTE CODE]

Rules:
- No single letters (x, i, y).
- Boolean starts with 'is', 'has', 'should'.
- Functions should be Verb + Noun (getUser, calculateTotal).
- Use business domain language (e.g. instead of 'user', use 'customer').`
    },
    {
        id: "vibe_8",
        category: "vibecoding",
        tags: ["GameDev", "Prototype", "ThreeJS"],
        icon: "fa-gamepad",
        color: "text-purple-500",
        bg: "bg-purple-600/20",
        title: "One-Shot Game Prototype",
        description: "Создает простую браузерную 3D-игру в одном файле HTML. Отлично для тестов и фана.",
        model: "Claude 3.5 Sonnet",
        content: `Create a single-file HTML game using Three.js.

Game Concept: "Cyberpunk Snake in 3D".
Controls: Arrow keys.
Visuals: Neon grid floor, glowing cube as snake, particles on eat.

Requirements:
1. Use CDN links for Three.js.
2. No external assets (generate textures procedurally or use colors).
3. Add a "Score" overlay in CSS.
4. Auto-restart on death.`
    },
    {
        id: "vibe_9",
        category: "vibecoding",
        tags: ["SQL", "Supabase", "Schema"],
        icon: "fa-database",
        color: "text-emerald-500",
        bg: "bg-emerald-600/20",
        title: "Supabase Schema from Vibez",
        description: "Проектирует структуру базы данных PostgreSQL для вашего стартапа.",
        model: "Gemini 1.5 Pro",
        content: `I'm building a [APP IDEA, e.g. "Tinder for Dogs"].

Generate the SQL schema for Supabase.
Tables needed: Users, Matches, Messages.

Include:
- RLS Policies (Users can only see their own matches).
- Realtime enabled for Messages.
- Trigger function to update "updated_at" timestamp.
- Dummy data (INSERT statements) to test immediately.`
    },
    {
        id: "vibe_10",
        category: "vibecoding",
        tags: ["Tailwind", "CSS", "Layout"],
        icon: "fa-layer-group",
        color: "text-cyan-400",
        bg: "bg-cyan-500/20",
        title: "Fix My Div Centering",
        description: "Исправляет проблемы с CSS версткой. Центрирование, отступы, адаптив.",
        model: "Gemini 1.5 Flash",
        content: `My div is not centering.
[PASTE HTML CLASS NAMES]

I want this child element to be perfectly centered horizontally and vertically inside the parent.
Also, on mobile, it should stack vertically.

Give me the corrected Tailwind classes. Stop explaining, just give the code.`
    },
    {
        id: "vibe_11",
        category: "vibecoding",
        tags: ["Chrome", "Extension", "Manifest"],
        icon: "fa-puzzle-piece",
        color: "text-orange-400",
        bg: "bg-orange-500/20",
        title: "Chrome Extension boiler",
        description: "Генерирует полный шаблон для создания расширения Chrome (Manifest V3).",
        model: "Claude 3.5 Sonnet",
        content: `Scaffold a Chrome Extension V3.

Feature: "Hide all images on any website and replace them with text 'VIBES'".

Files needed:
- manifest.json (V3, permissions).
- content.js (The logic).
- background.js (Service worker).
- popup.html (Enable/Disable toggle).

Provide code for all 4 files.`
    },
    {
        id: "vibe_12",
        category: "vibecoding",
        tags: ["NextJS", "AppRouter", "ServerActions"],
        icon: "fa-server",
        color: "text-gray-400",
        bg: "bg-gray-500/20",
        title: "Next.js Server Actions 101",
        description: "Помогает мигрировать старые API роуты на новые Server Actions в Next.js 14.",
        model: "Gemini 1.5 Pro",
        content: `Convert this API Route (pages/api/submit.js) to a Server Action in Next.js 14 App Router.

Old Code: [PASTE CODE]

Requirements:
- Use 'use server'.
- Handle Zod validation.
- Return state object { success: boolean, message: string } for useFormState.
- Revalidate path after success.`
    },
    {
        id: "vibe_13",
        category: "vibecoding",
        tags: ["Python", "FastAPI", "Async"],
        icon: "fa-python",
        color: "text-blue-500",
        bg: "bg-blue-600/20",
        title: "FastAPI Endpoint Gen",
        description: "Быстро создает асинхронные ендпоинты на Python (FastAPI).",
        model: "GPT-4o",
        content: `Create a FastAPI endpoint [POST] /analyze-image.

Input: UploadFile (Image).
Logic:
1. Save image to /tmp.
2. Send image to OpenAI Vision API (mock this call).
3. Return JSON with "description".

Async/Await is mandatory. Add Type Hints.`
    },
    {
        id: "vibe_14",
        category: "vibecoding",
        tags: ["Regex", "Parsing", "Magic"],
        icon: "fa-magic",
        color: "text-pink-500",
        bg: "bg-pink-600/20",
        title: "Regex for Human Beings",
        description: "Пишет регулярные выражения (RegEx) за вас. Просто опишите, что нужно найти.",
        model: "Gemini 1.5 Flash",
        content: `I have a dirty text file with phone numbers in random formats:
- (555) 123-4567
- 555.123.4567
- +1 555 123 4567

Write a JS function using Regex to extract them all and format them to E.164 (+15551234567).
Explain the regex logic simply.`
    },
    {
        id: "vibe_15",
        category: "vibecoding",
        tags: ["Git", "Commit", "History"],
        icon: "fa-code-branch",
        color: "text-red-400",
        bg: "bg-red-500/20",
        title: "Git Disaster Recovery",
        description: "Помогает, когда вы случайно 'сломали' Git репозиторий. Спасательный круг.",
        model: "GPT-4o",
        content: `I accidentally committed secrets to the repo and pushed.
Then I tried to fix it and made a mess.

Tell me the exact git commands to:
1. Remove the secrets from the history (BFG or filter-branch).
2. Force push safely.
3. Reset my local state to "clean".

Don't judge, just save me.`
    },
    {
        id: "vibe_16",
        category: "vibecoding",
        tags: ["Bash", "Script", "DevOps"],
        icon: "fa-terminal",
        color: "text-green-500",
        bg: "bg-green-600/20",
        title: "Lazy Deploy Script",
        description: "Пишет простые bash-скрипты для деплоя сайта на сервер одной командой.",
        model: "Claude 3.5 Sonnet",
        content: `Write a bash script "deploy.sh" that:
1. Checks if I am on the "main" branch.
2. Runs "npm run build".
3. If build fails, STOP and play a sound (beep).
4. If success, rsync the "dist" folder to my server (user@ip:/var/www).
5. SSH into server and restart Nginx.

Add colors to the output logs.`
    },
    {
        id: "vibe_17",
        category: "vibecoding",
        tags: ["Stripe", "Payment", "Integration"],
        icon: "fa-credit-card",
        color: "text-indigo-400",
        bg: "bg-indigo-500/20",
        title: "Stripe Checkout Setup",
        description: "Код для подключения платежей Stripe к вашему сайту.",
        model: "Gemini 1.5 Pro",
        content: `I need to add a "Buy Now" button for a $99 product.
Stack: Next.js + Stripe.

Provide:
1. The API route code to create a Stripe Checkout Session.
2. The Frontend button code to redirect there.
3. The Webhook code to listen for 'checkout.session.completed' and update the database.`
    },
    {
        id: "vibe_18",
        category: "vibecoding",
        tags: ["Scraping", "Puppeteer", "Data"],
        icon: "fa-robot",
        color: "text-orange-500",
        bg: "bg-orange-600/20",
        title: "Universal Scraper (Puppeteer)",
        description: "Скрипт для сбора данных с любых сайтов (парсинг цен, товаров).",
        model: "Claude 3.5 Sonnet",
        content: `Write a Puppeteer script to scrape [URL].

Requirements:
1. Handle infinite scroll (scroll to bottom until no new items).
2. Extract Title, Price, and Image URL of all products.
3. Save to "products.json".
4. Run in Headless mode but set a realistic User-Agent to avoid blocking.`
    },
    {
        id: "vibe_19",
        category: "vibecoding",
        tags: ["Animation", "Framer", "React"],
        icon: "fa-film",
        color: "text-pink-400",
        bg: "bg-pink-500/20",
        title: "Framer Motion Vibes",
        description: "Создает плавные анимации для React компонентов.",
        model: "Gemini 1.5 Pro",
        content: `I want to animate this modal opening.
Library: Framer Motion.

Effect:
- Start: Scale 0.9, Opacity 0, y: 20px.
- End: Scale 1, Opacity 1, y: 0.
- Transition: Spring (stiffness: 300, damping: 20).
- Exit: Reverse the animation.

Show me the <motion.div> code.`
    },
    {
        id: "vibe_20",
        category: "vibecoding",
        tags: ["Roadmap", "Learning", "Plan"],
        icon: "fa-map",
        color: "text-blue-400",
        bg: "bg-blue-500/20",
        title: "Learning Roadmap Generator",
        description: "Составляет персональный план обучения новой технологии за 4 недели.",
        model: "Gemini 1.5 Pro",
        content: `I want to learn [TECHNOLOGY, e.g. Rust] in 4 weeks.
I am an experienced JS developer.

Create a week-by-week plan:
Week 1: Fundamentals (Syntax, Memory).
Week 2: Advanced (Traits, Concurrency).
Week 3: Build a Project (CLI Tool).
Week 4: Build a Web Server (Actix).

For each day, suggest 1 topic and 1 resource (official docs or youtube).`
    },

    // ==========================================
    // CODING & TECH
    // ==========================================
    {
        id: "code_1",
        category: "coding",
        tags: ["React", "Frontend", "Tailwind"],
        icon: "fa-code",
        color: "text-blue-400",
        bg: "bg-blue-500/20",
        title: "Архитектор React-приложений",
        description: "Создает чистый, production-ready код для React компонентов.",
        model: "Gemini 1.5 Flash",
        content: `You are an expert Senior React Developer.
Your goal is to write clean, production-ready code for a landings page.
Stack: HTML (Single File), TailwindCSS (CDN), FontAwesome (CDN).

RULES:
1. Don't use React.js despite your role name, act as if you are building the "compiled" output manually. 
   We need a single HTML file.
2. Use TailwindCSS for ALL styling.
3. Design aesthetic: Dark mode, "Linear.app" style, high contrast, glassmorphism.
4. Ensure mobile responsiveness.
5. Create a "Hero" section, "Features" grid, and "Footer".`
    },
    {
        id: "code_2",
        category: "coding",
        tags: ["SQL", "Supabase", "Database"],
        icon: "fa-database",
        color: "text-emerald-400",
        bg: "bg-emerald-500/20",
        title: "Архитектор Баз Данных (Supabase)",
        description: "Проектирует надежную базу данных с правильными связями и политиками доступа.",
        model: "Gemini 1.5 Pro",
        content: `Act as a Senior Database Architect.
Refine the following app concept into a production-ready SQL Schema for Supabase (PostgreSQL).

App Concept: [DESCRIBE APP]

Requirements:
1. Use Row Level Security (RLS) policies for all tables.
2. Define relationship using foreign keys.
3. Include specific JSONB columns for flexible data.
4. Output specific SQL commands to create tables, policies, and indexes.`
    },
    {
        id: "code_3",
        category: "coding",
        tags: ["Debug", "Fix", "Code"],
        icon: "fa-bug",
        color: "text-red-400",
        bg: "bg-red-500/20",
        title: "DebugMate: Поиск Ошибок",
        description: "Объясняет причину ошибки и предлагает, как её исправить и предотвратить.",
        model: "Gemini 1.5 Flash",
        content: `I have a bug in my code.
Language: [JS/Python/etc]
Error Message: [PASTE ERROR]
Code Snippet:
[PASTE CODE]

1. Explain why this error happens.
2. Fix the code.
3. Explain how to prevent this in the future.`
    },

    // ==========================================
    // MARKETING & CONTENT
    // ==========================================
    {
        id: "mkt_1",
        category: "marketing",
        tags: ["Telegram", "SMM", "Content Plan"],
        icon: "fa-telegram",
        color: "text-cyan-400",
        bg: "bg-cyan-500/20",
        title: "Матрица Контента (Telegram)",
        description: "Составляет план постов на неделю с заголовками и интерактивными механиками.",
        model: "Gemini 1.5 Pro",
        content: `Act as a Content Strategist for a Tech Telegram Channel.
Target Audience: Entrepreneurs, Developers, AI Enthusiasts.

Create a 1-week Content Plan (2 posts per day).
Mix:
- 40% Educational (How-to, Guides)
- 30% News/Analysis
- 20% Personal/Backstage
- 10% Sales (Soft sell)

For each post, provide:
1. Catchy Headline.
2. Brief outline.
3. Engagement question.`
    },
    {
        id: "mkt_2",
        category: "marketing",
        tags: ["YouTube", "Script", "Video"],
        icon: "fa-youtube",
        color: "text-red-500",
        bg: "bg-red-500/20",
        title: "YouTube Script Generator",
        description: "Пишет динамичные сценарии для YouTube в стиле MrBeast (с хуками и удержанием).",
        model: "Gemini 1.5 Pro",
        content: `Write a script for a 10-minute YouTube video about "[TOPIC]".
Style: Like MrBeast meets VSauce (High energy intro, deep dive, retention hacks).

Structure:
1. Hook (0:00-0:30): Something shocking or a bold promise.
2. The Setup: Why this matters.
3. The "Meat": 3 key points with visual examples.
4. Retention Hack: "Stay until the end for..."
5. CTA.`
    },
    {
        id: "mkt_4",
        category: "marketing",
        tags: ["SEO", "Article", "Blog"],
        icon: "fa-pen-nib",
        color: "text-blue-300",
        bg: "bg-blue-400/20",
        title: "SEO Article Writer",
        description: "Пишет SEO-оптимизированные статьи, которые любят поисковики.",
        model: "Gemini 1.5 Pro",
        content: `Write a 1500-word SEO-optimized article about "[KEYWORD]".
Target Audience: Beginners.
Tone: Informative and encouraging.

Requirements:
- Use H2 and H3 tags.
- Include a FAQ section (Schema markup friendly).
- Keyword density: 1.5%.
- Meta Description included.`
    },

    // ==========================================
    // LIFE & PRODUCTIVITY
    // ==========================================
    {
        id: "life_1",
        category: "life",
        tags: ["Food", "Cooking", "Lifehack"],
        icon: "fa-utensils",
        color: "text-orange-400",
        bg: "bg-orange-500/20",
        title: "Шеф-Повар (Из того что есть)",
        description: "Придумывает рецепты из тех продуктов, что есть в вашем холодильнике.",
        model: "Gemini 1.5 Flash",
        content: `I have these ingredients in my fridge:
[LIST INGREDIENTS]

Suggest 3 recipes I can cook:
1. Fast (15 min).
2. Healthy.
3. Gourmet (impress a date).

Include step-by-step instructions.`
    },
    {
        id: "life_2",
        category: "life",
        tags: ["Psychology", "Communication", "Conflict"],
        icon: "fa-seedling",
        color: "text-green-500",
        bg: "bg-green-600/20",
        title: "Психолог (Разрешение конфликта)",
        description: "Помогает составить мирное сообщение для решения ссор и конфликтов.",
        model: "Gemini 1.5 Pro",
        content: `I had an argument with [PERSON] about [TOPIC].
I feel [EMOTION].

Help me draft a message to resolve this calmly using "Non-Violent Communication" (NVC).
The goal is to restore the relationship, not to win the argument.`
    },
    {
        id: "life_5",
        category: "life",
        tags: ["Books", "Summary", "Learning"],
        icon: "fa-book-reader",
        color: "text-yellow-400",
        bg: "bg-yellow-500/20",
        title: "Саммари Книги (За 5 минут)",
        description: "Выжимка главных идей из любой книги. Читайте за 5 минут, а не за 5 дней.",
        model: "Gemini 1.5 Flash",
        content: `Summarize the book "[BOOK TITLE]" by [AUTHOR].
1. The 3 main core ideas.
2. 5 actionable takeaways I can apply today.
3. Best quote.`
    }
];
