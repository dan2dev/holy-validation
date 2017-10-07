export declare module Store {
    const ValidationStore: {
        [key: string]: Function;
    };
    function register(name: string, validationMethod: (value: string, ...args: Array<any>) => boolean): void;
    function execute(name: string, value: string, ...args: any[]): boolean;
}
export default Store;
