const usersController = {

    usersService: null,

    create({
        usersService
    }) {
        const obj = Object.create(this);
        obj.usersService = usersService;
        return obj;
    },

    findAll() {
        return (req, res, next) => {
            const result = this.usersService.findAll();
            res.json(result);
        };
    },
};

module.exports = usersController;