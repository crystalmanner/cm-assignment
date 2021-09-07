import { mount } from "@vue/test-utils";
import LabelWithIcon from "../../src/components/LabelWithIcon.vue";

const testPropData1 = {
  imageIconSrc: require("../../src/assets/images/clock.svg"),
  imageIconAlt: "clock icon",
  isShowIcon: true,
  labelTxt: "155",
  type: "image",
  labelType: "time"
};

const testPropData2 = {
  isShowIcon: true,
  labelTxt: "13g",
  type: "custom",
  nutrientType: "nutrient",
  labelType: "text"
};

describe("LabelWithIcon", () => {
  const wrapper1 = mount(LabelWithIcon, {
    propsData: testPropData1
  });

  it("Label with image icon should be rendered properly", () => {
    // custom icons should be rendered
    expect(wrapper1.find("img").exists()).toBe(true);
  });

  it("Time formatting should work properly", () => {
    expect(wrapper1.find("p").text()).toEqual("2hr(s) 35 min(s)");
  });

  it("Label with custom icon should be rendered properly", () => {
    const wrapper2 = mount(LabelWithIcon, {
      propsData: testPropData2
    });
    // custom icons should be rendered
    expect(wrapper2.find(".custom-icon").exists()).toBe(true);

    // label text should be 13g
    expect(wrapper2.find("p").text()).toEqual("13g");
  });
});
