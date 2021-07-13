const Express = require("express");
const router = Express.Router();

// let validateJWT = require("../middleware/validate-jwt");


const { ReviewModel } = require("../models")

router.get("/about", (req, res)=> {
    res.send("hey, how are you")
});

/*
====================================
Review Create
===================================
*/

router.post("/create", async (req, res) => {
    const { title, date, entry } = req.body.review;
    const { id } = req.user;
    const reviewEntry = {
        title, 
        date, 
        entry,
        owner: id
    }
    try {
        const newReview = await ReviewModel.create(reviewEntry);
        res.status(200).json(newReview);
    } catch (err) {
        res.status(500).json({error: err });
    }
});


/*
====================================
Review Update
===================================
*/


router.post("/update/:entryId", async (req, res) => {
    const { title, date, entry } = req.body.journal;
    const reviewId = req.params.entryId;
    const userId = req.user.id;

    const query = {
        where: {
            id: reviewId, 
            owner: userId
        }
    };

    const updatedReview = {
        title: title,
        date: date,
        entry: entry
    };

    try {
        const update = await ReviewModel.update(updatedReview, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error:err });
    }
})

module.exports = router;

/*
====================================
Review get mine
===================================
*/

router.get("/mine", validateJWT, async (req, res) => {
    const { id }
})


/*
====================================
Review get all (Marla)
===================================
*/





/*
====================================
Review delete (Marla)
===================================
*/