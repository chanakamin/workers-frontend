import { Route } from "@angular/router";
import { WorkerListComponent } from "./worker-list/worker-list.component";
import { NewWorkerComponent } from "./new-worker/new-worker.component";

export const WORKER_ROUTES: Route[] = [
    {path: '', component: WorkerListComponent},
    {path: 'new-worker', component: NewWorkerComponent},
    // ...
  ];