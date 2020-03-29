import {shallowMount, mount} from "@vue/test-utils";
import Parent from "../../src/components/Parent";

describe('Parent', () => {
    it('Parent Mount', () => {
        const wrapper = mount(Parent)
        const shallowWrapper = shallowMount(Parent)

        //console.log(wrapper.html())
        //console.log(shallowWrapper.html())
    })
})
