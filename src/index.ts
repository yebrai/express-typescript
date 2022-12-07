import express from 'express'
import diaryRouter from './routes/diaries'
const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

app.get('/api', (_req, res) => { // "_req" "_" when req its never read.
  console.log('Alguien anda por aqui')
  res.send('Aqui tienes tu data')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
