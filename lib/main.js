import Store from "./store";
import './common';
export var HolyValidation;
(function (HolyValidation) {
    HolyValidation.register = Store.register;
    HolyValidation.execute = Store.execute;
})(HolyValidation || (HolyValidation = {}));
if (window !== undefined) {
    window.HolyValidation = HolyValidation;
}
export default HolyValidation;
//# sourceMappingURL=main.js.map