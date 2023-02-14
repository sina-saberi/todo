
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Input as Imp } from "./Input";

export default {
    title: 'atoms',
    component: Imp,
    argTypes: {

    },
} as ComponentMeta<typeof Imp>;
const Template: ComponentStory<typeof Imp> = (args) => {
    const [value, setValue] = useState(args.value);
    return (
        <div className="w-[300px] flex">
            <Imp {...args} value={value} onChange={(e) => { setValue(e.target.value); args.onChange(e) }} />
        </div>
    );
}
export const Input = Template.bind({});
Input.args = {
    id: "atomic-input",
    name: "atomic-input",
    label: "input label",
    value: "some value",
    placeholder: "type..."
};