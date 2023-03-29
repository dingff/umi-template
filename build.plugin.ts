import { IApi } from 'umi'

export default (api: IApi) => {
  if (process.env.NODE_ENV === 'production') {
    api.modifyConfig((memo) => {
      memo.publicPath = './'
      return memo
    })
  }
  api.chainWebpack((memo) => {
    const plugins = [...memo.plugins.values()]
    plugins.forEach(({ name }: any) => {
      if (!name.startsWith('html-')) return
      memo.plugin(name).tap((args) => {
        args[0].filename = args[0].filename.toLowerCase()
        return args
      })
    })
  })
}
