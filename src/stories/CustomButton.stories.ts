import { Story, Meta } from '@storybook/angular/types-6-0';
import { CustomButtonComponent } from 'src/app/custom-button/custom-button.component';

export default {
  title: 'Example/CustomButton',
  component: CustomButtonComponent,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<CustomButtonComponent> = (args: CustomButtonComponent) => ({
  props: args,
});

export const Red = Template.bind({});
Red.args = {
  text: "red",
  color: 'red',
};

export const Blue = Template.bind({});
Blue.args = {
  text: "blue",
  color: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  text: "green",
  color: 'green',
};

