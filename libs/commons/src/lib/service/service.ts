export interface Service<Req, Res> {
    execute(input: Req): Promise<Res>
}
