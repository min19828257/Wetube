import routes from "../routes";

export const getJoin =(req,res) => {
    res.render("Join",{pageTitle : "Join" });
};

export const postJoin = (req, res) =>{
    const {
        body: { name, email, password, password2}
    } = req;

    if(password !== password2){
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    }else{
        //To do register User
        // To do Log User In
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => {
    res.render("login", {pageTitle: "Log In"});
}

export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const login =(req,res) => res.render("Login",{pageTitle : "Login"});
export const logout =(req,res) => {
        //To Do: Process Log Out
    res.redirect(routes.home);
}
export const users = (req, res) => res.render("Users",{pageTitle : "Users"});
export const userDetail = (req, res) => res.render("User Detail",{pageTitle : "User Detail"});
export const editProfile = (req, res) => res.render("Edit Profile",{pageTitle : "Edit Profile"});
export const changePassword = (req, res) => res.render("Change Password",{pageTitle : "Change Password"});