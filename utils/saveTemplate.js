import { localOpt } from "./localOpt"; 

export const saveTemplate = (el) => {
    refs.salvar_template.value.addEventListener("click", async () => {
      const payload = { opts: state };
  
      const action = localOpt("config", "action", null, true);
      if (action === "whatsapp") {
        const phone = localOpt("config", "action_phone", null, true);
        if (!phone) {
          return toast.error("Insira um número de telefone na aba 'Ação'");
        }
      }
  
      state.loading = true;
    });
  };
  