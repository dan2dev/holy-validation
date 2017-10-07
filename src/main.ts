import { register } from 'ts-node/dist';
import Store from "./store";
import './common';
export module HolyValidation {
	export const register = Store.register;
	export const execute = Store.execute;
}
if(window !== undefined) {
	(window as any).HolyValidation = HolyValidation;
}
export default HolyValidation;