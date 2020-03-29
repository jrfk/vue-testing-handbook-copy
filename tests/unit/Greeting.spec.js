import {mount,shallowMount} from '@vue/test-utils'
import Greeting from "../../src/components/Greeting";

describe('Greeting.vue', () => {
   it('renders a greeting', () => {
       const wrapper = mount(Greeting)
       const wrappershallow = shallowMount(Greeting)
       //console.log(wrapper.html())
       //console.log(wrappershallow.html())
       // expectはアサーションのため Assertionとは断言 断定という意味
       // ↓断言するよ HTMLの中に”Vue and TDD”があるということを！ という意味
       //expect(wrapper.html().includes("Vue and TDD")).toBe(true);
       expect(wrapper.text()).toMatch("Vue and TDD")
   })
});