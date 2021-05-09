import { Sequelize } from 'sequelize-typescript';
import { MovieProvider } from '../entities/movieprovider.entities';

const db = 'moviecloud'
const username = 'root'
const password = 'sujith1234'

// const db = 'heroku_4f251404751652b';
// const username = 'ba40a61e42cc27';
// const password = '8ef7f257';

console.log(__dirname);
export const sequelize = new Sequelize(db, username, password, {
    // host: 'us-cdbr-east-02.cleardb.com',
    repositoryMode: true,
    dialect: "mysql",
    port: 3306,
    models: [__dirname + '/models'],
    // modelMatch: (filename, member) => {
    //     return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
    // },
});

sequelize.addModels([MovieProvider]);