import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import App from "./App.vue";

describe("App", () => {
  it("追加ボタン押下で新しいタスクが追加されること", async () => {
    const wrapper = mount(App);
    await wrapper.find("input").setValue("新しいタスク");
    await wrapper.find('[data-test="add-button"]').trigger("click");

    const taskText = wrapper.find('[data-test="task-text-0"]');

    expect(taskText.text()).toBe("新しいタスク");
  });

  it("追加されたタスクに作成日が適切に設定されること", async () => {
    const dateSpy = vi
      .spyOn(Date.prototype, "toLocaleString")
      .mockReturnValue("mocked-date");

    const wrapper = mount(App);

    await wrapper.find("input").setValue("タスクC");
    await wrapper.find('[data-test="add-button"]').trigger("click");

    dateSpy.mockRestore();

    const createdAtText = wrapper
      .find('[data-test="task-created-at-0"]')
      .text();

    expect(createdAtText).toBe("mocked-date");
  });
});
