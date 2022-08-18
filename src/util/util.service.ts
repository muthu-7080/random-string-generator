import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
    public generaterandomstring():string[] {
        const random = require('random-words')
        return random(10);
    }

}
