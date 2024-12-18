import { AbstractDocument } from '@app/common/database/schema.abstract'
import { Logger, NotFoundException } from '@nestjs/common'
import { FilterQuery, Model, UpdateQuery } from 'mongoose'

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger

  constructor(protected readonly model: Model<TDocument>) {}

  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    return (await this.model.create(document)).toJSON() as TDocument
  }
  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model.findOne(filterQuery).lean<TDocument>()
    if (!document) {
      this.logger.error('Could not find document', filterQuery)
      throw new NotFoundException()
    }
    return document
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ): Promise<TDocument> {
    const document = await this.model
      .findOneAndUpdate(filterQuery, update, { new: true })
      .lean<TDocument>()
    if (!document) {
      this.logger.error('Could not find document', filterQuery)
      throw new NotFoundException()
    }
    return document
  }
  async find(filterQuery: FilterQuery<TDocument>): Promise<TDocument[]> {
    return this.model.find(filterQuery).lean<TDocument[]>()
  }
  async deleteOne(filterQuery: FilterQuery<TDocument>): Promise<void> {
    await this.model.deleteOne(filterQuery)
  }
}
