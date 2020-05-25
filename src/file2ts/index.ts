import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export default new class {

  option = () => {}

  convert (dir: string, encoding: 'base64' | 'hex') {
    readdirSync(dir).forEach(file => {
      if (file.endsWith('.ts')) return
      const filename = resolve(dir, file)
      const data = readFileSync(filename).toString(encoding)
      const content = `export default Buffer.from('${data}', '${encoding}');`
      writeFileSync(filename + '.ts', content)
    })
  }
}