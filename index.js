import express from 'express'

// obteniendo PORT desde las variable de entorno
const PORT = process.env.PORT ?? 3000

// Rutas
import { UsuarioRouter } from './routes/usuario.js'
import { Router_404 } from './routes/404.js'

// middlewares
import { ErrorMiddleware } from './middlewares/error.js'

// creando el servidor
const app = express()
app.disable('x-powered-by')
app.use(express.json())

app.use('/usuario', UsuarioRouter)

app.use(ErrorMiddleware)

app.use(Router_404)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`)
})
