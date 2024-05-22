export const localOpt = (element, type, value = null, first = false) => {
    const valueType = typeof value;

    const formatTypes = {
      container: () => {
        if (first && this.opts?.["custom"]?.[element]?.hasOwnProperty(type)) {
          return this.opts["custom"][element][type];
        }

        if (valueType != "object") {
          return (this.opts["custom"][element][type] = value);
        }
        const opt = this.opts["custom"]?.[element]?.[type] || {};
        this.opts["custom"][element][type] = Object.assign(opt, {
          ...value,
        });
      },
      tag: () => {
        if (first && this.opts?.["custom"]?.[element]?.hasOwnProperty(type)) {
          return this.opts["custom"][element][type];
        }

        if (valueType != "object") {
          return (this.opts["custom"][element][type] = value);
        }
        const opt = this.opts["custom"]?.[element]?.[type] || {};
        this.opts["custom"][element][type] = Object.assign(opt, {
          ...value,
        });
      },
      config: () => {
        if (first && this.opts?.["config"]?.hasOwnProperty(type)) {
          return this.opts["config"][type] || "";
        }

        if (valueType != "object") {
          return (this.opts["config"][type] = value);
        }
        const opt = this.opts["config"]?.[type] || {};
        this.opts["config"][type] = Object.assign(opt, {
          ...value,
        });
      },
    };

    return formatTypes?.[element]?.();
  }