import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Purchase } from './entities/purchase.entity'
import { PurchasesService } from './purchases.service'
import { PurchasesResolver } from './purchases.resolver'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Purchase,
    ], 'psqlConnection')
  ],
  providers: [PurchasesResolver, PurchasesService]
})
export class PurchasesModule {}
