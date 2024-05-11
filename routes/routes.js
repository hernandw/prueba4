import express from 'express'
import path from 'path'
const __dirname = path.resolve()
const router = express.Router()
import Jimp from 'jimp'
import {v4 as uuidv4} from 'uuid'

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

router.get('/crear', async(req, res) => {
    const imagen = req.query.url
    const id = uuidv4().slice(0, 8)
    const nombreImagen = `${id}.jpg`
    const img = await Jimp.read(imagen)
    await img
        .resize(350, Jimp.AUTO)
        .greyscale()
        .writeAsync(__dirname + `/assets/uploads/${nombreImagen}`)
    res.sendFile(__dirname + `/assets/uploads/${nombreImagen}`)

})

router.get('/form', (req, res) => {
    res.sendFile(__dirname + '/views/form.html')
})

router.get('/estilos', (req, res) => {
    res.sendFile(__dirname + '/assets/css/style.css')
})
export default router