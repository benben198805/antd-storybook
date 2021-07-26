import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { CustomSwitchComponent } from 'src/app/custom-switch/custom-switch.component';

export default {
  title: 'Example/CustomSwitch',
  component: CustomSwitchComponent,
  argTypes: {
    openText: { control: 'text' },
    closeText: { control: 'text' }
  },
  decorators: [
    moduleMetadata({
      imports: [NzSwitchModule]
    }
  ]
} as Meta;

const Template: Story<CustomSwitchComponent> = (args: CustomSwitchComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};
