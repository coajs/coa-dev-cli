import { devCli } from './cDevCli'

export default new class {
  async testMysql2Code () {
    await devCli.generate('src/service/markGenerate', 'MarkGenerate', '码生成记录')
  }
}