import { Modeler } from 'vineyard-ground'
import * as alasql from 'alasql'
import {Schema} from "vineyard-schema/source";

//This will serve as an adapter between ground and alaSQL. Most db#query functions will have complete SQL strings
//but things like replacements may need to be formatted
class LabDatabase {
  query(sql, replacements) {
    return alasql(sql)
  }
}

//Should be able to pass the application a schema and have the collections map to a generic vineyard-ground Modeler
export class Turf {
  model

  constructor(ground, db, schemaPath) {
    const schema = new Schema(require(schemaPath))
    this.model = Object.assign({
      ground: ground,
      db: db
    }, ground.collections)
  }
}

//turf.model.Accounts.create({}) should be able to connect to alasql and churn out a sql string and create an in-memory record

/**
 * Created by patrickmedaugh on 8/30/17.
 */
