import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CustomTagComponent } from 'src/app/custom-tag/custom-tag.component';

export default {
  title: 'Example/CustomTag',
  component: CustomTagComponent,
  argTypes: {
    color: { control: 'color' },
    text: { control: 'text' }
  },
  decorators: [
    moduleMetadata({
      imports: [NzTagModule]
    })
  ]
} as Meta;

const Template: Story<CustomTagComponent> = (args: CustomTagComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};
