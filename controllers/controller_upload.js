const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'public')
    },
    filename: function (req, file, cb){
        cb(null, `foto-${Date.now()}-${file.originalname}`)
    }
})

const upload = multer ({storage: storage})

exports.upload = upload.single('myFile')

exports.uploadFile=(req,res)=>{
    res.send({data:'Enviar un archivo'})
}

const fs = require('fs')

exports.downloadFile = async (req, res, next) => {
    var fs = require('fs');
    var files = fs.readdirSync('public');
    res.send({data:files})
}
