# NYT News App

Фронтенд-приложение для отображения новостей из **NYT Article Search API**.

## Установка и запуск

```bash
git clone https://github.com/Prog1910/code-line.git nyt-news-app
cd nyt-news-app
pnpm i
pnpm dev
```

Откройте `http://localhost:5173`.

## Настройка

В `.env` заданы:

```
VITE_API_URL=api/svc/search/v2/articlesearch.json
VITE_API_KEY=апи_ключ_с https://developer.nytimes.com/
VITE_API_BEGIN_DATE=20120101
```

Прокси уже настроен, дополнительной конфигурации не требуется.
