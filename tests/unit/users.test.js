import mockAxios from 'axios'
// import AuthService from '../../src/services/auth'
import UsersService from '../../src/services/users'

jest.mock('axios')

describe('usersService', () => {
  // limpa o mock apos o teste
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return the user logged', async () => {
    const token = '123.456.789'
    const user = {
      id: 'eab759f8-f238-4ff9-ae91-ee1558982329',
      name: 'Igor Halfeld',
      email: 'igor@igor.me',
      apiKey: 'fcd5015c-10d3-4e9c-b395-ec7ed8850165',
      createdAt: 1599264000000
    }
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await UsersService(mockAxios).getMe(token)
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('email')
    expect(response).toMatchSnapshot()
  })

  it('should return the apikey', async () => {
    const token = '123.456.789'
    const user = {
      apiKey: 'fcd5015c-10d3-4e9c-b395-ec7ed8850165'
    }
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await UsersService(mockAxios).generateApikey(token)
    expect(response.data).toHaveProperty('apiKey')
    expect(response).toMatchSnapshot()
  })
})