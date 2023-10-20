const router = require("express").Router()
const controller = require("../controllers/controller_upload")


router.post(
    "/",
    controller.upload,
    controller.uploadFile
)

router.get(
    "/",
    controller.downloadFile
)

module.exports = router;