// here we gonna register commons validations
// any sugestion?
import { Is } from "utility-collection";
import Store from "./store";
var r = Store.register;
r("cpf", function (value) {
    return Is.cpf(value);
});
r("email", function (value) {
    return Is.email(value);
});
r("brPhone", function (value) {
    return Is.brazilianPhone(value);
});
r("ddmmyyyy", function (value) {
    return Is.ddmmyyyy(value);
});
r("mmddyyyy", function (value) {
    return Is.mmddyyyy(value);
});
//# sourceMappingURL=common.js.map