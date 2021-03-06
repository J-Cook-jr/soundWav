module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define(
    'Bookings',
    {
      starttime: DataTypes.TIME,
      endtime: DataTypes.TIME,
      date: DataTypes.DATEONLY,
      fac_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {}
  );
  Bookings.associate = function(models) {
    Bookings.belongsTo(models.Users, { foreignKey: 'user_id' });
    Bookings.belongsTo(models.Facilities, { foreignKey: 'fac_id' });
  };
  return Bookings;
};
