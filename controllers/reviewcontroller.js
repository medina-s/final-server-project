const Express = require("express");
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
const { ReviewModel } = require("../models");
const Review = require("../models/review");
router.get("/about", validateJWT, (req, res)=> {
    res.send("hey, how are you")
});
/*
====================================
Review Create
===================================
*/
router.post("/create", validateJWT, async (req, res) => {
    const { movie, date, feedback } = req.body.review;
    const { id } = req.user;
    const reviewEntry = {
        movie, 
        date, 
        feedback,
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
router.put("/update/:reviewId", validateJWT, async (req, res) => {
    const { movie, date, feedback } = req.body.review;
    const reviewId = req.params.reviewId;
    const userId = req.user.id;
    const query = {
        where: {
            id: reviewId, 
            owner: userId
        }
    };
    const updatedReview = {
        movie: movie,
        date: date,
        feedback: feedback
    };
    try {
        const update = await ReviewModel.update(updatedReview, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error:err.message });
    }
})
/*
====================================
Review get mine
===================================
*/
router.get("/mine", validateJWT, async (req, res) => {
    const { id } = req.user;
    try {
        const userReviews = await ReviewModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(userReviews);
    } catch (err) {
        res.status(500).json({ error: err });
    }
})
/*
====================================
Review get all (Marla)
===================================
*/
router.get("/", validateJWT, async (req, res) => {
    try {
        const entries = await ReviewModel.findAll();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});
/*
====================================
Review delete (Marla)
===================================
*/
router.delete("/delete/:id", validateJWT, async (req, res) =>{
    const userId = req.user.id;
    const reviewId = req.params.id;
    try {
        const query = {
            where: {
                id: reviewId,
                owner: userId
            }
        };
        await ReviewModel.destroy(query);
        res.status(200).json({ message: "Review Entry Removed" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;