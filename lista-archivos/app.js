/**Aplicación para listar contenido de un directorio *  */

const { 
    listaArchivosDirectorio,
    informacionArchivosDirectorio,
    renombrarArchivosDirectorioOrden 
} = require('./helpers/func-archivos')
const patch = 'archivos'
const patch1 = patch+'/carpeta1'

console.clear()
console.log ('========================================')
console.log ('   Listar contenido de Directorio ')
console.log ('========================================')
console.log (` Buscamos archivos en la ruta ${patch}`)

const listaArchivos = listaArchivosDirectorio ( patch );
// const infArchivos = informacionArchivosDirectorio ( patch, listaArchivos );

// console.log ('INFORMACION FINAL: ', infArchivos )
renombrarArchivosDirectorioOrden (patch, listaArchivos)
const listaArchivos1 = listaArchivosDirectorio ( patch );
console.log (listaArchivos1)
const infArchivos = informacionArchivosDirectorio ( patch, listaArchivos1 );
console.log (infArchivos)


// console.log ( ' ARCHIVOS EN FORMATO JSON ...')
// console.log ( JSON.stringify ( infArchivos) )

