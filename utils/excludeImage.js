export const excludeImage = (el) => {
    const findSelectedContainer = document.querySelector("#selected_image");
    const changeImageContainer = findSelectedContainer.nextElementSibling;

    this.listener("click", el, () => {
      const image = el.nextElementSibling;
      const tagImage = this.findEl("tag_image");
      tagImage.src = "";
      image.src = "";

      findSelectedContainer.classList.add("hidden");
      changeImageContainer.classList.remove("hidden");
      this.localOpt("config", "image", "");
    });
  }