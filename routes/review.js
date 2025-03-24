const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema }= require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listings.js");
const { isLoggedIn, isAuthor} = require("../middleware.js");
const reviewController = require("../controllers/review.js");
const review = require("../models/review.js")

const validateReview =(req,res,next) =>{
    let {error} =reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(404, errMsg);
    }else{
        next();
    }
};

//reviews
//post route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete review Route
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.deleteReview));

module.exports = router;