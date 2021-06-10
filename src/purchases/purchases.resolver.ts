import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql'

import { PurchasesService } from './purchases.service'

import { CreatePurchaseInput } from './dto/create-purchase.input'
import { Purchase } from './entities/purchase.entity'

@Resolver('Purchase')
export class PurchasesResolver {
  constructor(private readonly purchasesService: PurchasesService) {}

  // @ResolveField()
  // user(@Parent() purchase: Purchase) {
  //   return purchase.user
  // }

  @Mutation('createPurchase')
  create(@Args('createPurchaseInput') createPurchaseInput: CreatePurchaseInput) {
    return this.purchasesService.create(createPurchaseInput)
  }

  @Query('purchases')
  findAll() {
    return this.purchasesService.findAll()
  }

  @Query('purchase')
  findOne(@Args('id') id: number) {
    return this.purchasesService.findOne(id)
  }
}
