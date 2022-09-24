# Node API in Docker
## Режим разработки

В .env ставим MODE=dev.

Удаляем папку node_modules в app.

Делаем:

```bash
docker-compose up --build -d
```

Зайти в контейнер командой:

```bash
docker-compose exec app sh
```

Установить пакеты:

```bash
npm install
```

Запустить внутри команду:

```bash
npm run dev
```

Работаем...

## Режим production

В .env ставим MODE=production

Далее делаем

```bash
docker-compose up --build
```

Готово.

## Не забываем

Надо зайти в pgadmin и создать базу данных api

## Restart NGINX Configuration

```bash
docker-compose exec nginx /etc/init.d/nginx restart
```

## Полезности

* Вся статика в папке `/static`, она будет доступна по `localhost/filename`.
* Для ноды папка со статикой будет ниже уровнем от `app.js` (главным файлом), на одном уровне с папкой `app`.