module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: "User profile"

    });
    // return res.end('<h1>User Profile</h1>');
}


//render the sign up page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title : "Codeial | Sign up"
    })
}

//render the sign in page

module.exports.signUp=function(req,res){
    return res.render('user_sign_in',{
        title : "Codeial | Sign In"
    })
}