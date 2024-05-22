export const formatAlignOptions = (type = "all") => {
    const horizontal = this.findEl("align_horizontal");
    const vertical = this.findEl("align_vertical");

    [(horizontal, vertical)].forEach((align) => {
      if (type != align && type != "all") {
        return align.classList.add("d-none");
      }
      align.classList.remove("d-none");
    });
  }