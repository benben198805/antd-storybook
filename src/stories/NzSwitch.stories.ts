import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NzSwitchComponent, NzSwitchModule } from 'ng-zorro-antd/switch';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule } from 'src/app/app.module';

export default {
  title: 'Example/NzSwitch',
  component: NzSwitchComponent,
  decorators: [
    moduleMetadata({
      declarations: [NzSwitchComponent],
      imports: [
        // AppModule,
        // BrowserModule,
        // AppRoutingModule,
        // FormsModule,
        // HttpClientModule,
        // BrowserAnimationsModule,
        NzSwitchModule
      ]
    })
  ]
} as Meta;

const Template: Story<NzSwitchComponent> = (args: NzSwitchComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};
