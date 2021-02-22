import { NotFoundException } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Model } from "src/common/serializers/model.serializer";
import { DeepPartial, Repository } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { ObjectID } from 'mongodb';


export class ModelRepository<T, K extends Model> extends Repository<T> {
    async get(id: string, relations: string[] = [], throwsException = true): Promise<K | null> {
      const entity = await this.findOne({where: { _id: new ObjectID(id) }, relations})
      if (!entity && throwsException)
        return Promise.reject(new NotFoundException('Model not found.'))
        
      return Promise.resolve(entity ? this.transform(entity) : null)
    }
    
    async createEntity(inputs: DeepPartial<T>,relations: string[] = []): Promise<K> {
      const saved = await this.save(inputs)
      if (relations.length)
        return await this.get((saved as any)._id, relations)
      return this.transform(saved)
    }

    async updateEntity(id: string, inputs: QueryDeepPartialEntity<T>, relations: string[] = []): Promise<K> {
      return await this.update(id, inputs)
      .then(async () => await this.get(id, relations))
      .catch(err => Promise.reject(err))
    }

    transform(model: T, transformOptions = {}): K {
      return plainToClass(Model, model, transformOptions) as K;
    }

    transformMany(models: T[], transformOptions = {}): K[] {
      return models.map(model => this.transform(model, transformOptions));
    }
    
  }