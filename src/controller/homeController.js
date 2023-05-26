import connection from "../config/connectDB";

let getHomepage = (req, res) => {
    //logic code here
    let data = [];
    connection.query(
        'SELECT * FROM `user`',
        function (err, results, fields) {
            // console.log(results); // results contains rows returned by server
            // data = results.map((row) => { return row });
            results.map((row) => {
                data.push({
                    id: row.id,
                    firstname: row.first_name,
                    email: row.email,
                    lastname: row.last_name,
                    address: row.address
                })
            }); // lấy ra các giá trị trong mảng results và đẩy vào mảng data

            return res.render("index.ejs", { dataUser: data });// trả về file index.ejs và truyền vào dataUser
        }


    );

}

let getAboutPage = (req, res) => {
    //logic code here
    return res.send("About page");
}
module.exports = {
    getHomepage: getHomepage,
    getAboutPage: getAboutPage
}