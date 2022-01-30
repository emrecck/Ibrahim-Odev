import Menu from '../../components/Menu.vue'
import Bill from '../../components/Bill.vue'
import SignIn from '../../components/SignIn.vue'
import Navbar from '../../components/Navbar.vue'
import { mount } from '@vue/test-utils'

test('mount Navbar component ', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.exists()).toBe(true)
})

test('mount Menu component ', () => {
    const wrapper = mount(Menu)
    expect(wrapper.html).toBe('<div><p>Foo</p></div>')
})

test('mount Bill component', () => {
    const wrapper = mount(Bill)
    expect(wrapper.name()).toBe('Bill')
})

test('test classes', () => {
    const wrapper = mount(SignIn)
    expect(wrapper.classes('email')).toBe(true)
})

test('add data to Menu', () => {
    const wrapper = mount(Menu)
    const items = wrapper.vm.list
    wrapper.setData({list: [...items, {
        id: 13,
        name: 'ibonun yeri',
        show: false,
        active: false
    }]})
    expect(wrapper.html()).toMatchSnapshot()
})

test('contains test', () => {
    const wrapper = mount(Bill)
    expect(wrapper.contains('div')).toBe(true)
})

test('find test', ()=> {
    const wrapper = mount(Navbar)
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
})

test('findAll test', () => {
    const wrapper = mount(Menu)
    const li = wrapper.findAll('li').at(0)

    expect(li.is('div')).toBe(true)
})

test('setProps test', async () => {
    const wrapper = mount(Menu)
    await wrapper.setProps({ ibo: 'ibo' })

    expect(wrapper.vm.ibo).toBe('ibo')
})
