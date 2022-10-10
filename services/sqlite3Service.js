const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = './services/database.sqlite3';

const sqlite3Service = {
    db: null,

    create() {
        const obj = Object.create(this);
        obj.db = new sqlite3.Database(DBSOURCE, err => {
            if (err) {
                console.log(err.message);
                throw err;
            } else {
                console.log(`Connected to db ${DBSOURCE}`);
            }
        });
        return obj;
    },

    query(sql, params) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },

    findAll() {
        var sql = "select * from Users";
        var params = [];
        return this.query(sql, params);
    },

    findById(id) {
        const sql = `SELECT * FROM Users WHERE id=${id}`;
        const params = [];
        return this.query(sql, params);
    },

    add(data) {
        const username = data.username;
        const password = data.password;
        const sql = `INSERT INTO Users
        (username, password)
        VALUES('${username}', '${password}');
        `;
        const params = [];
        return this.query(sql, params);
    },

    update(id, data) {
        const username = data.username;
        const password = data.password;
        const sql = `UPDATE Users
        SET username='${username}', password='${password}'
        WHERE id=${id}
        `;
        const params = [];
        return this.query(sql, params);
    },
};

module.exports = sqlite3Service;