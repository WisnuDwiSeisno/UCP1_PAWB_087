const config = require('../configs/database');
require('dotenv').config();


let mysql      = require('mysql');
let pool       = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    getContact(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM bibit;', function (error, results) {
                if (error) throw error;
                
                // Check if results contains any data
                if (results.length > 0) {
                    res.render('bibit', {
                        url: 'http://localhost:8080/',
                        contacts: results // Pass the contacts data to the view
                    });
                } else {
                    res.render('bibit', {
                        url: 'http://localhost:8080/',
                        contacts: [] // Pass an empty array if no data
                    });
                }
            });
            connection.release();
        });
    },
    formContact(req,res){
        res.render("addBibit",{
            url : 'http://localhost:8080/',
        });
    },
    saveContact(req, res) {
        let { Nama, Asal} = req.body;
        console.log(Nama, Asal); 
        if (Nama && Asal) {
            pool.getConnection(function (err, connection) {
                if (err) throw err;
                connection.query(
                    `INSERT INTO bibit (Nama, Asal) VALUES (?, ?);`,
                    [Nama, Asal], 
                    function (error, results) {
                        if (error) {
                            console.error(error);
                            res.send('Gagal menyimpan data');
                            return;
                        }
                        req.flash('color', 'success');
                        req.flash('status', 'Yes..');
                        req.flash('message', 'Data berhasil disimpan');
                        res.redirect('/bibit');
                    }
                );
                connection.release();
            });
        } else {
            res.send('Data tidak lengkap');
        }
    },    
    editContact(req, res) {
        const { id } = req.params;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM bibit WHERE id = ?', [id], function (error, results) {
                if (error) throw error;
                if (results.length > 0) {
                    res.render('editBibit', {
                        url: 'http://localhost:8080/',
                        contact: results[0]
                    });
                } else {
                    res.redirect('/bibit');
                }
            });
            connection.release();
        });
    },
    updateContact(req, res) {
        const { id } = req.params;
        const { Nama, Asal  } = req.body;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                'UPDATE bibit SET Nama = ?, Asal = ? WHERE id = ?',
                [Nama, Asal, id],
                function (error, results) {
                    if (error) throw error;
                    res.redirect('/bibit');
                }
            );
            connection.release();
        });
    },
    deleteContact(req, res) {
        const { id } = req.params;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('DELETE FROM bibit WHERE id = ?', [id], function (error, results) {
                if (error) throw error;
                res.redirect('/bibit');
            });
            connection.release();
        });
    },
};

