export interface ControllerInterface<T> {
    run(a: any): Promise<T>;
}
