const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const settingController = require("../controllers/settingController");

// Example route: GET /api/org
router.get("/contact", contactController.getContact);
// Example route: POST /api/org
router.post("/contact", contactController.createContact);

router.get("/setting", settingController.getSetting);
router.put("/setting", settingController.updateSetting);
router.get("/setting", settingController.getSetting);

module.exports = router;
