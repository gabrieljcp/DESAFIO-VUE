export const changeImage = (el) => {
    const input = el.querySelector("input");
    if (!input) return;
    const findImageContainer = el.querySelector("#selected_image");
    const changeImageContainer = input?.parentNode || null;
    const image = this.localOpt("config", "image", "", true);

    const tagImage = this.findEl("tag_image");

    const setImage = (result) => {
      tagImage.src = result;
      this.localOpt("config", "image", result);

      if (findImageContainer) {
        const image = findImageContainer.querySelector("img");
        findImageContainer?.classList?.remove("hidden");
        if (image) image.src = result;
      }
      if (changeImageContainer) {
        changeImageContainer?.classList?.add("hidden");
      }
    };

    if (image) setImage(image);
    this.listener("change", input, (e) => {
      const [file] = e.target.files;
      if (!file) return;
      const fileReader = new FileReader();
      fileReader.onload = ({ target: { result } }) => setImage(result);
      fileReader.readAsDataURL(file);
    });
  }