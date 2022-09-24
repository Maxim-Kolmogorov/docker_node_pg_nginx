// Express
const express = require('express')
const app = express()

// Router
const router = express.Router()

// DB
const { Pool } = require('pg')
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

// Главная
router.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Hello World',
  })
})

// Обработка всего остального
router.get('/*', (_req, res) => {
  res.status(400).json({
    error: 'Запрос не может быть обработан, маршрут не найден'
  })
})

// Routes
app.use('/', router)

app.listen(3000, () => {
  console.log('Сервер запущен')
})