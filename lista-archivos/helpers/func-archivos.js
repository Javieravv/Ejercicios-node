/** Algunas funciones con archivos.
 * 
 */
const fs = require ('fs')
const path = require('path')

const listaArchivosDirectorio = ( ruta ) => {
    if ( ruta === '' ) {return []}
    const listArchivos = fs.readdirSync(ruta)
    return listArchivos.sort()
}

const contenidoArchivosDirectorio = ( ruta) => {
    if ( ruta === '' ) {return []}
    const listArchivos = listaArchivosDirectorio (ruta)
    leerInformacionArchivo ( `${ruta}/${listArchivos[2]}`)
}

const informacionArchivosDirectorio = ( ruta, listArchivos ) => {
    const arrInformacionArchivos = {}
    listArchivos.forEach ( archivo => {
        arrInformacionArchivos[archivo] = leerInformacionArchivo ( `${ruta}/${archivo}`)
    })
    return arrInformacionArchivos
}

const renombrarArchivosDirectorioOrden = (ruta, listArchivos ) => {
    // renombramos todos los archivos, empezando por 001
    let cadenaPrevia = ''
    listArchivos.forEach ( (archivo, ind) => {
        // cadenaPrevia = '0'.repeat (3 - (ind + 1).toString().length)+(ind + 1).toString()
        cadenaPrevia = '0'
        nuevoNombre = `${cadenaPrevia}${archivo}`
        // console.log (`Archivo: ${ archivo } Nuevo Nombre: ${cadenaPrevia}${archivo} `)
        // Cambiamos los nombres
        try {
            fs.renameSync(`${ruta}/${archivo}`, `${ruta}/${nuevoNombre}`)
        } catch (error) {
            console.log (' NO SE PUDO CAMBIAR EL NOMBRE DEL ARCHIVO ')
            console.log (error)
        }
    })

}


const leerInformacionArchivo = ( filePatch ) => {
    const datosArchivo = {}
    datosArchivo.extension = path.parse( filePatch ).ext
    datosArchivo.nombre    = path.parse ( filePatch ).name
    const statsFile = fs.statSync ( filePatch )
    datosArchivo.size = statsFile.size
    datosArchivo.isDirectorio = statsFile.isDirectory()
    return datosArchivo
}


module.exports = {
    listaArchivosDirectorio,
    contenidoArchivosDirectorio,
    leerInformacionArchivo,
    informacionArchivosDirectorio,
    renombrarArchivosDirectorioOrden
}

