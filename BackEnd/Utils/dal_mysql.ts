import mysql from 'mysql'
import config from './Config'

// create connection object
const connection = mysql.createPool({
  host: config.mySQLhost,
  user: config.mySQLuser,
  password: config.mySQLpass,
  database: config.mySQLdatabase,
})

console.log('we are connected to MySQL')

const execute = (sql: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { execute }
