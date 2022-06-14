import { Button, ButtonProps } from ".";
import {Story, ComponentMeta} from '@storybook/react' 

export default {
    title:'Buttons/Button',
    component: Button,
    argTypes: {
        variant: {
            defaultValue: 'primary',
            control: {
                type: 'select',
                values: ['primary', 'secondary', 'outline']
            }
        }
    }
} as ComponentMeta<typeof Button>

export const Primary: Story<ButtonProps> = (args) => (
    <Button {...args}>Santana Fernando</Button>
)

export const Secondary: Story<ButtonProps> = (args) => (
    <Button {...args}>Santana Fernando</Button>
)

export const Outline: Story<ButtonProps> = (args) => (
    <Button {...args}>Santana Fernando</Button>
)


Secondary.args = {variant: 'secondary'}
Outline.args = {variant: 'outline'}