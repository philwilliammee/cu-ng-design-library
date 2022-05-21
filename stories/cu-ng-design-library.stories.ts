import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CuNgDesignLibraryComponent, CuNgDesignLibraryModule, CuNgDesignLibraryService} from 'cu-ng-design-library';

export default {
  title: 'Example/MyLib',
  component: CuNgDesignLibraryComponent,
  decorators: [
    moduleMetadata({
      imports: [CuNgDesignLibraryModule],
    }),
  ],
} as Meta;

const Template: Story<CuNgDesignLibraryComponent> = (args: CuNgDesignLibraryComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<CuNgDesignLibraryComponent>;
