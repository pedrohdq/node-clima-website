const fs       =  require('fs')
const path     =  require('path')
const express  =  require('express')
const hbs      =  require('hbs')
const geocode  =  require('./utils/geocode.js')
const forecast =  require('./utils/forecast.js')

const app = express()
const port = process.env.PORT || 3000

// setup handlebars
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

// setup express
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
   res.render('index', {
      title: 'Clima',
      name: 'Deus'
   })
})

app.get('/clima', (req, res) => {
   if (!req.query.loc) {
      return res.send({
         error: 'É necessário fornecer uma localização.'
      })
   }
   geocode(req.query.loc, (g_err, {lat, lon, loc} = {}) => {
      if (g_err) {
         return res.send({
            error: g_err
         })
      }
      forecast({lat, lon}, (f_err, {hourly: {summary, data: [today]}}) => {
         if (f_err) {
            return res.send({
               error: f_error
            })
         }
         res.send({
            localizacao: loc,
            previsao: summary,
            dados: today
         })
      })
   })
})

app.get('/sobre', (req, res) => {
   res.render('sobre', {
      title: 'Sobre',
      name: 'Deus'
   })
})

app.get('/ajuda', (req, res) => {
   res.render('ajuda', {
      title: 'Ajuda',
      name: 'Deus',
      message: 'Página de ajuda. SOCORRO!!!'
   })
})

app.get('/ajuda/*', (req, res) => {
   res.render('404', {
      title: '404',
      name: 'Deus',
      message: 'Artigo de ajuda não encontrado'
   })
})

app.get('/*', (req, res) => {
      res.render('404', {
      title: '404',
      name: 'Deus',
      message: 'Página não encontrada.'
   })
})

app.listen(port, () => {
   console.log(`Server is up on port ${port}.`)
})


