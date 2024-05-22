<script setup>
  import { onMounted, getCurrentInstance } from "vue";
  import { saveTemplate } from "../utils/saveTemplate";
  import { reset } from "../utils/reset";
  import { init } from "../utils/init";
  import { startTagChange } from "../utils/startTagChange";
  import { excludeImage } from "../utils/excludeImage";
  import { changeValue } from "../utils/changeValue";
  import { changeActionPhone } from "../utils/changeActionPhone";
  import { changeActionPhoneMessage } from "../utils/changeActionPhoneMessage";
  import { changeAction } from "../utils/changeAction";
  import { changeIcon } from "../utils/changeIcon";
  import { changeTitle } from "../utils/changeTitle";
  import { changeImage } from "../utils/changeImage";
  import { changeType } from "../utils/changeType";
  import { changeFields } from "../utils/changeFields";
  import { drawIcon } from "../utils/drawIcon";
  import { formatAlignOptions } from "../utils/formatAlignOptions";
  import { changeAlign } from "../utils/changeAlign";
  import { localOpt } from "../utils/localOpt";
  import { changeWidth } from "../utils/changeWidth";
  import { changeRadius } from "../utils/changeRadius";
  import { changeFontSize } from "../utils/changeFontSize";
  import { changeBorder } from "../utils/changeBorder";
  import { changeColor } from "../utils/changeColor";
  import { changeBorderColor } from "../utils/changeBorderColor";
  import { changeBorderWidth } from "../utils/changeBorderWidth";
  import { changeTextTag } from "../utils/changeTextTag";
  
  const props = defineProps({
    toast: Function,
    state: Object,
    localOpt: Function,
  });
  
  onMounted(() => {
    const { refs } = getCurrentInstance();
    
    saveTemplate(refs, props.state, props.localOpt, props.toast);
    reset();
    startTagChange(refs, props.state.tag);
    init(refs, props.state, props.localOpt);
    excludeImage(refs, props.state, props.localOpt);
    changeValue(refs, props.state, props.localOpt);
    changeActionPhone(refs, props.state, props.localOpt);
    changeActionPhoneMessage(refs, props.state, props.localOpt);
    changeAction(refs, props.state, props.localOpt);
    changeIcon(refs, props.state, props.localOpt);
    changeTitle(refs, props.state, props.localOpt);
    changeImage(refs, props.state, props.localOpt);
    changeType(refs, props.state, props.localOpt);
    changeFields(refs, props.state, props.localOpt);
    drawIcon(refs, props.state, props.localOpt);
    formatAlignOptions(refs, props.state, props.localOpt);
    changeAlign(refs, props.state, props.localOpt);
    localOpt(refs, props.state, props.localOpt);
    changeWidth(refs, props.state, props.localOpt);
    changeRadius(refs, props.state, props.localOpt);
    changeFontSize(refs, props.state, props.localOpt);
    changeBorder(refs, props.state, props.localOpt);
    changeColor(refs, props.state, props.localOpt);
    changeBorderColor(refs, props.state, props.localOpt);
    changeBorderWidth(refs, props.state, props.localOpt);
    changeTextTag(refs, props.state, props.localOpt);
    changePositionImage(refs, props.state, props.localOpt);
  });
</script>
  