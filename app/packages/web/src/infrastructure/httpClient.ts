import axios, { AxiosInstance } from 'axios'

export type HttpClient = AxiosInstance
export type AccessTokenProvider = () => Promise<string>

type Options = {
  baseURL?: string
  accessTokenProvider: AccessTokenProvider
}

export const createHttpClient = (options: Options): HttpClient => {
  const { baseURL, accessTokenProvider } = options
  const httpClient = axios.create({ baseURL })

  httpClient.interceptors.request
    .use(async config => {
      const accessToken = await accessTokenProvider()

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.headers.Authorization = `Bearer ${accessToken}`
      return config
    })

  return httpClient
}
