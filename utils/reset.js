export const reset = () => {
    const findSettingTab = document.querySelector(
      'button[data-bs-toggle="pill"][data-bs-target="#settings"]'
    );
    const settingTab = new Tab(findSettingTab);
    settingTab.show();
  }