"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLinks1663514784976 = void 0;

var _typeorm = require("typeorm");

class CreateLinks1663514784976 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "links",
      columns: [{
        name: "id",
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: "label",
        type: 'varchar'
      }, {
        name: "url",
        type: 'varchar'
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }, {
        name: "updated_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("links");
  }

}

exports.CreateLinks1663514784976 = CreateLinks1663514784976;