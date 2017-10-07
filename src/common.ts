// here we gonna register commons validations
// any sugestion?

import { Is } from "utility-collection";
import Store from "./store";

let r = Store.register;
r("cpf", (value: string) => {
	return Is.cpf(value);
});
r("email", (value: string) => {
	return Is.email(value);
});
r("brPhone", (value: string) => {
	return Is.brazilianPhone(value);
});
r("ddmmyyyy", (value: string) => {
	return Is.ddmmyyyy(value);
});
r("mmddyyyy", (value: string) => {
	return Is.mmddyyyy(value);
});
