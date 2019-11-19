import { Model, DataTypes, Sequelize } from 'sequelize';


export class Employee extends Model {

  static start(connection: Sequelize){
    this.init({
      name: DataTypes.STRING(100),
      email: DataTypes.STRING(100),
      cpf: DataTypes.STRING(11),
      telephone: DataTypes.STRING(8),
      cellphone: DataTypes.STRING(11),
      rg: DataTypes.STRING(15),
      num_address: DataTypes.STRING(10),
      comp_address: DataTypes.STRING(100)
    }, {
      sequelize: connection,
      modelName: 'Employee'
    });
  }

  static associate(models: any){
    this.belongsTo(models.Address,{
      foreignKey: 'cep_id', as: 'address'
    });
    this.belongsToMany(models.Position, { foreignKey: 'employee_id', through: 'employees_positions', as: 'positions' });
    this.hasMany(models.Schedule, {
      foreignKey: 'employee_id', as: 'schedules'
    });
  }
  
}