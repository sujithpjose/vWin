export class ResponseError {

    private code: number;
    private message: string;

    constructor(
        code: number, message: string
    ) {
        this.code = code;
        this.message = message;
    }

    public get Code(): number {
        return this.code;
    }

    public get Message(): string {
        return this.message;
    }
}