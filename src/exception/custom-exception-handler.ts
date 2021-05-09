export class CustomExceptionHandler {

    public handleError(e: any, res: any, next: any) {
        // console.log('####ERROR####', e);
        if (e.errors) {
            res.status(400).json(e.errors[0].message);
        } else if (e.name) {
            res.status(400).json(e.name);
        } else {
            res.status(500).json('server error');
        }
        next(e);
    }
}