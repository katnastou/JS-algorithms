var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose");
//if error insufficent free space --> run mongod --nojournal
//else run mongod to start the database server
mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false 
    
}));

app.set('view engine', 'ejs');
//set up passport to run for application
app.use(passport.initialize());
app.use(passport.session());

//crete a new local strategy using the User.authenticate method
//coming from passportLocalMongoose
passport.use(new LocalStrategy(User.authenticate()));
//code to encode data to send back to session
passport.serializeUser(User.serializeUser());
//code to decode data that is received from session
passport.deserializeUser(User.deserializeUser());

//==========
//ROUTES
//==========
app.get("/", function(req,res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req,res){
    res.render("secret");
});

//Auth Routes

app.get("/register", function(req,res){
    res.render("register");
});
//handling user sign up
app.post("/register",function(req,res){
    req.body.username;
    req.body.password;
    //we pass only username because we dont save the password to the database
    //we pass the password as a second arguement to User.register
    //User.register will hash the password and stores that to the database
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        //we want to use the local strategy, if you want another one e.g. facebook --> change local and some tweaks
        passport.authenticate("local")(req,res, function(){
            res.redirect("/secret");
        });
    });
});

//Login routes
//render login form
app.get("/login", function(req,res){
    res.render("login");
});

//middleware: code that runs before our callback. We can have multiple middlewares stacked up
//the idea is that they sit inbetween the beginning of your route, and the end of your route
app.post("/login",passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req,res){
    
});

app.get("/logout", function(req,res){
    req.logout(); //easy with passport --> doesn't change database, passport destroys all user data in the session
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }    
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started...");
});