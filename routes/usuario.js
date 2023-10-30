import { Router } from 'express'
import { UsuarioController } from '../controllers/usuario.js'

// creando los end-point de Usuario
export const UsuarioRouter = Router()

UsuarioRouter.get('/',UsuarioController.GET)
UsuarioRouter.get('/:id',UsuarioController.GET_ID)
UsuarioRouter.post('/',UsuarioController.POST)
UsuarioRouter.patch('/:id',UsuarioController.PATCH)
UsuarioRouter.delete('/',UsuarioController.DELETE)
