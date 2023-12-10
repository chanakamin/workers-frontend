import { Unit } from "./Unit";

export interface Worker {
    id?: number,
    firstName: string,
    lastName: string,
    birthDate: Date,
    startWorkAt: Date,
    workerNumber: string,
    unit?: Unit,
    unitId?: number,
}