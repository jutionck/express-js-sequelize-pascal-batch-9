const CustomerService = require('../service/customer.service');
const UserService = require('../service/user.service');
module.exports = (repoManager) => {
    const { customerRepo, userRepo } = repoManager();
    // Semua repo
    const customerService = () => {
        return () => CustomerService(customerRepo());
    }

    const userService = () => {
        return () => UserService(userRepo());
    }

    return {
        customerService, userService
    }
}
