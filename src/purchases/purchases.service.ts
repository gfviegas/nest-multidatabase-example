import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Purchase } from './entities/purchase.entity'

import { CreatePurchaseInput } from './dto/create-purchase.input'
import { Repository, ObjectID } from 'typeorm'

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(Purchase)
    private purchaseRepository: Repository<Purchase>
  ) {}

  async create(createPurchaseInput: CreatePurchaseInput) {
    const purchase = this.purchaseRepository.create({
      description: createPurchaseInput.description,
      amount: createPurchaseInput.amount,
      user: createPurchaseInput.user,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    await this.purchaseRepository.save(purchase)
    return purchase
  }

  findAll() {
    return this.purchaseRepository.find()
  }

  findOne(id: number) {
    return this.purchaseRepository.findOne(id)
  }
}
