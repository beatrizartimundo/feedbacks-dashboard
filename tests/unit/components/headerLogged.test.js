import { shallowMount } from '@vue/test-utils'

import HeaderLogged from '../../../src/components/HeaderLogged'
import { routes } from '../../../src/router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

// mocka a store de acordo ao caminho que foi utilizado no componente
const mockStore = { currentUser: {} }
jest.mock('../../../src/hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('<HeaderLogged/>', () => {
  it('should render header logged correctly', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render 3 dots when there\'s no user', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })
    // pega o campo pelo id
    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('...')
  })

  it('should render the name of the user', async () => {
    router.push('/')
    await router.isReady()
    mockStore.currentUser.name = 'bia'
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })
    // pega o campo pelo id
    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('bia(sair)')
  })
})