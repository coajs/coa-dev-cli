import { MysqlBin } from 'coa-mysql'
import { Mysql2Code } from '../mysql2code/Mysql2Code'

const bin = new MysqlBin({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root',
  charset: 'utf8mb4',
  trace: true,
  debug: false,
  databases: {
    main: { database: 'mm-site-d0', ms: 7 * 24 * 3600 * 1000 },
    kaoqin: { database: 'mm-site-kq-d0', ms: 3600 * 1000 },
  },
})

export const devCli = new Mysql2Code(bin)
