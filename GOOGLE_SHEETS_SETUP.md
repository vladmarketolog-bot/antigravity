# Как сохранять заявки в Google Таблицу (Вечная база данных)

Так как у нас нет своего сервера, мы превратим **Google Таблицу** в нашу базу данных. Это бесплатно и надежно.

## 1. Подготовка Таблицы
1.  Создайте новую Google Таблицу: [sheets.new](https://sheets.new)
2.  Назовите её, например, **"Заявки Antigravity"**.
3.  В первой строке напишите заголовки столбцов:
    *   **A1**: `Дата`
    *   **B1**: `Имя`
    *   **C1**: `Email`
    *   **D1**: `Telegram`

## 2. Создание Скрипта
1.  В таблице нажмите **Расширения (Extensions)** -> **Apps Script**.
2.  Удалите весь код, который там есть (`function myFunction()...`).
3.  Вставьте этот код:

```javascript
function doPost(e) {
  // Defensive: Open sheet first to ensure we can log errors
  var sheet;
  try {
     sheet = SpreadsheetApp.openById("1dLZ9G4VpEr0VLm2VNxsgl7jvt819YlFXqHocoWclzSs").getActiveSheet();
  } catch (err) {
     return ContentService.createTextOutput(JSON.stringify({result: "error", message: "Sheet not found", details: err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    // 1. Check if 'e' exists (Defensive coding)
    if (!e) {
      sheet.appendRow(["ERROR", "No event object 'e' received. Was this run manually?"]);
      return ContentService.createTextOutput(JSON.stringify({result: "error", message: "No event object"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // 2. Parse Data
    var data = e.parameter || {};
    
    // 3. Log what we received (for debugging)
    // sheet.appendRow(["DEBUG", JSON.stringify(data)]); // Uncomment if needed

    sheet.appendRow([
      new Date().toLocaleString(), // A: Дата
      data.name || "(Empty)",      // B: Имя
      data.email || "(Empty)",     // C: Email
      data.telegram || "(Empty)",  // D: Telegram
      data.Browser || "",          // E: Браузер
      data.Screen || "",           // F: Экран
      data.Language || "",         // G: Язык
      data.Timezone || "",         // H: Часовой пояс
      data.LocalTime || "",        // I: Время клиента
      data.Page || "",             // J: Страница
      data.Referrer || "",         // K: Откуда пришел
      data.utm_source || "",       // L: UTM Source
      data.utm_medium || "",       // M: UTM Medium
      data.utm_campaign || "",     // N: UTM Campaign
      data.utm_term || "",         // O: UTM Term
      data.utm_content || ""       // P: UTM Content
    ]);
  
    return ContentService.createTextOutput(JSON.stringify({"result":"success", "row": sheet.getLastRow()}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    sheet.appendRow(["CRITICAL ERROR", error.toString()]);
    return ContentService.createTextOutput(JSON.stringify({"result":"error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4.  Нажмите иконку дискеты **(Сохранить)**. Назовите проект "Payment Save".

## 3. Публикация (Самое важное!)
1.  Справа сверху нажмите синюю кнопку **Начать развертывание (Deploy)** -> **Новое развертывание (New deployment)**.
2.  Нажмите на шестеренку (Select type) -> **Веб-приложение (Web app)**.
3.  Заполните поля:
    *   **Описание**: `v1`
    *   **Запуск от имени**: `Я (Me)`
    *   **У кого есть доступ (Who has access)**: **ВСЕ (Anyone)** <--- **ЭТО ОЧЕНЬ ВАЖНО!!!** (Иначе сайт не сможет отправлять данные).
4.  Нажмите **Начать развертывание (Deploy)**.
5.  Google попросит разрешение (Authorize access). Выберите свой аккаунт -> **Advanced** -> **Go to Payment Save (unsafe)** -> **Allow**.
6.  Вам выдадут **URL веб-приложения** (длинная ссылка, заканчивается на `/exec`).
7.  **Скопируйте эту ссылку!**

## 4. Вставка на сайт
Откройте файл `assets/js/payment.js` и вставьте эту ссылку в переменную `GOOGLE_SCRIPT_URL`.
