import { ToadScheduler, SimpleIntervalJob, Task, AsyncTask } from 'toad-scheduler';
import { CowinRequest } from '../request/cowin.request';
import { HelperService } from './helper.service';

export class Scheduler {
    private scheduler: ToadScheduler;
    private cowinRequest: CowinRequest;
    private helperService: HelperService;
    constructor() {
        this.scheduler = new ToadScheduler()
        this.cowinRequest = new CowinRequest();
        this.helperService = new HelperService();
    }

    start() {
        const task = new AsyncTask(
            'cowin task',
            () => {
                return this.cowinRequest.fetchByDistrict().then((result) => {
                    this.helperService.processResponse(result);
                    /* continue the promise chain */
                })
            },
            (err: Error) => {
                /* handle error here */
            }
        )
        const job = new SimpleIntervalJob({ seconds: 30, }, task)

        this.scheduler.addSimpleIntervalJob(job)
    }

    stop() {
        // when stopping your app
        // scheduler.stop()
    }

}


