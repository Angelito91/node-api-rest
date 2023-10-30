import zod from 'zod'

const schemaUsuario = zod.object({
    nombre: zod.string({
        required_error: 'Te falte el nombre',
        invalid_type_error: 'El nombre debe ser un texto'
    }),
    apellido: zod.string({
        required_error: 'Te falte el apellido',
        invalid_type_error: 'El apellido debe ser un texto'
    }),
    edad: zod.number({
        required_error: 'Te falte la edad',
        invalid_type_error: 'La edad debe ser un numero'
    }).min(18,{
        message: 'La edad debe ser mayor de 18'
    }).max(100,{
        message: 'La edad debe ser menor de 100'
    }),
    sexo: zod.enum(['M','F'],{
        required_error: 'Te falte el sexo',
        invalid_type_error: 'El sexo debe ser M(Masculino) o F(Femenino)'
    }),
    pais: zod.string({
        required_error: 'Te falte el país',
        invalid_type_error: 'El país debe ser un texto'
    }),
    email: zod.string({
        required_error: 'Te falte el email',
        invalid_type_error: 'El email debe ser un texto'
    }).email({
        message: 'El email no es valido, debe ser ejemplo@gmail.com'
    }),
    activo: zod.boolean({
        invalid_type_error: 'El valor activo debe ser verdadero o falso'
    }).default(false)
})

export function validateUsuario(object){
    return schemaUsuario.safeParse(object)
}

export function validatePartialUsuario(object){
    return schemaUsuario.partial().safeParse(object)
}