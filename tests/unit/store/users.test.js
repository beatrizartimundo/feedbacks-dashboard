import useStore from '../../../src/hooks/useStore'
import { resetUserStore, setApiKey, setCurrentUser, cleanCurrentUser } from '../../../src/store/user'

describe('useStore', () => {
  afterEach(() => {
    resetUserStore()
  })
  it('should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Bia' })
    expect(store.User.currentUser.name).toBe('Bia')
  })

  it('should set ApiKey on current user', () => {
    const store = useStore()
    setApiKey('1234abc')
    expect(store.User.currentUser.apiKey).toBe('1234abc')
  })
  it('should clear the current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Bia' })
    expect(store.User.currentUser.name).toBe('Bia')
    cleanCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})