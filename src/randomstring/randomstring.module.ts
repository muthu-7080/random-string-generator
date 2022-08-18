import { Module } from '@nestjs/common';
import { UtilModule } from '../util/util.module';
import { RandomstringService } from './randomstring.service';

@Module({
  imports:[UtilModule],
  providers: [RandomstringService],
  exports:[RandomstringService]
})
export class RandomstringModule {}
