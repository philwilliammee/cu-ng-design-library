import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { AlertComponent, AlertModule } from 'cu-ng-design-library';

export default {
  title: 'CU-NG-Design-Library/Components/Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [AlertModule],
    }),
  ],

  argTypes: {
    accent: {
      control: {
        type: 'select',
        options: ['blue', 'blue-green', 'gold', 'green', 'purple', 'red'],
      },
    },
    fill: {
      control: {
        type: 'boolean',
      },
    },
    heavyTop: {
      control: {
        type: 'boolean',
      },
    },
    indent: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4],
      },
    },
  },
} as Meta;

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  props: args,
  template: `
  <lib-alert></lib-alert>

  <lib-alert [options]="options">
    <div class="alert-content">
      <h3>Alert Title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        ultricies, nisl nec tincidunt lacinia, nisl nisl aliquet nisl, et
        aliquet nisl nisl sit amet nisl. Sed ultricies, nisl nec tincidunt
        lacinia, nisl nisl aliquet nisl, et aliquet nisl nisl sit amet nisl.
      </p>
    </div>
  </lib-alert>
  `,
});

export const Default = Template.bind({});

Default.args = {
  options: {
    accent: 'blue',
    fill: false,
    heavyTop: false,
    indent: 1,
  },
} as Partial<AlertComponent>;
