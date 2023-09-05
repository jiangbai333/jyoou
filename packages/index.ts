import Button from "./button/";

// 按需引入 编译时会有警告
export { Button };

const component = [Button];

const JYoou = {
    install(Vue: any): any {
        component.forEach((item) => {
            Vue.component(item.name, Button);
        });
    },
    ...component
};

export default JYoou;