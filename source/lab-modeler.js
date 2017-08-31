"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alasql = require("alasql");
var source_1 = require("vineyard-schema/source");
//This will serve as an adapter between ground and alaSQL. Most db#query functions will have complete SQL strings
//but things like replacements may need to be formatted
var LabDatabase = (function () {
    function LabDatabase() {
    }
    LabDatabase.prototype.query = function (sql, replacements) {
        return alasql(sql);
    };
    return LabDatabase;
}());
//Should be able to pass the application a schema and have the collections map to a generic vineyard-ground Modeler
var Turf = (function () {
    function Turf(ground, db, schemaPath) {
        var schema = new source_1.Schema(require(schemaPath));
        this.model = Object.assign({
            ground: ground,
            db: db
        }, ground.collections);
    }
    return Turf;
}());
exports.Turf = Turf;
//turf.model.Accounts.create({}) should be able to connect to alasql and churn out a sql string and create an in-memory record
/**
 * Created by patrickmedaugh on 8/30/17.
 */
//# sourceMappingURL=lab-modeler.js.map