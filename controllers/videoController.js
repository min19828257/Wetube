//import {videos} from "../db";
import routes from "../routes"

export const home = (req, res) => res.render("home",{pageTitle : "home", videos});
export const search = (req, res) => {
    const { query: {term : searchingBy} } = req;
    //const searchingBy = req.query.term;
    console.log(searchingBy);
    res.render("Search",{pageTitle : "Search", searchingBy , searchingBy, videos});
}
export const getUpload = (req, res) => 
    res.render("Upload",{pageTitle : "Upload"});

export const postUpload = (req, res) => {
    const {
        body: {file ,title, description}
        }= req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(123123));
};

export const videoDetail = (req, res) => res.render("Video Detail",{pageTitle : "Video Detail"});
export const editVideo = (req, res) => res.render("Edit Video",{pageTitle : "Edit Video"});
export const deleteVideo = (req, res) => res.render("Delete Video",{pageTitle : "Delete Video"});