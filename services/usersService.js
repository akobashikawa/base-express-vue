const usersService = {

    db: null,

    create({
        db
    }) {
        const obj = Object.create(this);
        obj.db = db;
        return obj;
    },

    findAll() {
        return this.db.findAll();
    },

    findById(id) {
        return this.db.findById(id);
    },

    add(data) {
        return this.db.add(data);
    },

    update(id, data) {
        return this.db.update(id, data);
    },
};

module.exports = usersService;