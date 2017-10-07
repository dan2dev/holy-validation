export module Store {
	export const ValidationStore: { [key: string]: Function } = {};
	export function register(name: string, validationMethod: (value: string, ...args: Array<any>) => boolean): void {
		name = name.toLowerCase();
		Store.ValidationStore[name] = validationMethod;
	}
	export function execute(name: string, value: string, ...args: any[]): boolean {
		if (args == undefined) {
			args = [];
		}
		args.unshift(value);
		name = name.toLowerCase();
		if (Store.ValidationStore[name] === undefined) {
			console.error(`The validation '${name}' wasn't registered.`);
		} else {
			return Store.ValidationStore[name].apply(this, args);
		}
		return true;
	}
}
export default Store;
