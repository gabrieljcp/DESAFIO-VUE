export const changePositionImage = (el) => {
    const listPositions = {
      insideImage: (prod) => {
        const container =
          prod.querySelector(`[data-store="product-item-image"]`) || null;
        return {
          container,
          position: "absolute",
          newPosition: "beforeend",
          type: "all",
        };
      },
      beforeImage: (prod) => {
        const el = prod.querySelector(`[data-store="product-item-image"]`);
        if (!el) return null;
        const container = el;
        if (!container) return;
        return {
          container,
          position: "static",
          newPosition: "beforebegin",
          type: "horizontal",
        };
      },
      beforeTitle: (prod) => {
        const container = prod.querySelector(
          `[data-store="product-item-info"]`
        );
        if (!container) return null;
        return {
          container,
          position: "static",
          newPosition: "beforebegin",
          type: "horizontal",
        };
      },
      afterPrice: (prod) => {
        const container = prod.querySelector(
          `[data-store="product-item-info"]`
        );
        if (!container) return null;
        return {
          container,
          position: "static",
          newPosition: "beforeend",
          type: "horizontal",
        };
      },
      afterBuy: (prod) => {
        const container = prod.querySelector(`.pay`);
        if (!container) return null;
        return {
          container,
          position: "static",
          newPosition: "afterend",
          type: "horizontal",
        };
      },
    };

    const position = this.localOpt("container", "position", el.value, true);

    const setPosition = (e, first = false) => {
      const value = e?.target?.value || e;
      const product = this.findEl("product");
      const tag_container = this.findEl("tag_container");

      const settings = listPositions[value](product);

      const { container, position, newPosition, type } = settings;

      tag_container.style.position = position;
      this.formatAlignOptions(type);
      container.insertAdjacentElement(newPosition, tag_container);
      if (first) el.value = value;
      this.localOpt("container", "position", value);
    };

    this.listener("input", el, (e) => setPosition(e));
    setPosition(position, true);
  }