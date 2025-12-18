import type { Schema, Struct } from '@strapi/strapi';

export interface AboutListItemAboutListItem extends Struct.ComponentSchema {
  collectionName: 'components_about_list_item_about_list_items';
  info: {
    displayName: 'about-list-item';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeMission extends Struct.ComponentSchema {
  collectionName: 'components_home_missions';
  info: {
    displayName: 'mission';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    featuresDescriptions: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    highlightedWord: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean;
    mainTitle: Schema.Attribute.String;
    videoLabel: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface ItemsItems extends Struct.ComponentSchema {
  collectionName: 'components_items_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ListItemsListItems extends Struct.ComponentSchema {
  collectionName: 'components_list_items_list_items';
  info: {
    displayName: 'listItems';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTest extends Struct.ComponentSchema {
  collectionName: 'components_shared_tests';
  info: {
    displayName: 'test';
    icon: 'connector';
  };
  attributes: {};
}

export interface SharedTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_items';
  info: {
    displayName: 'testimonialItem';
  };
  attributes: {
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface WhyChooseItemWhyChooseItem extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_item_why_choose_items';
  info: {
    displayName: 'why-choose-item';
  };
  attributes: {};
}

export interface WhyChooseUsWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_us_why_chooseuses';
  info: {
    displayName: 'whyChooseUs';
  };
  attributes: {
    circularText: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<'items.items', true>;
    sinceYear: Schema.Attribute.BigInteger;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-list-item.about-list-item': AboutListItemAboutListItem;
      'home.mission': HomeMission;
      'items.items': ItemsItems;
      'list-items.list-items': ListItemsListItems;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.test': SharedTest;
      'shared.testimonial-item': SharedTestimonialItem;
      'why-choose-item.why-choose-item': WhyChooseItemWhyChooseItem;
      'why-choose-us.why-choose-us': WhyChooseUsWhyChooseUs;
    }
  }
}
