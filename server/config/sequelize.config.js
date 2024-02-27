import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
    'sql-recipe-share', // database name
    'root', // db user
    'root', // db password
    // how to use the .env to pass these in?
    {
        host: '127.0.0.1',
        dialect: 'mysql',
        port: '3306'
    }
)

export const validate_connection = () => {
    sequelize.authenticate()
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB connection failed', err))
}