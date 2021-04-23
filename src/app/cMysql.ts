import { MysqlBin } from 'coa-mysql'

const config = {
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
}

const bin = new MysqlBin(config)

export default new class {
  public io = bin.io
  public bin = bin
}
