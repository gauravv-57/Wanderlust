const Listing = require("../models/listings.js");

module.exports.index = async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.showListing = async(req,res)=>{
    let{id}= req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
};

module.exports.createListing = async(req,res,next)=>{
    // let url = req.file.path;
    // let filename = req.file.filename;
    // console.log("file:",req.file)
    // const newListing = new Listing(req.body.listing);
    // newListing.owner = req.user._id ;
    // newListing.image = {filename,url};
    // await newListing.save();
    // req.flash("success","new listing created");
    // res.redirect("/listings");
    try {
        console.log("Request received for creating listing");
        console.log("File uploaded:", req.file);
        
        let url = req.file.path;
        let filename = req.file.filename;

        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = { filename, url };
        await newListing.save();

        req.flash("success", "New listing created");
        res.redirect("/listings");
    } catch (err) {
        console.error("Error in createListing:", err);
        next(err); // Pass the error to the error-handling middleware
    }
}

module.exports.renderEditForm = async (req,res)=>{
    let{id}= req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/h_30,w_25");
    res.render("listings/edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing = async(req,res)=>{
    let {id}= req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image= {filename,url};
        await listing.save();
    }

    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async(req,res)=>{
    let {id}= req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","listing deleted");
    res.redirect("/listings");
}