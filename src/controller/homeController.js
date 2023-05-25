let getHomepage = (req, res) => {
    //logic code here
    return res.render("index.ejs");
}

let getAboutPage = (req, res) => {
    //logic code here
    return res.send("About page");
}
module.exports = {
    getHomepage: getHomepage,
    getAboutPage: getAboutPage
}