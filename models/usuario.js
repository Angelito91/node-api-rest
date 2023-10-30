import fs from 'fs'

// obteniendo el path del json y después leyéndolo
const path = process.cwd() + '/models/usuarios.json'
const usuarios = JSON.parse(fs.readFileSync(path, 'utf-8'))

// obtiene el tamaño del array y lo va aumentando para crear un Id único
let usuariosLength = usuarios.length
function CreateID () {
  usuariosLength += 1
  return usuariosLength
}

// Modelo de los usuarios
export class UsuarioModel {
  // obteniendo todos los usuarios
  static GET () {
    return usuarios
  }
  // obteniendo un usuario por el id
  static GET_ID ({ id }) {
    const usuario = usuarios.find(usuario => usuario.id === Number(id))
    if (!usuario) return []
    return usuario
  }
  // creando un usuario
  static CREATE ({ usuario }) {
    const newUsuario = {
      id: CreateID(),
      ...usuario
    }

    usuarios.push(newUsuario)

    return newUsuario
  }
  // actualizando un usuario con un id
  static UPDATE ({ id, usuario }) {
    const usuarioIndex = usuarios.findIndex(
      usuario => usuario.id === Number(id)
    )

    if (usuarioIndex === -1) return []

    usuarios[usuarioIndex] = {
      ...usuarios[usuarioIndex],
      ...usuario
    }

    return usuarios[usuarioIndex]
  }
  // eliminando un usuario con un id
  static DELETE ({ id }) {
    const usuarioIndex = usuarios.findIndex(
      usuario => usuario.id === Number(id)
    )

    if (usuarioIndex === -1) return []

    const usuario = usuarios[usuarioIndex]

    usuarios.splice(usuarioIndex, 1)

    return usuario
  }
}
