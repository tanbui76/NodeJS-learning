import connection from "../config/connectDB";

let getHomepage = async (req, res) => {
    // [rows, fields] là dạng destructuring 
    //destructuring là cú pháp cho phép lấy dữ liệu từ trong array và object ra một cách nhanh chóng và dễ dàng hơn
    const [rows, fields] = await (await connection).execute('SELECT * FROM `user`'); // lấy dữ liệu từ database
    console.log(rows);
    return res.render("index.ejs", { dataUser: rows });// trả về file index.ejs và truyền vào dataUser

}

let getDetailUserPage = async (req, res) => {
    console.log(req.params); // lấy ra params từ url
    const [rows, fields] = await (await connection).execute('SELECT * FROM `user` WHERE `id` = ?', [req.params.userId]);
    console.log(rows);
    return res.render("detail.ejs", { user: rows[0] });
}

let getAboutPage = (req, res) => {
    //logic code here
    return res.send("About page");
}
module.exports = {
    getHomepage: getHomepage,
    getAboutPage: getAboutPage,
    getDetailUserPage: getDetailUserPage
}