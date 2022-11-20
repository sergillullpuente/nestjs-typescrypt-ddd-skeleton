export interface ControllerInterface<T> {
    run(): Promise<T>;
}
