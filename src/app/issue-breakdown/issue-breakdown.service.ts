import { Injectable } from '@angular/core';

export class MaleAgeStructure {
    state: string;
    young: number;
    middle: number;
    older: number;
}

let maleAgeData: MaleAgeStructure[] = [{
    state: "",
    young: 6.7,
    middle: 28.6,
    older: 5.1
}];

@Injectable()
export class Service {
    getMaleAgeData(): MaleAgeStructure[] {
        return maleAgeData;
    }
}
