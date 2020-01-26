export class Registration {
    constructor(
    public username: string,
    public email: string,
    public phone: number,
    public course: string[],
    public subject: string[],
    public location: string,
    public message: string
    ){}
};
