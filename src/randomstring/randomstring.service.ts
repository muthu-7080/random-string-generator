import { Injectable } from '@nestjs/common';
import { UtilService } from '../util/util.service';

@Injectable()
export class RandomstringService {

    constructor(private util:UtilService){}

    public getRandomstring():string[]{
        return this.util.generaterandomstring();
    }
}
