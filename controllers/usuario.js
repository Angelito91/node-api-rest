import { UsuarioModel } from '../models/usuario.js'
import { validateUsuario, validatePartialUsuario } from '../schemas/usuario.js'

// controlador de los usuarios
export class UsuarioController {
  // devolviendo todos los usuarios
  static GET (req, res) {
    const usuarios = UsuarioModel.GET()
    res.json(usuarios)
  }
  // devolviendo un usuario con el id de los parámetros
  static GET_ID (req, res) {
    const { id } = req.params
    const usuario = UsuarioModel.GET_ID({ id })
    res.json(usuario)
  }
  // obteniendo los datos del body y creando el usuario
  static POST (req, res, next) {
    // validando el body
    const newUsuario = validateUsuario(req.body)

    if (newUsuario.success) {
      const usuario = UsuarioModel.CREATE({ usuario: newUsuario.data })
      res.status(201).json(usuario)
    } else {
      // creando un error y enviándolo al middleware
      const error = new Error('NOT DATA')
      error.issues = newUsuario.error.issues
      next(error)
    }
  }
  // obteniendo los datos del body y actualizando el usuario con el id de los parámetros
  static PATCH (req, res, next) {
    const { id } = req.params

    // validando el body
    const updateUsuario = validatePartialUsuario(req.body)

    if (updateUsuario.success) {
      const usuario = UsuarioModel.UPDATE({ id, usuario: updateUsuario.data })
      res.status(201).json(usuario)
    } else {
      // creando un error y enviándolo al middleware
      const error = new Error('NOT DATA')
      error.issues = updateUsuario.error.issues
      next(error)
    }
  }
  // obteniendo el id de los parámetros y eliminado el usuario
  static DELETE (req, res) {
    const { id } = req.params
    const usuario = UsuarioModel.DELETE({ id })
    res.status(201).json(usuario)
  }
}
