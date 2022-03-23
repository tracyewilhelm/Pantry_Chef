const router = require("express").Router();


// GET homepage
// http://localhost:3001/
router.get("/", (req, res) => {
    try {
         res.status(200).render("homepage");
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;