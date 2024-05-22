export const init = (change = {}) => {
    const { config, custom } = change?.["data"] || {};

    if (change?.["id"]) {
      this.opts["config"] = { ...this.opts["config"], ...config };
      this.opts["custom"] = { ...this.opts["custom"], ...custom };
      this.opts["id"] = change["id"];
      custom?.["tag"] && this.startTagChange(custom["tag"]);
    } else {
      this.opts["config"] = this.opts["config"];
      this.opts["custom"] = this.opts["custom"];
      delete this.opts["id"];
    }

    const methods = {
      position_tag: (el) => this.changePositionImage(el),
      texto_da_tag: (el) => this.changeTextTag(el),
      salvar_template: (el) => this.save_template(el),
      background_color: (el) => this.changeColor(el),
      text_color: (el) => this.changeColor(el),
      icon_color: (el) => this.changeColor(el, true, "i"),
      border_type: (el) => this.changeBorder(el),
      border_width: (el) => this.changeBorderWidth(el),
      border_color: (el) => this.changeBorderColor(el),
      rounded: (el) => this.changeRadius(el),
      width: (el) => this.changeWidth(el),
      align_horizontal: (el, ref) => this.changeAlign(el, ref),
      align_vertical: (el, ref) => this.changeAlign(el, ref),
      type: (el) => this.changeType(el),
      change_image: (el) => this.changeImage(el),
      change_title: (el) => this.changeTitle(el),
      icon: (el) => this.changeIcon(el),
      exclude_image: (el) => this.excludeImage(el),
      action: (el) => this.changeAction(el),
      action_link: (el) => this.changeValue(el, "action_url"),
      action_phone: (el) => this.changeActionPhone(el),
      action_phone_message: (el) => this.changeActionPhoneMessage(el),
      only: (el) => this.changeValue(el, "only"),
      stock: (el) => this.changeValue(el, "stock"),
      fontSize: (el) => this.changeFontSize(el),
    };

    Object.entries(this.refs).forEach(([ref, element]) =>
      methods?.[ref]?.(element, ref)
    );
  }