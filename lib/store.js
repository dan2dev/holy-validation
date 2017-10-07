export var Store;
(function (Store) {
    Store.ValidationStore = {};
    function register(name, validationMethod) {
        name = name.toLowerCase();
        Store.ValidationStore[name] = validationMethod;
    }
    Store.register = register;
    function execute(name, value) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (args == undefined) {
            args = [];
        }
        args.unshift(value);
        name = name.toLowerCase();
        if (Store.ValidationStore[name] === undefined) {
            console.error("The validation '" + name + "' wasn't registered.");
        }
        else {
            return Store.ValidationStore[name].apply(this, args);
        }
        return true;
    }
    Store.execute = execute;
})(Store || (Store = {}));
export default Store;
//# sourceMappingURL=store.js.map