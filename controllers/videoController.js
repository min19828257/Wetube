import routes from "../routes"
import Video from "../models/Video";

export const home = async (req, res) => {       // async를 통해 동기화를 진행함(이유는 렌더링부터 시작되는것을 막기위해)
    try{
        const videos = await Video.find({}).sort({_id:-1});       // await는 그다음 함수가 일을 끝날때까지 기다리라는 것
        res.render("home",{pageTitle : "home", videos});
    }catch(error){
        console.log(error);
        res.render("home",{pageTitle : "home", videos: []});
    }
};
export const search = (req, res) => {
    const { query: {term : searchingBy} } = req;
    //const searchingBy = req.query.term;
    console.log(searchingBy);
    res.render("Search",{pageTitle : "Search", searchingBy , searchingBy, videos});
}
export const getUpload = (req, res) => {
    res.render("upload",{pageTitle : "Upload"});
}

export const postUpload = async(req, res) => {
    const { 
        body : {title, description}, 
        file : {path}
    }= req;
    
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });

    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
    const {
        params: {id}
    } = req;

    try{
        const video = await Video.findById(id);
        console.log(video);
        res.render("videoDetail",{pageTitle : video.title, video});
    } catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
};

export const getEditVideo = async (req, res) => {
    const {
        params: {id}
    } = req;
    
    try{
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle: `Edit ${video.title}`, video});
    }catch(error){
        res.redirect(routes.home);
    }
}

export const postEditVideo = async (req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;
    
    try{
        await Video.findOneAndUpdate({ _id: id }, {title, description})
        res.redirect(routes.videoDetail(id));
    }catch(error){
        res.redirect(routes.home);
    }
};

export const deleteVideo = async (req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;

    try{
        await Video.findOneAndRemove({_id:id});
    }catch(error){
        console.log("error");   
    }
    res.redirect(routes.home);
}