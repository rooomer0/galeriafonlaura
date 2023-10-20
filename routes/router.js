const express = require('express')

const router = express.Router()

router.get('/' , (req,res)=>{
    // conexion()
    res.render('../public/views/main')
})

const formRoute = require("./route_form.js")
router.use("/forms", formRoute)

const uploadRoute = require("./route_upload.js")
router.use("/upload", uploadRoute)

router.get('/contact' , (req,res)=>{
    res.render('../public/views/contact')
})

router.get('/descargarDatosBodaFonLaura' , (req,res)=>{
    res.render('../public/views/descargar')
})

router.use(function(req, res) {
    res.redirect('/');
});



module.exports = router