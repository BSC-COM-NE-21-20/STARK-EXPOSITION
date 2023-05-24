import { Module } from '@nestjs/common';
import { OfficeService } from './office.service';
import { OfficeController } from './office.controller';
import { Office } from './entities/office.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Office])],
  controllers: [OfficeController],
  providers: [OfficeService]
})
export class OfficeModule {}
