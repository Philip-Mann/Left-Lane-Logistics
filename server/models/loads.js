'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Loads.init({
    company: DataTypes.STRING,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    equipment: DataTypes.STRING,
    length: DataTypes.STRING,
    weight: DataTypes.STRING,
    full_or_partial: DataTypes.STRING,
    date_posted: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    commodity: DataTypes.STRING,
    comments: DataTypes.TEXT,
    factor: DataTypes.BOOLEAN,
    ref_num: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loads',
  });
  return Loads;
};