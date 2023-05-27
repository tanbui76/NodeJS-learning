import connection from "../config/connectDB";

let getHomepage = async (req, res) => {
    // [rows, fields] là dạng destructuring 
    //destructuring là cú pháp cho phép lấy dữ liệu từ trong array và object ra một cách nhanh chóng và dễ dàng hơn
    const [rows, fields] = await (await connection).execute('SELECT * FROM `user`'); // lấy dữ liệu từ database
    console.log(rows);
    return res.render("index.ejs", { dataUser: rows });// trả về file index.ejs và truyền vào dataUser

}

let getDetailUserPage = async (req, res) => {
    const [rows, fields] = await (await connection).execute('SELECT * FROM `user` WHERE `id` = ?', [req.params.userId]);
    return res.render("detail.ejs", { user: rows[0] });
}

let getAboutPage = (req, res) => {
    //logic code here
    return res.send("About page");
}

let updateUserData = async (req, res) => {
    console.log("reqbody:" + req.body.first_name);
    await (await connection).execute('UPDATE `user` SET `first_name` = ? , `last_name` = ? , `email` = ? , `address` = ? WHERE `id` = ?', [req.body.first_name, req.body.last_name, req.body.email, req.body.address, req.body.id]);
    var redirect = "/detail/" + req.body.id;
    return res.redirect(redirect);
}

module.exports = {
    getHomepage: getHomepage,
    getAboutPage: getAboutPage,
    getDetailUserPage: getDetailUserPage,
    updateUserData: updateUserData

}