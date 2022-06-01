import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  MainComponent,
  PrimaryContentComponent,
  SecondaryContentComponent,
  TwoColumnComponent,
  TwoColumnModule,
} from 'cu-ng-design-library';

export default {
  title: 'CU-NG-Design-Library/Pages/TwoColumn',
  component: TwoColumnComponent,
  declarations: [],
  decorators: [
    moduleMetadata({
      imports: [TwoColumnModule],
      declarations: [
        MainComponent,
        PrimaryContentComponent,
        SecondaryContentComponent,
      ],
    }),
  ],
} as Meta;

const Template: Story<TwoColumnComponent> = (args: TwoColumnComponent) => ({
  props: args,
  template: `
    <lib-two-column >
      <div primary>
        <h1>Template</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          dignissimos temporibus enim. Impedit,
          voluptatum
          error laborum, dolorem, nulla qui molestiae vitae fugiat adipisci eos
          asperiores nobis beatae voluptatibus
          commodi
          natus?
        </p>
        <h2>Sub Content</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
          consectetur voluptate quisquam architecto ducimus
          earum magni beatae tenetur repellat. Veniam atque vel deleniti
          voluptatem possimus accusamus quaerat modi eius
          vitae?
          Consequatur maiores fuga officiis placeat voluptatem provident non a
          quam possimus nihil beatae deserunt rem
          dolore nam, dolor deleniti nemo aspernatur in labore commodi sint,
          eius quo! Reiciendis, perferendis laborum.
          Blanditiis, animi possimus quia iste doloremque repudiandae eos
          voluptatum quam libero in tempora ad, facilis
          similique dolorum! Eveniet fuga assumenda ea dolore, aspernatur autem!
          Sit nulla saepe ullam qui id?
          Labore voluptatem ea aperiam repudiandae eum optio doloribus eveniet
          velit mollitia quisquam, consequuntur
          voluptatum minus itaque pariatur voluptatibus autem similique
          blanditiis atque esse illo aliquid recusandae!
          Fugit
          optio atque cum.
          Officia quod placeat tempora, temporibus ad exercitationem similique
          dicta ipsa dolores sunt distinctio, sit
          necessitatibus in. Perferendis harum porro quasi animi deleniti vel
          corrupti eligendi cumque debitis! Tenetur,
          eveniet possimus.
        </p>
      </div>

      <div secondary>
        <h2>Secondary Content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          dignissimos temporibus enim. Impedit,
          voluptatum
          error laborum, dolorem, nulla qui molestiae vitae fugiat adipisci eos
          asperiores nobis beatae voluptatibus
          commodi
          natus?
        </p>
      </div>
    </lib-two-column>
  `,
});

export const Default = Template.bind({});

Default.args = {} as Partial<TwoColumnComponent>;
