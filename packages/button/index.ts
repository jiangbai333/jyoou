import Button from "./src/Index.vue";

Button.install = (Vue: any) => Vue.component(Button.name, Button);

export default Button;