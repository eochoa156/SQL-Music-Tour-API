class Band extends Model {
    static associate({ MeetGreet }) {
      // meet and greets 
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })
  }  

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
sequelize = new Sequelize(config.database, config.username, config.password, config);
}
