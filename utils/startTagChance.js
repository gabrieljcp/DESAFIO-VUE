export const startTagChange = (tag) => {
    const findTag = this.findEl("tag");
    if (!findTag) return;
    Object.entries(tag).forEach(
      ([field, value]) => (findTag.style[field] = value)
    );
  }