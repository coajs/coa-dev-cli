import { MysqlBin } from 'coa-mysql'

export default {
  bin: new MysqlBin({
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
  }),
  database: 'mm-site-d0',
}
