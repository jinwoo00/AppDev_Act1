const web ={
    app:(req, res)=>{
        res.render('home');
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    cart: (req, res) => {
        res.render('cart');
    },
    shop: (req, res) => {
        res.render('shop');
    }
};    
module.exports = web;