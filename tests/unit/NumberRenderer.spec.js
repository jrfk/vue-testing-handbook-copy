import { shallowMount} from "@vue/test-utils";
import NumberRenderer from "../../src/components/NumberRenderer";

describe("NumberRenderer", () => {
    it("偶数をレンダー", () => {
        const wrapper = shallowMount(NumberRenderer, {
            propsData: {
                even :true
        }
        })
        expect(wrapper.text()).toBe("2, 4, 6, 8")
    })
})
