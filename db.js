import { Sequelize } from "sequelize";

//membuat koneksi ke database mysql
const sequelize = new Sequelize("e_moment", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
