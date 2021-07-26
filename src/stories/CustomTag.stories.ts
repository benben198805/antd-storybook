import { Story, Meta } from '@storybook/angular';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { CustomTagComponent } from 'src/app/custom-tag/custom-tag.component';

export default {
  title: 'Example/CustomTag',
  component: CustomTagComponent,
  argTypes: {
    color: { control: 'color' },
    text: { control: 'text' }
  },
} as Meta;

const Template: Story<NzTagComponent> = (args: NzTagComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};
