import express from 'express';
const app = express()
import routes from './routes/routes.js'
const PORT = process.env.PORT || 3000


//Public Static
app.use(express.static('assets'))

//Routes
app.use('/', routes)
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))