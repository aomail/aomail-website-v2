import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents `true` or `false` values. */
  BooleanType: any;
  CustomData: any;
  /** A ISO 8601 compliant datetime value */
  DateTime: any;
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: any;
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: any;
  ItemId: any;
  JsonField: any;
  MetaTagAttributes: any;
  UploadId: any;
};

export type AboutUsPageModelHeroParagraphField = {
  __typename?: 'AboutUsPageModelHeroParagraphField';
  blocks: Array<LandingPageV1Record>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

export type AboutUsPageModelPageContentBlocksField = CtaRecord | FeatureParagraphImageRecord | FullWidthCalloutRecord | SideBySidePRecord | StaffProfileCollectionRecord | TwoColumnListRecord;

export type AboutUsPageModelPageContentField = {
  __typename?: 'AboutUsPageModelPageContentField';
  blocks: Array<AboutUsPageModelPageContentBlocksField>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

/** Record of type About Us page (about_us_page) */
export type AboutUsPageRecord = {
  __typename?: 'AboutUsPageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  heroParagraph?: Maybe<AboutUsPageModelHeroParagraphField>;
  id: Scalars['ItemId'];
  mainHeading?: Maybe<Scalars['String']>;
  pageContent?: Maybe<AboutUsPageModelPageContentField>;
  pageMeta?: Maybe<SeoField>;
  preview?: Maybe<Scalars['JsonField']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type About Us page (about_us_page) */
export type AboutUsPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type BlogArticleModelArticleField = {
  __typename?: 'BlogArticleModelArticleField';
  blocks: Array<TwoColumnListRecord>;
  links: Array<BlogArticleModelArticleLinksField>;
  value: Scalars['JsonField'];
};

export type BlogArticleModelArticleLinksField = AboutUsPageRecord | BlogArticleRecord | ServiceRecord;

export type BlogArticleModelFilter = {
  _createdAt?: Maybe<CreatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  id?: Maybe<ItemIdFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  article?: Maybe<StructuredTextFilter>;
  mainImage?: Maybe<FileFilter>;
  summary?: Maybe<StructuredTextFilter>;
  seoMeta?: Maybe<SeoFilter>;
  slug?: Maybe<SlugFilter>;
  title?: Maybe<StringFilter>;
  OR?: Maybe<Array<Maybe<BlogArticleModelFilter>>>;
};

export enum BlogArticleModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

export type BlogArticleModelSummaryField = {
  __typename?: 'BlogArticleModelSummaryField';
  blocks: Array<LandingPageV1Record>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

/** Record of type Blog article (blog_article) */
export type BlogArticleRecord = {
  __typename?: 'BlogArticleRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  article?: Maybe<BlogArticleModelArticleField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  mainImage?: Maybe<FileField>;
  seoMeta?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<BlogArticleModelSummaryField>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Blog article (blog_article) */
export type BlogArticleRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Record of type Blog List Page (blog_page) */
export type BlogPageRecord = {
  __typename?: 'BlogPageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  canonicalPath?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  pageMeta?: Maybe<SeoField>;
  pageSlug?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['JsonField']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Blog List Page (blog_page) */
export type BlogPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['BooleanType']>;
};


export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
};

export enum ColorBucketType {
  red = 'red',
  orange = 'orange',
  pink = 'pink',
  cyan = 'cyan',
  purple = 'purple',
  blue = 'blue',
  yellow = 'yellow',
  green = 'green',
  brown = 'brown',
  grey = 'grey',
  white = 'white',
  black = 'black'
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha?: Maybe<Scalars['IntType']>;
  blue?: Maybe<Scalars['IntType']>;
  green?: Maybe<Scalars['IntType']>;
  hex?: Maybe<Scalars['String']>;
  red?: Maybe<Scalars['IntType']>;
};

/** Record of type Company Information (Global) (company_information_global) */
export type CompanyInformationGlobalRecord = {
  __typename?: 'CompanyInformationGlobalRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  companyAddress?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  gmbPageUrl?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  mainTelephoneNumber?: Maybe<Scalars['String']>;
  mainTelephoneNumberInternationalUnformatted?: Maybe<Scalars['String']>;
  officeLocation?: Maybe<LatLonField>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Company Information (Global) (company_information_global) */
export type CompanyInformationGlobalRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Company Information (Global) (company_information_global) */
export type CompanyInformationGlobalRecordCompanyAddressArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

/** Record of type Contact Us page (contact_page) */
export type ContactPageRecord = {
  __typename?: 'ContactPageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  canonicalPath?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  location?: Maybe<LatLonField>;
  pageMeta?: Maybe<SeoField>;
  pageSlug?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['JsonField']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Contact Us page (contact_page) */
export type ContactPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: Maybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Record of type PDF Credentials Page (credentials_page) */
export type CredentialsPageRecord = {
  __typename?: 'CredentialsPageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  canonicalPath?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  fileDownload?: Maybe<FileField>;
  flipsnackEmbedUrl?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  pageMeta?: Maybe<SeoField>;
  pageSlug?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['JsonField']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type PDF Credentials Page (credentials_page) */
export type CredentialsPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Record of type CTA (cta) */
export type CtaRecord = {
  __typename?: 'CtaRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  accentImage?: Maybe<FileField>;
  createdAt: Scalars['DateTime'];
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  subtext?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type CTA (cta) */
export type CtaRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type CTA (cta) */
export type CtaRecordSubtextArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};



export enum FaviconType {
  icon = 'icon',
  appleTouchIcon = 'appleTouchIcon',
  msApplication = 'msApplication'
}

export type FeatureParagraphImageModelParagraphField = {
  __typename?: 'FeatureParagraphImageModelParagraphField';
  blocks: Array<LandingPageV1Record>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

/** Record of type Feature paragraph with image (feature_paragraph_image) */
export type FeatureParagraphImageRecord = {
  __typename?: 'FeatureParagraphImageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  cropImage?: Maybe<Scalars['BooleanType']>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  imagePosition?: Maybe<Scalars['String']>;
  paragraph?: Maybe<FeatureParagraphImageModelParagraphField>;
  patternBackground?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Feature paragraph with image (feature_paragraph_image) */
export type FeatureParagraphImageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type FeatureParagraphModelParagraphField = {
  __typename?: 'FeatureParagraphModelParagraphField';
  blocks: Array<LandingPageV1Record>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

/** Record of type Feature paragraph (feature_paragraph) */
export type FeatureParagraphRecord = {
  __typename?: 'FeatureParagraphRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  paragraph?: Maybe<FeatureParagraphModelParagraphField>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Feature paragraph (feature_paragraph) */
export type FeatureParagraphRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type FileField = {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<Maybe<ColorField>>;
  copyright?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['CustomData']>;
  exifInfo?: Maybe<Scalars['CustomData']>;
  filename: Scalars['String'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Maybe<Scalars['String']>>;
  tags: Array<Maybe<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};


export type FileFieldAltArgs = {
  locale?: Maybe<SiteLocale>;
};


export type FileFieldBlurUpThumbArgs = {
  punch?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParams>;
};


export type FileFieldCustomDataArgs = {
  locale?: Maybe<SiteLocale>;
};


export type FileFieldFocalPointArgs = {
  locale?: Maybe<SiteLocale>;
};


export type FileFieldResponsiveImageArgs = {
  imgixParams?: Maybe<ImgixParams>;
  sizes?: Maybe<Scalars['String']>;
};


export type FileFieldTitleArgs = {
  locale?: Maybe<SiteLocale>;
};


export type FileFieldUrlArgs = {
  imgixParams?: Maybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: Maybe<Scalars['UploadId']>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: Maybe<Scalars['UploadId']>;
  /** Filter records that have one of the specified uploads */
  in?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};


export type FullWidthCalloutModelCalloutField = {
  __typename?: 'FullWidthCalloutModelCalloutField';
  blocks: Array<LandingPageV1Record>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

/** Record of type Full width callout (full_width_callout) */
export type FullWidthCalloutRecord = {
  __typename?: 'FullWidthCalloutRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  callout?: Maybe<FullWidthCalloutModelCalloutField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  subheading?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Full width callout (full_width_callout) */
export type FullWidthCalloutRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
};

export type HomepageModelContentSectionsField = FeatureParagraphImageRecord | FeatureParagraphRecord;

export type HomepageModelHeroParagraphField = {
  __typename?: 'HomepageModelHeroParagraphField';
  blocks: Array<LandingPageV1Record>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

/** Record of type Homepage (homepage) */
export type HomepageRecord = {
  __typename?: 'HomepageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  contentSections?: Maybe<Array<Maybe<HomepageModelContentSectionsField>>>;
  createdAt: Scalars['DateTime'];
  heroParagraph?: Maybe<HomepageModelHeroParagraphField>;
  id: Scalars['ItemId'];
  mainHeading?: Maybe<Scalars['String']>;
  pageMeta?: Maybe<SeoField>;
  preview?: Maybe<Scalars['JsonField']>;
  serviceCards?: Maybe<Array<Maybe<PreviewCardRecord>>>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Homepage (homepage) */
export type HomepageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   */
  ar?: Maybe<Scalars['String']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: Maybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: Maybe<Scalars['String']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: Maybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: Maybe<Scalars['IntType']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: Maybe<Scalars['String']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: Maybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: Maybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: Maybe<Scalars['FloatType']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: Maybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: Maybe<Scalars['IntType']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: Maybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: Maybe<Scalars['FloatType']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: Maybe<Scalars['IntType']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: Maybe<Scalars['IntType']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: Maybe<Scalars['String']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: Maybe<Scalars['IntType']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   */
  borderBottom?: Maybe<Scalars['IntType']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   */
  borderLeft?: Maybe<Scalars['IntType']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: Maybe<Scalars['String']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: Maybe<Scalars['String']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   */
  borderRight?: Maybe<Scalars['IntType']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   */
  borderTop?: Maybe<Scalars['IntType']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: Maybe<Scalars['String']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: Maybe<Scalars['IntType']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: Maybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: Maybe<Scalars['IntType']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: Maybe<Scalars['IntType']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: Maybe<Scalars['IntType']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: Maybe<Scalars['IntType']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: Maybe<Scalars['String']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: Maybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: Maybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: Maybe<Scalars['String']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: Maybe<Scalars['IntType']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: Maybe<Scalars['FloatType']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: Maybe<Scalars['IntType']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: Maybe<Scalars['String']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: Maybe<Scalars['IntType']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: Maybe<Scalars['IntType']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: Maybe<Scalars['IntType']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: Maybe<Scalars['FloatType']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: Maybe<Scalars['IntType']>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: Maybe<Scalars['String']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: Maybe<ImgixParamsFill>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: Maybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: Maybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: Maybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: Maybe<Scalars['BooleanType']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: Maybe<Scalars['FloatType']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: Maybe<Scalars['FloatType']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: Maybe<Scalars['IntType']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: Maybe<Scalars['IntType']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: Maybe<Scalars['String']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: Maybe<Scalars['IntType']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: Maybe<Scalars['FloatType']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: Maybe<Scalars['IntType']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: Maybe<Scalars['IntType']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: Maybe<Scalars['IntType']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: Maybe<Scalars['BooleanType']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: Maybe<Scalars['BooleanType']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: Maybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: Maybe<Scalars['String']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: Maybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: Maybe<Scalars['FloatType']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: Maybe<Scalars['FloatType']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: Maybe<Scalars['String']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: Maybe<Scalars['String']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: Maybe<Scalars['String']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: Maybe<Scalars['IntType']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: Maybe<Scalars['IntType']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: Maybe<Scalars['IntType']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: Maybe<Scalars['IntType']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: Maybe<Scalars['String']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: Maybe<Scalars['IntType']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: Maybe<Scalars['IntType']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: Maybe<Scalars['IntType']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   */
  padBottom?: Maybe<Scalars['IntType']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   */
  padLeft?: Maybe<Scalars['IntType']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   */
  padRight?: Maybe<Scalars['IntType']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   */
  padTop?: Maybe<Scalars['IntType']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: Maybe<Scalars['IntType']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf-page-number)
   */
  page?: Maybe<Scalars['IntType']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: Maybe<ImgixParamsPalette>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: Maybe<Scalars['String']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: Maybe<Scalars['IntType']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: Maybe<Scalars['IntType']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: Maybe<Scalars['String']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: Maybe<Scalars['FloatType']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: Maybe<Scalars['IntType']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: Maybe<Scalars['IntType']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: Maybe<Scalars['FloatType']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: Maybe<Scalars['FloatType']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   */
  transparency?: Maybe<ImgixParamsTransparency>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: Maybe<Scalars['String']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: Maybe<Scalars['FloatType']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: Maybe<Scalars['IntType']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: Maybe<Scalars['FloatType']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: Maybe<Scalars['FloatType']>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: Maybe<ImgixParamsTrim>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: Maybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: Maybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: Maybe<Scalars['String']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: Maybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: Maybe<Scalars['String']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: Maybe<Scalars['IntType']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: Maybe<Scalars['IntType']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: Maybe<Scalars['String']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: Maybe<Scalars['IntType']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: Maybe<Scalars['IntType']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: Maybe<Scalars['FloatType']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: Maybe<Scalars['IntType']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: Maybe<Scalars['IntType']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: Maybe<Scalars['IntType']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: Maybe<Scalars['String']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: Maybe<Scalars['IntType']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: Maybe<Scalars['FloatType']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: Maybe<Scalars['IntType']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: Maybe<Scalars['FloatType']>;
};

export enum ImgixParamsAuto {
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye',
  compress = 'compress'
}

export enum ImgixParamsBlendAlign {
  top = 'top',
  bottom = 'bottom',
  middle = 'middle',
  left = 'left',
  right = 'right',
  center = 'center'
}

export enum ImgixParamsBlendCrop {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  faces = 'faces'
}

export enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  scale = 'scale',
  max = 'max'
}

export enum ImgixParamsBlendMode {
  color = 'color',
  burn = 'burn',
  dodge = 'dodge',
  darken = 'darken',
  difference = 'difference',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight',
  normal = 'normal'
}

export enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

export enum ImgixParamsCh {
  width = 'width',
  dpr = 'dpr',
  saveData = 'saveData'
}

export enum ImgixParamsCrop {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  faces = 'faces',
  entropy = 'entropy',
  edges = 'edges',
  focalpoint = 'focalpoint'
}

export enum ImgixParamsCs {
  srgb = 'srgb',
  adobergb1998 = 'adobergb1998',
  tinysrgb = 'tinysrgb',
  strip = 'strip'
}

export enum ImgixParamsFill {
  solid = 'solid',
  blur = 'blur'
}

export enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

export enum ImgixParamsFlip {
  h = 'h',
  v = 'v',
  hv = 'hv'
}

export enum ImgixParamsFm {
  gif = 'gif',
  jpg = 'jpg',
  jp2 = 'jp2',
  json = 'json',
  jxr = 'jxr',
  pjpg = 'pjpg',
  mp4 = 'mp4',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webp = 'webp',
  webm = 'webm'
}

export enum ImgixParamsMarkAlign {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
  left = 'left',
  center = 'center',
  right = 'right'
}

export enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

export enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

export enum ImgixParamsTransparency {
  grid = 'grid'
}

export enum ImgixParamsTrim {
  auto = 'auto',
  color = 'color'
}

export enum ImgixParamsTxtAlign {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
  left = 'left',
  center = 'center',
  right = 'right'
}

export enum ImgixParamsTxtClip {
  start = 'start',
  middle = 'middle',
  end = 'end',
  ellipsis = 'ellipsis'
}

export enum ImgixParamsTxtFit {
  max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: Maybe<Scalars['BooleanType']>;
};



/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: Maybe<Scalars['ItemId']>;
  /** Exclude the record with the specified ID */
  neq?: Maybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  /** Search records that do not have the specified IDs */
  notIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
};

export enum ItemStatus {
  draft = 'draft',
  updated = 'updated',
  published = 'published'
}


/** Specifies how to filter JSON fields */
export type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

export type LandingPageV1ModelFilter = {
  _createdAt?: Maybe<CreatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  id?: Maybe<ItemIdFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  preview?: Maybe<JsonFilter>;
  canonicalPath?: Maybe<SlugFilter>;
  pageMeta?: Maybe<SeoFilter>;
  pageSlug?: Maybe<SlugFilter>;
  title?: Maybe<StringFilter>;
  pageContent?: Maybe<TextFilter>;
  OR?: Maybe<Array<Maybe<LandingPageV1ModelFilter>>>;
};

export enum LandingPageV1ModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Landing Page v1 (landing_page_v1) */
export type LandingPageV1Record = {
  __typename?: 'LandingPageV1Record';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  canonicalPath?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  pageContent?: Maybe<Scalars['String']>;
  pageMeta?: Maybe<SeoField>;
  pageSlug?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['JsonField']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Landing Page v1 (landing_page_v1) */
export type LandingPageV1Record_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Landing Page v1 (landing_page_v1) */
export type LandingPageV1RecordPageContentArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

export type LatLonField = {
  __typename?: 'LatLonField';
  latitude?: Maybe<Scalars['FloatType']>;
  longitude?: Maybe<Scalars['FloatType']>;
};

/** Record of type Legal list page (legal_list_page) */
export type LegalListPageRecord = {
  __typename?: 'LegalListPageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  canonicalPath?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  pageMeta?: Maybe<SeoField>;
  pageSlug?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['JsonField']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Legal list page (legal_list_page) */
export type LegalListPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type LegalPageModelFilter = {
  _createdAt?: Maybe<CreatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  id?: Maybe<ItemIdFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  summary?: Maybe<StructuredTextFilter>;
  legalPageSlug?: Maybe<SlugFilter>;
  legalText?: Maybe<StructuredTextFilter>;
  canonicalPath?: Maybe<SlugFilter>;
  preview?: Maybe<JsonFilter>;
  title?: Maybe<StringFilter>;
  pageMeta?: Maybe<SeoFilter>;
  OR?: Maybe<Array<Maybe<LegalPageModelFilter>>>;
};

export type LegalPageModelLegalTextField = {
  __typename?: 'LegalPageModelLegalTextField';
  blocks: Array<LandingPageV1Record>;
  links: Array<LegalPageModelLegalTextLinksField>;
  value: Scalars['JsonField'];
};

export type LegalPageModelLegalTextLinksField = ContactPageRecord | LegalPageRecord;

export enum LegalPageModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

export type LegalPageModelSummaryField = {
  __typename?: 'LegalPageModelSummaryField';
  blocks: Array<LandingPageV1Record>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

/** Record of type Legal page (legal_page) */
export type LegalPageRecord = {
  __typename?: 'LegalPageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  canonicalPath?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  legalPageSlug?: Maybe<Scalars['String']>;
  legalText?: Maybe<LegalPageModelLegalTextField>;
  pageMeta?: Maybe<SeoField>;
  preview?: Maybe<Scalars['JsonField']>;
  summary?: Maybe<LegalPageModelSummaryField>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Legal page (legal_page) */
export type LegalPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


export enum MuxThumbnailFormatType {
  jpg = 'jpg',
  png = 'png',
  gif = 'gif'
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: Maybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: Maybe<UploadOrientation>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['IntType']>;
  /** Filter records with a value that's less than the one specified */
  lt?: Maybe<Scalars['IntType']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars['IntType']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['IntType']>;
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['IntType']>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['IntType']>;
};

/** Record of type Preview Card (preview_card) */
export type PreviewCardRecord = {
  __typename?: 'PreviewCardRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  linkTarget?: Maybe<ServiceRecord>;
  linkText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Preview Card (preview_card) */
export type PreviewCardRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: Maybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allBlogArticlesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLandingPageV1sMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLegalPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allResourcesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allServicesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStaffProfilesMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta?: Maybe<CollectionMetadata>;
  /** Returns the single instance record */
  _site: Site;
  /** Returns the single instance record */
  aboutUsPage?: Maybe<AboutUsPageRecord>;
  /** Returns a collection of records */
  allBlogArticles: Array<BlogArticleRecord>;
  /** Returns a collection of records */
  allLandingPageV1s: Array<LandingPageV1Record>;
  /** Returns a collection of records */
  allLegalPages: Array<LegalPageRecord>;
  /** Returns a collection of records */
  allResources: Array<ResourceRecord>;
  /** Returns a collection of records */
  allServices: Array<ServiceRecord>;
  /** Returns a collection of records */
  allStaffProfiles: Array<StaffProfileRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  blogArticle?: Maybe<BlogArticleRecord>;
  /** Returns the single instance record */
  blogPage?: Maybe<BlogPageRecord>;
  /** Returns the single instance record */
  companyInformationGlobal?: Maybe<CompanyInformationGlobalRecord>;
  /** Returns the single instance record */
  contactPage?: Maybe<ContactPageRecord>;
  /** Returns the single instance record */
  credentialsPage?: Maybe<CredentialsPageRecord>;
  /** Returns the single instance record */
  homepage?: Maybe<HomepageRecord>;
  /** Returns a specific record */
  landingPageV1?: Maybe<LandingPageV1Record>;
  /** Returns the single instance record */
  legalListPage?: Maybe<LegalListPageRecord>;
  /** Returns a specific record */
  legalPage?: Maybe<LegalPageRecord>;
  /** Returns a specific record */
  resource?: Maybe<ResourceRecord>;
  /** Returns a specific record */
  service?: Maybe<ServiceRecord>;
  /** Returns a specific record */
  staffProfile?: Maybe<StaffProfileRecord>;
  /** Returns the single instance record */
  templatePage?: Maybe<TemplatePageRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
};


/** The query root for this schema */
export type Query_AllBlogArticlesMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<BlogArticleModelFilter>;
};


/** The query root for this schema */
export type Query_AllLandingPageV1sMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<LandingPageV1ModelFilter>;
};


/** The query root for this schema */
export type Query_AllLegalPagesMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<LegalPageModelFilter>;
};


/** The query root for this schema */
export type Query_AllResourcesMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<ResourceModelFilter>;
};


/** The query root for this schema */
export type Query_AllServicesMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<ServiceModelFilter>;
};


/** The query root for this schema */
export type Query_AllStaffProfilesMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<StaffProfileModelFilter>;
};


/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<UploadFilter>;
};


/** The query root for this schema */
export type Query_SiteArgs = {
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAboutUsPageArgs = {
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAllBlogArticlesArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<BlogArticleModelFilter>;
  orderBy?: Maybe<Array<Maybe<BlogArticleModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAllLandingPageV1sArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<LandingPageV1ModelFilter>;
  orderBy?: Maybe<Array<Maybe<LandingPageV1ModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAllLegalPagesArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<LegalPageModelFilter>;
  orderBy?: Maybe<Array<Maybe<LegalPageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAllResourcesArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<ResourceModelFilter>;
  orderBy?: Maybe<Array<Maybe<ResourceModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAllServicesArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<ServiceModelFilter>;
  orderBy?: Maybe<Array<Maybe<ServiceModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAllStaffProfilesArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<StaffProfileModelFilter>;
  orderBy?: Maybe<Array<Maybe<StaffProfileModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAllUploadsArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<UploadFilter>;
  orderBy?: Maybe<Array<Maybe<UploadOrderBy>>>;
};


/** The query root for this schema */
export type QueryBlogArticleArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<BlogArticleModelFilter>;
  orderBy?: Maybe<Array<Maybe<BlogArticleModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryBlogPageArgs = {
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryCompanyInformationGlobalArgs = {
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryContactPageArgs = {
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryCredentialsPageArgs = {
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryHomepageArgs = {
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryLandingPageV1Args = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<LandingPageV1ModelFilter>;
  orderBy?: Maybe<Array<Maybe<LandingPageV1ModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryLegalListPageArgs = {
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryLegalPageArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<LegalPageModelFilter>;
  orderBy?: Maybe<Array<Maybe<LegalPageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryResourceArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<ResourceModelFilter>;
  orderBy?: Maybe<Array<Maybe<ResourceModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryServiceArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<ServiceModelFilter>;
  orderBy?: Maybe<Array<Maybe<ServiceModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryStaffProfileArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<StaffProfileModelFilter>;
  orderBy?: Maybe<Array<Maybe<StaffProfileModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTemplatePageArgs = {
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryUploadArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<UploadFilter>;
  orderBy?: Maybe<Array<Maybe<UploadOrderBy>>>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: Maybe<ResolutionType>;
  /** Exclude uploads with the specified resolution */
  neq?: Maybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: Maybe<Array<Maybe<ResolutionType>>>;
  /** Search uploads without the specified resolutions */
  notIn?: Maybe<Array<Maybe<ResolutionType>>>;
};

export enum ResolutionType {
  icon = 'icon',
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export type ResourceModelFilter = {
  _createdAt?: Maybe<CreatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  id?: Maybe<ItemIdFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  OR?: Maybe<Array<Maybe<ResourceModelFilter>>>;
};

export enum ResourceModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC'
}

/** Record of type Resource (resource) */
export type ResourceRecord = {
  __typename?: 'ResourceRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Resource (resource) */
export type ResourceRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
};

/** Record of type Rich text (rich_text) */
export type RichTextRecord = {
  __typename?: 'RichTextRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Rich text (rich_text) */
export type RichTextRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Rich text (rich_text) */
export type RichTextRecordTextArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

export type ServiceModelFilter = {
  _createdAt?: Maybe<CreatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  id?: Maybe<ItemIdFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  position?: Maybe<PositionFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  illustration?: Maybe<StringFilter>;
  pageContent?: Maybe<StructuredTextFilter>;
  heroParagraph?: Maybe<StructuredTextFilter>;
  mainHeading?: Maybe<StringFilter>;
  canonicalPath?: Maybe<SlugFilter>;
  pageSlug?: Maybe<SlugFilter>;
  pageMeta?: Maybe<SeoFilter>;
  title?: Maybe<StringFilter>;
  preview?: Maybe<JsonFilter>;
  OR?: Maybe<Array<Maybe<ServiceModelFilter>>>;
};

export type ServiceModelHeroParagraphField = {
  __typename?: 'ServiceModelHeroParagraphField';
  blocks: Array<RichTextRecord>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

export type ServiceModelModularContentField = CtaRecord | SideBySidePRecord | TestimonialRecord;

export enum ServiceModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  illustration_ASC = 'illustration_ASC',
  illustration_DESC = 'illustration_DESC',
  mainHeading_ASC = 'mainHeading_ASC',
  mainHeading_DESC = 'mainHeading_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

export type ServiceModelPageContentBlocksField = FeatureParagraphImageRecord | SideBySidePRecord | TestimonialRecord | TwoColumnListRecord;

export type ServiceModelPageContentField = {
  __typename?: 'ServiceModelPageContentField';
  blocks: Array<ServiceModelPageContentBlocksField>;
  links: Array<ServiceRecord>;
  value: Scalars['JsonField'];
};

/** Record of type Service page (service) */
export type ServiceRecord = {
  __typename?: 'ServiceRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  canonicalPath?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  heroParagraph?: Maybe<ServiceModelHeroParagraphField>;
  id: Scalars['ItemId'];
  illustration?: Maybe<Scalars['String']>;
  leftRightParagraphs?: Maybe<Array<Maybe<FeatureParagraphImageRecord>>>;
  mainHeading?: Maybe<Scalars['String']>;
  modularContent?: Maybe<Array<Maybe<ServiceModelModularContentField>>>;
  pageContent?: Maybe<ServiceModelPageContentField>;
  pageMeta?: Maybe<SeoField>;
  pageSlug?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['IntType']>;
  preview?: Maybe<Scalars['JsonField']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Service page (service) */
export type ServiceRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type SideBySidePModelLeftParagraphField = {
  __typename?: 'SideBySidePModelLeftParagraphField';
  blocks: Array<LandingPageV1Record>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

export type SideBySidePModelRightParagraphField = {
  __typename?: 'SideBySidePModelRightParagraphField';
  blocks: Array<LandingPageV1Record>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

/** Record of type Side by side paragraphs (side_by_side_p) */
export type SideBySidePRecord = {
  __typename?: 'SideBySidePRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  leftHeading?: Maybe<Scalars['String']>;
  leftParagraph?: Maybe<SideBySidePModelLeftParagraphField>;
  rightHeading?: Maybe<Scalars['String']>;
  rightParagraph?: Maybe<SideBySidePModelRightParagraphField>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Side by side paragraphs (side_by_side_p) */
export type SideBySidePRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
};


export type SiteFaviconMetaTagsArgs = {
  variants?: Maybe<Array<Maybe<FaviconType>>>;
};


export type SiteGlobalSeoArgs = {
  locale?: Maybe<SiteLocale>;
};

export enum SiteLocale {
  en = 'en'
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['String']>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['String']>;
  /** Filter records that have one of the specified slugs */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter records that do have one of the specified slugs */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Record of type Staff profile collection (staff_profile_collection) */
export type StaffProfileCollectionRecord = {
  __typename?: 'StaffProfileCollectionRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  profiles: Array<StaffProfileRecord>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Staff profile collection (staff_profile_collection) */
export type StaffProfileCollectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type StaffProfileModelBiographyField = {
  __typename?: 'StaffProfileModelBiographyField';
  blocks: Array<LandingPageV1Record>;
  links: Array<LandingPageV1Record>;
  value: Scalars['JsonField'];
};

export type StaffProfileModelFilter = {
  _createdAt?: Maybe<CreatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  id?: Maybe<ItemIdFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  position?: Maybe<PositionFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  avatar?: Maybe<FileFilter>;
  biography?: Maybe<StructuredTextFilter>;
  jobTitle?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  OR?: Maybe<Array<Maybe<StaffProfileModelFilter>>>;
};

export enum StaffProfileModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  jobTitle_ASC = 'jobTitle_ASC',
  jobTitle_DESC = 'jobTitle_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC'
}

/** Record of type Staff Profile (staff_profile) */
export type StaffProfileRecord = {
  __typename?: 'StaffProfileRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  avatar?: Maybe<FileField>;
  biography?: Maybe<StaffProfileModelBiographyField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  jobTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['IntType']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Staff Profile (staff_profile) */
export type StaffProfileRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: Maybe<ItemStatus>;
  /** Exclude the record with the specified status */
  neq?: Maybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: Maybe<Array<Maybe<ItemStatus>>>;
  /** Search records without the specified statuses */
  notIn?: Maybe<Array<Maybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Filter records based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: Maybe<Scalars['BooleanType']>;
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['String']>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['String']>;
  /** Filter records that equal one of the specified values */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter records that do not equal one of the specified values */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

export type StringMatchesFilter = {
  pattern: Scalars['String'];
  caseSensitive?: Maybe<Scalars['BooleanType']>;
  regexp?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter Structured Text fields */
export type StructuredTextFilter = {
  /** Filter records based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: Maybe<Scalars['BooleanType']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

/** Record of type ***TEMPLATE*** (template_page) */
export type TemplatePageRecord = {
  __typename?: 'TemplatePageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  canonicalPath?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  pageMeta?: Maybe<SeoField>;
  pageSlug?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['JsonField']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type ***TEMPLATE*** (template_page) */
export type TemplatePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Record of type Testimonial (testimonial) */
export type TestimonialRecord = {
  __typename?: 'TestimonialRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<FileField>;
  positionCompany?: Maybe<Scalars['String']>;
  testimonial?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Testimonial (testimonial) */
export type TestimonialRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Testimonial (testimonial) */
export type TestimonialRecordTestimonialArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: Maybe<Scalars['BooleanType']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Record of type 2 Column List (two_column_list) */
export type TwoColumnListRecord = {
  __typename?: 'TwoColumnListRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  serviceList?: Maybe<Scalars['JsonField']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type 2 Column List (two_column_list) */
export type TwoColumnListRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: Maybe<UploadType>;
  /** Exclude uploads with the specified type */
  neq?: Maybe<UploadType>;
  /** Search uploads with the specified types */
  in?: Maybe<Array<Maybe<UploadType>>>;
  /** Search uploads without the specified types */
  notIn?: Maybe<Array<Maybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: Maybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
  /** Search the uploads with the specified alt */
  eq?: Maybe<Scalars['String']>;
  /** Exclude the uploads with the specified alt */
  neq?: Maybe<Scalars['String']>;
  /** Search uploads with the specified values as default alt */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have the specified colors */
  contains?: Maybe<ColorBucketType>;
  /** Filter uploads that have all of the specified colors */
  allIn?: Maybe<Array<Maybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: Maybe<Array<Maybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: Maybe<Array<Maybe<ColorBucketType>>>;
  /** Search for uploads with an exact match */
  eq?: Maybe<Array<Maybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: Maybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars['DateTime']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

export type UploadFilter = {
  type?: Maybe<TypeFilter>;
  inUse?: Maybe<InUseFilter>;
  resolution?: Maybe<ResolutionFilter>;
  size?: Maybe<UploadSizeFilter>;
  tags?: Maybe<UploadTagsFilter>;
  smartTags?: Maybe<UploadTagsFilter>;
  colors?: Maybe<UploadColorsFilter>;
  orientation?: Maybe<OrientationFilter>;
  id?: Maybe<UploadIdFilter>;
  mimeType?: Maybe<UploadMimeTypeFilter>;
  format?: Maybe<UploadFormatFilter>;
  height?: Maybe<UploadHeightFilter>;
  width?: Maybe<UploadWidthFilter>;
  alt?: Maybe<UploadAltFilter>;
  title?: Maybe<UploadTitleFilter>;
  notes?: Maybe<UploadNotesFilter>;
  md5?: Maybe<UploadMd5Filter>;
  author?: Maybe<UploadAuthorFilter>;
  copyright?: Maybe<UploadCopyrightFilter>;
  basename?: Maybe<UploadBasenameFilter>;
  filename?: Maybe<UploadFilenameFilter>;
  _createdAt?: Maybe<UploadCreatedAtFilter>;
  _updatedAt?: Maybe<UploadUpdatedAtFilter>;
  OR?: Maybe<Array<Maybe<UploadFilter>>>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: Maybe<Scalars['String']>;
  /** Exclude the asset with the specified format */
  neq?: Maybe<Scalars['String']>;
  /** Search assets with the specified formats */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search assets that do not have the specified formats */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search all assets larger than the specified height */
  gt?: Maybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified height */
  lt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  gte?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  lte?: Maybe<Scalars['IntType']>;
  /** Search assets with the specified height */
  eq?: Maybe<Scalars['IntType']>;
  /** Search assets that do not have the specified height */
  neq?: Maybe<Scalars['IntType']>;
};


/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: Maybe<Scalars['UploadId']>;
  /** Exclude the asset with the specified ID */
  neq?: Maybe<Scalars['UploadId']>;
  /** Search assets with the specified IDs */
  in?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
  /** Search assets that do not have the specified IDs */
  notIn?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: Maybe<Scalars['String']>;
  /** Exclude the asset with the specified MD5 */
  neq?: Maybe<Scalars['String']>;
  /** Search assets with the specified MD5s */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search assets that do not have the specified MD5s */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
  /** Search the asset with the specified mime type */
  eq?: Maybe<Scalars['String']>;
  /** Exclude the asset with the specified mime type */
  neq?: Maybe<Scalars['String']>;
  /** Search assets with the specified mime types */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search assets that do not have the specified mime types */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

export enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC'
}

export enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search all assets larger than the specified size (in bytes) */
  gt?: Maybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: Maybe<Scalars['IntType']>;
  /** Search assets with the specified size (in bytes) */
  eq?: Maybe<Scalars['IntType']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: Maybe<Scalars['IntType']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to the specified tag */
  contains?: Maybe<Scalars['String']>;
  /** Filter uploads linked to all of the specified tags */
  allIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search for uploads with an exact match */
  eq?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
  /** Search the asset with the specified title */
  eq?: Maybe<Scalars['String']>;
  /** Exclude the asset with the specified title */
  neq?: Maybe<Scalars['String']>;
  /** Search assets with the specified as default title */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search assets that do not have the specified as default title */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

export enum UploadType {
  image = 'image',
  audio = 'audio',
  video = 'video',
  richtext = 'richtext',
  presentation = 'presentation',
  spreadsheet = 'spreadsheet',
  pdfdocument = 'pdfdocument',
  archive = 'archive'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: Maybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars['DateTime']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  duration: Scalars['Int'];
  framerate: Scalars['Int'];
  mp4Url?: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};


export type UploadVideoFieldMp4UrlArgs = {
  res?: Maybe<VideoMp4Res>;
  exactRes?: Maybe<VideoMp4Res>;
};


export type UploadVideoFieldThumbnailUrlArgs = {
  format?: Maybe<MuxThumbnailFormatType>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search all assets larger than the specified width */
  gt?: Maybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified width */
  lt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  gte?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  lte?: Maybe<Scalars['IntType']>;
  /** Search assets with the specified width */
  eq?: Maybe<Scalars['IntType']>;
  /** Search assets that do not have the specified width */
  neq?: Maybe<Scalars['IntType']>;
};

export enum VideoMp4Res {
  low = 'low',
  medium = 'medium',
  high = 'high'
}

export type FocalPoint = {
  __typename?: 'focalPoint';
  x?: Maybe<Scalars['FloatType']>;
  y?: Maybe<Scalars['FloatType']>;
};

export type ResponsiveImageFragmentFragment = (
  { __typename?: 'ResponsiveImage' }
  & Pick<ResponsiveImage, 'srcSet' | 'webpSrcSet' | 'sizes' | 'src' | 'width' | 'height' | 'aspectRatio' | 'alt' | 'title' | 'base64'>
);

export type MetaTagsFragmentFragment = (
  { __typename?: 'Tag' }
  & Pick<Tag, 'attributes' | 'content' | 'tag'>
);

export type FeatureParagraphImageRecordFragmentFragment = (
  { __typename: 'FeatureParagraphImageRecord' }
  & Pick<FeatureParagraphImageRecord, 'id' | 'heading' | 'cropImage' | 'imagePosition'>
  & { paragraph?: Maybe<(
    { __typename?: 'FeatureParagraphImageModelParagraphField' }
    & Pick<FeatureParagraphImageModelParagraphField, 'value'>
  )>, image?: Maybe<(
    { __typename?: 'FileField' }
    & { responsiveImage?: Maybe<(
      { __typename?: 'ResponsiveImage' }
      & ResponsiveImageFragmentFragment
    )> }
  )> }
);

export type CtaRecordFragmentFragment = (
  { __typename: 'CtaRecord' }
  & Pick<CtaRecord, 'id' | 'heading' | 'subtext'>
);

export type FullWidthCalloutRecordFragmentFragment = (
  { __typename: 'FullWidthCalloutRecord' }
  & Pick<FullWidthCalloutRecord, 'id' | 'subheading'>
  & { callout?: Maybe<(
    { __typename?: 'FullWidthCalloutModelCalloutField' }
    & Pick<FullWidthCalloutModelCalloutField, 'value'>
  )> }
);

export type SideBySidePRecordFragmentFragment = (
  { __typename: 'SideBySidePRecord' }
  & Pick<SideBySidePRecord, 'id' | 'leftHeading' | 'rightHeading'>
  & { leftParagraph?: Maybe<(
    { __typename?: 'SideBySidePModelLeftParagraphField' }
    & Pick<SideBySidePModelLeftParagraphField, 'value'>
  )>, rightParagraph?: Maybe<(
    { __typename?: 'SideBySidePModelRightParagraphField' }
    & Pick<SideBySidePModelRightParagraphField, 'value'>
  )> }
);

export type StaffProfileCollectionRecordFragmentFragment = (
  { __typename: 'StaffProfileCollectionRecord' }
  & Pick<StaffProfileCollectionRecord, 'id'>
  & { profiles: Array<(
    { __typename?: 'StaffProfileRecord' }
    & Pick<StaffProfileRecord, 'id' | 'name' | 'jobTitle' | 'position'>
    & { biography?: Maybe<(
      { __typename?: 'StaffProfileModelBiographyField' }
      & Pick<StaffProfileModelBiographyField, 'value'>
    )>, avatar?: Maybe<(
      { __typename?: 'FileField' }
      & { responsiveImage?: Maybe<(
        { __typename?: 'ResponsiveImage' }
        & ResponsiveImageFragmentFragment
      )> }
    )> }
  )> }
);

export type TwoColumnListRecordFragmentFragment = (
  { __typename: 'TwoColumnListRecord' }
  & Pick<TwoColumnListRecord, 'id' | 'serviceList'>
);

export type TestimonialRecordFragmentFragment = (
  { __typename: 'TestimonialRecord' }
  & Pick<TestimonialRecord, 'id' | 'name' | 'testimonial' | 'positionCompany'>
  & { photo?: Maybe<(
    { __typename?: 'FileField' }
    & { responsiveImage?: Maybe<(
      { __typename?: 'ResponsiveImage' }
      & ResponsiveImageFragmentFragment
    )> }
  )> }
);

export type GetAboutUsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutUsQuery = (
  { __typename?: 'Query' }
  & { aboutUsPage?: Maybe<(
    { __typename?: 'AboutUsPageRecord' }
    & Pick<AboutUsPageRecord, 'mainHeading'>
    & { _seoMetaTags: Array<(
      { __typename?: 'Tag' }
      & MetaTagsFragmentFragment
    )>, heroParagraph?: Maybe<(
      { __typename?: 'AboutUsPageModelHeroParagraphField' }
      & Pick<AboutUsPageModelHeroParagraphField, 'value'>
    )>, pageContent?: Maybe<(
      { __typename?: 'AboutUsPageModelPageContentField' }
      & Pick<AboutUsPageModelPageContentField, 'value'>
      & { blocks: Array<(
        { __typename?: 'CtaRecord' }
        & CtaRecordFragmentFragment
      ) | (
        { __typename?: 'FeatureParagraphImageRecord' }
        & FeatureParagraphImageRecordFragmentFragment
      ) | (
        { __typename?: 'FullWidthCalloutRecord' }
        & FullWidthCalloutRecordFragmentFragment
      ) | (
        { __typename?: 'SideBySidePRecord' }
        & SideBySidePRecordFragmentFragment
      ) | (
        { __typename?: 'StaffProfileCollectionRecord' }
        & StaffProfileCollectionRecordFragmentFragment
      ) | (
        { __typename?: 'TwoColumnListRecord' }
        & TwoColumnListRecordFragmentFragment
      )> }
    )> }
  )> }
);

export type GetBlogPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogPageQuery = (
  { __typename?: 'Query' }
  & { blogPage?: Maybe<(
    { __typename?: 'BlogPageRecord' }
    & Pick<BlogPageRecord, 'id' | 'pageSlug' | 'title'>
    & { _seoMetaTags: Array<(
      { __typename?: 'Tag' }
      & MetaTagsFragmentFragment
    )> }
  )> }
);

export type GetBlogPostSummariesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogPostSummariesQuery = (
  { __typename?: 'Query' }
  & { allBlogArticles: Array<(
    { __typename?: 'BlogArticleRecord' }
    & Pick<BlogArticleRecord, 'id' | 'slug' | 'title'>
    & { mainImage?: Maybe<(
      { __typename?: 'FileField' }
      & { responsiveImage?: Maybe<(
        { __typename?: 'ResponsiveImage' }
        & ResponsiveImageFragmentFragment
      )> }
    )>, summary?: Maybe<(
      { __typename?: 'BlogArticleModelSummaryField' }
      & Pick<BlogArticleModelSummaryField, 'value'>
    )> }
  )> }
);

export type GetBlogPostQueryVariables = Exact<{
  pageSlug: Scalars['String'];
}>;


export type GetBlogPostQuery = (
  { __typename?: 'Query' }
  & { blogArticle?: Maybe<(
    { __typename?: 'BlogArticleRecord' }
    & Pick<BlogArticleRecord, 'id' | 'slug' | 'title' | 'updatedAt'>
    & { mainImage?: Maybe<(
      { __typename?: 'FileField' }
      & { responsiveImage?: Maybe<(
        { __typename?: 'ResponsiveImage' }
        & ResponsiveImageFragmentFragment
      )> }
    )>, _seoMetaTags: Array<(
      { __typename?: 'Tag' }
      & MetaTagsFragmentFragment
    )>, article?: Maybe<(
      { __typename?: 'BlogArticleModelArticleField' }
      & Pick<BlogArticleModelArticleField, 'value'>
    )>, summary?: Maybe<(
      { __typename?: 'BlogArticleModelSummaryField' }
      & Pick<BlogArticleModelSummaryField, 'value'>
    )> }
  )> }
);

export type GetBlogPostPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogPostPathsQuery = (
  { __typename?: 'Query' }
  & { allBlogArticles: Array<(
    { __typename?: 'BlogArticleRecord' }
    & Pick<BlogArticleRecord, 'id' | 'slug'>
  )> }
);

export type GetContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactPageQuery = (
  { __typename?: 'Query' }
  & { contactPage?: Maybe<(
    { __typename?: 'ContactPageRecord' }
    & Pick<ContactPageRecord, 'id' | 'pageSlug' | 'title'>
    & { _seoMetaTags: Array<(
      { __typename?: 'Tag' }
      & MetaTagsFragmentFragment
    )>, location?: Maybe<(
      { __typename?: 'LatLonField' }
      & Pick<LatLonField, 'latitude' | 'longitude'>
    )> }
  )> }
);

export type GetFaviconsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFaviconsQuery = (
  { __typename?: 'Query' }
  & { site: (
    { __typename?: 'Site' }
    & { favicon: Array<(
      { __typename?: 'Tag' }
      & MetaTagsFragmentFragment
    )> }
  ) }
);

export type GetGlobalCompanyInformationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGlobalCompanyInformationQuery = (
  { __typename?: 'Query' }
  & { companyInformationGlobal?: Maybe<(
    { __typename?: 'CompanyInformationGlobalRecord' }
    & Pick<CompanyInformationGlobalRecord, 'mainTelephoneNumber' | 'mainTelephoneNumberInternationalUnformatted' | 'gmbPageUrl' | 'companyAddress'>
    & { officeLocation?: Maybe<(
      { __typename?: 'LatLonField' }
      & Pick<LatLonField, 'latitude' | 'longitude'>
    )> }
  )> }
);

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = (
  { __typename?: 'Query' }
  & { homepage?: Maybe<(
    { __typename?: 'HomepageRecord' }
    & Pick<HomepageRecord, 'mainHeading'>
    & { _seoMetaTags: Array<(
      { __typename?: 'Tag' }
      & MetaTagsFragmentFragment
    )>, heroParagraph?: Maybe<(
      { __typename?: 'HomepageModelHeroParagraphField' }
      & Pick<HomepageModelHeroParagraphField, 'value'>
    )>, serviceCards?: Maybe<Array<Maybe<(
      { __typename?: 'PreviewCardRecord' }
      & Pick<PreviewCardRecord, 'title' | 'description' | 'linkText'>
      & { image?: Maybe<(
        { __typename?: 'FileField' }
        & { responsiveImage?: Maybe<(
          { __typename?: 'ResponsiveImage' }
          & ResponsiveImageFragmentFragment
        )> }
      )>, linkTarget?: Maybe<(
        { __typename?: 'ServiceRecord' }
        & Pick<ServiceRecord, 'pageSlug'>
      )> }
    )>>>, contentSections?: Maybe<Array<Maybe<(
      { __typename?: 'FeatureParagraphImageRecord' }
      & FeatureParagraphImageRecordFragmentFragment
    ) | { __typename?: 'FeatureParagraphRecord' }>>> }
  )> }
);

export type GetLandingPageQueryVariables = Exact<{
  pageSlug: Scalars['String'];
}>;


export type GetLandingPageQuery = (
  { __typename?: 'Query' }
  & { landingPageV1?: Maybe<(
    { __typename?: 'LandingPageV1Record' }
    & Pick<LandingPageV1Record, 'title' | 'pageContent' | 'id' | 'canonicalPath'>
    & { _seoMetaTags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'content' | 'tag' | 'attributes'>
    )> }
  )> }
);

export type GetLandingPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLandingPagesQuery = (
  { __typename?: 'Query' }
  & { allLandingPageV1s: Array<(
    { __typename?: 'LandingPageV1Record' }
    & Pick<LandingPageV1Record, 'pageSlug'>
  )> }
);

export type GetLegalListPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLegalListPageQuery = (
  { __typename?: 'Query' }
  & { legalPage?: Maybe<(
    { __typename?: 'LegalPageRecord' }
    & Pick<LegalPageRecord, 'id' | 'legalPageSlug' | 'title'>
    & { _seoMetaTags: Array<(
      { __typename?: 'Tag' }
      & MetaTagsFragmentFragment
    )> }
  )> }
);

export type GetLegalPageQueryVariables = Exact<{
  legalPageSlug: Scalars['String'];
}>;


export type GetLegalPageQuery = (
  { __typename?: 'Query' }
  & { legalPage?: Maybe<(
    { __typename?: 'LegalPageRecord' }
    & Pick<LegalPageRecord, 'id' | 'legalPageSlug' | 'title'>
    & { _seoMetaTags: Array<(
      { __typename?: 'Tag' }
      & MetaTagsFragmentFragment
    )>, summary?: Maybe<(
      { __typename?: 'LegalPageModelSummaryField' }
      & Pick<LegalPageModelSummaryField, 'value'>
    )>, legalText?: Maybe<(
      { __typename?: 'LegalPageModelLegalTextField' }
      & Pick<LegalPageModelLegalTextField, 'value'>
      & { links: Array<(
        { __typename: 'ContactPageRecord' }
        & Pick<ContactPageRecord, 'id' | 'pageSlug'>
      ) | (
        { __typename: 'LegalPageRecord' }
        & Pick<LegalPageRecord, 'id' | 'legalPageSlug'>
      )> }
    )> }
  )> }
);

export type GetLegalPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLegalPagesQuery = (
  { __typename?: 'Query' }
  & { allLegalPages: Array<(
    { __typename?: 'LegalPageRecord' }
    & Pick<LegalPageRecord, 'id' | 'legalPageSlug' | 'title'>
    & { summary?: Maybe<(
      { __typename?: 'LegalPageModelSummaryField' }
      & Pick<LegalPageModelSummaryField, 'value'>
    )> }
  )> }
);

export type GetPdfCredentialsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPdfCredentialsPageQuery = (
  { __typename?: 'Query' }
  & { credentialsPage?: Maybe<(
    { __typename?: 'CredentialsPageRecord' }
    & Pick<CredentialsPageRecord, 'id' | 'pageSlug' | 'title' | 'flipsnackEmbedUrl'>
    & { _seoMetaTags: Array<(
      { __typename?: 'Tag' }
      & MetaTagsFragmentFragment
    )>, fileDownload?: Maybe<(
      { __typename?: 'FileField' }
      & Pick<FileField, 'mimeType' | 'url'>
    )> }
  )> }
);

export type GetServicePageQueryVariables = Exact<{
  pageSlug: Scalars['String'];
}>;


export type GetServicePageQuery = (
  { __typename?: 'Query' }
  & { service?: Maybe<(
    { __typename?: 'ServiceRecord' }
    & Pick<ServiceRecord, 'canonicalPath' | 'id' | 'mainHeading' | 'illustration'>
    & { _seoMetaTags: Array<(
      { __typename?: 'Tag' }
      & MetaTagsFragmentFragment
    )>, heroParagraph?: Maybe<(
      { __typename?: 'ServiceModelHeroParagraphField' }
      & Pick<ServiceModelHeroParagraphField, 'value'>
    )>, leftRightParagraphs?: Maybe<Array<Maybe<(
      { __typename?: 'FeatureParagraphImageRecord' }
      & FeatureParagraphImageRecordFragmentFragment
    )>>>, pageContent?: Maybe<(
      { __typename?: 'ServiceModelPageContentField' }
      & Pick<ServiceModelPageContentField, 'value'>
      & { blocks: Array<{ __typename?: 'FeatureParagraphImageRecord' } | { __typename?: 'SideBySidePRecord' } | { __typename?: 'TestimonialRecord' } | (
        { __typename?: 'TwoColumnListRecord' }
        & TwoColumnListRecordFragmentFragment
      )> }
    )>, modularContent?: Maybe<Array<Maybe<(
      { __typename?: 'CtaRecord' }
      & CtaRecordFragmentFragment
    ) | (
      { __typename?: 'SideBySidePRecord' }
      & SideBySidePRecordFragmentFragment
    ) | (
      { __typename?: 'TestimonialRecord' }
      & TestimonialRecordFragmentFragment
    )>>> }
  )> }
);

export type GetServicePagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicePagesQuery = (
  { __typename?: 'Query' }
  & { allServices: Array<(
    { __typename?: 'ServiceRecord' }
    & Pick<ServiceRecord, 'pageSlug'>
  )> }
);

export const MetaTagsFragmentFragmentDoc = gql`
    fragment metaTagsFragment on Tag {
  attributes
  content
  tag
}
    `;
export const ResponsiveImageFragmentFragmentDoc = gql`
    fragment responsiveImageFragment on ResponsiveImage {
  srcSet
  webpSrcSet
  sizes
  src
  width
  height
  aspectRatio
  alt
  title
  base64
}
    `;
export const FeatureParagraphImageRecordFragmentFragmentDoc = gql`
    fragment featureParagraphImageRecordFragment on FeatureParagraphImageRecord {
  __typename
  id
  heading
  cropImage
  imagePosition
  paragraph {
    value
  }
  image {
    responsiveImage(imgixParams: {fit: crop, w: 480, h: 480, auto: format}) {
      ...responsiveImageFragment
    }
  }
}
    ${ResponsiveImageFragmentFragmentDoc}`;
export const CtaRecordFragmentFragmentDoc = gql`
    fragment ctaRecordFragment on CtaRecord {
  __typename
  id
  heading
  subtext
}
    `;
export const FullWidthCalloutRecordFragmentFragmentDoc = gql`
    fragment fullWidthCalloutRecordFragment on FullWidthCalloutRecord {
  id
  __typename
  subheading
  callout {
    value
  }
}
    `;
export const SideBySidePRecordFragmentFragmentDoc = gql`
    fragment sideBySidePRecordFragment on SideBySidePRecord {
  id
  __typename
  leftHeading
  leftParagraph {
    value
  }
  rightHeading
  rightParagraph {
    value
  }
}
    `;
export const StaffProfileCollectionRecordFragmentFragmentDoc = gql`
    fragment staffProfileCollectionRecordFragment on StaffProfileCollectionRecord {
  id
  __typename
  profiles {
    id
    name
    jobTitle
    position
    biography {
      value
    }
    avatar {
      responsiveImage(imgixParams: {fit: fill, w: 288, h: 288, auto: format}) {
        ...responsiveImageFragment
      }
    }
  }
}
    ${ResponsiveImageFragmentFragmentDoc}`;
export const TwoColumnListRecordFragmentFragmentDoc = gql`
    fragment twoColumnListRecordFragment on TwoColumnListRecord {
  __typename
  id
  serviceList
}
    `;
export const TestimonialRecordFragmentFragmentDoc = gql`
    fragment testimonialRecordFragment on TestimonialRecord {
  __typename
  id
  name
  testimonial
  positionCompany
  photo {
    responsiveImage(imgixParams: {fit: crop, w: 240, h: 240, auto: format}) {
      ...responsiveImageFragment
    }
  }
}
    ${ResponsiveImageFragmentFragmentDoc}`;
export const GetAboutUsDocument = gql`
    query GetAboutUs {
  aboutUsPage {
    _seoMetaTags {
      ...metaTagsFragment
    }
    mainHeading
    heroParagraph {
      value
    }
    pageContent {
      value
      blocks {
        ... on CtaRecord {
          ...ctaRecordFragment
        }
        ... on FeatureParagraphImageRecord {
          ...featureParagraphImageRecordFragment
        }
        ... on FullWidthCalloutRecord {
          ...fullWidthCalloutRecordFragment
        }
        ... on SideBySidePRecord {
          ...sideBySidePRecordFragment
        }
        ... on StaffProfileCollectionRecord {
          ...staffProfileCollectionRecordFragment
        }
        ... on TwoColumnListRecord {
          ...twoColumnListRecordFragment
        }
      }
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}
${CtaRecordFragmentFragmentDoc}
${FeatureParagraphImageRecordFragmentFragmentDoc}
${FullWidthCalloutRecordFragmentFragmentDoc}
${SideBySidePRecordFragmentFragmentDoc}
${StaffProfileCollectionRecordFragmentFragmentDoc}
${TwoColumnListRecordFragmentFragmentDoc}`;
export const GetBlogPageDocument = gql`
    query GetBlogPage {
  blogPage {
    id
    _seoMetaTags {
      ...metaTagsFragment
    }
    pageSlug
    title
  }
}
    ${MetaTagsFragmentFragmentDoc}`;
export const GetBlogPostSummariesDocument = gql`
    query getBlogPostSummaries {
  allBlogArticles {
    id
    slug
    title
    mainImage {
      responsiveImage(imgixParams: {fit: crop, w: 336, h: 192, auto: format}) {
        ...responsiveImageFragment
      }
    }
    summary {
      value
    }
  }
}
    ${ResponsiveImageFragmentFragmentDoc}`;
export const GetBlogPostDocument = gql`
    query getBlogPost($pageSlug: String!) {
  blogArticle(filter: {slug: {eq: $pageSlug}}) {
    id
    slug
    title
    mainImage {
      responsiveImage(imgixParams: {fit: crop, w: 800, h: 400, auto: format}) {
        ...responsiveImageFragment
      }
    }
    _seoMetaTags {
      ...metaTagsFragment
    }
    updatedAt
    article {
      value
    }
    summary {
      value
    }
  }
}
    ${ResponsiveImageFragmentFragmentDoc}
${MetaTagsFragmentFragmentDoc}`;
export const GetBlogPostPathsDocument = gql`
    query getBlogPostPaths {
  allBlogArticles {
    id
    slug
  }
}
    `;
export const GetContactPageDocument = gql`
    query GetContactPage {
  contactPage {
    id
    _seoMetaTags {
      ...metaTagsFragment
    }
    pageSlug
    title
    location {
      latitude
      longitude
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}`;
export const GetFaviconsDocument = gql`
    query GetFavicons {
  site: _site {
    favicon: faviconMetaTags {
      ...metaTagsFragment
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}`;
export const GetGlobalCompanyInformationDocument = gql`
    query getGlobalCompanyInformation {
  companyInformationGlobal {
    mainTelephoneNumber
    mainTelephoneNumberInternationalUnformatted
    gmbPageUrl
    officeLocation {
      latitude
      longitude
    }
    companyAddress
  }
}
    `;
export const GetHomePageDocument = gql`
    query GetHomePage {
  homepage {
    _seoMetaTags {
      ...metaTagsFragment
    }
    mainHeading
    heroParagraph {
      value
    }
    serviceCards {
      title
      description
      image {
        responsiveImage(imgixParams: {fit: crop, w: 400, h: 240, auto: format}) {
          ...responsiveImageFragment
        }
      }
      linkText
      linkTarget {
        pageSlug
      }
    }
    contentSections {
      ... on FeatureParagraphImageRecord {
        ...featureParagraphImageRecordFragment
      }
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}
${ResponsiveImageFragmentFragmentDoc}
${FeatureParagraphImageRecordFragmentFragmentDoc}`;
export const GetLandingPageDocument = gql`
    query GetLandingPage($pageSlug: String!) {
  landingPageV1(filter: {pageSlug: {eq: $pageSlug}}) {
    _seoMetaTags {
      content
      tag
      attributes
    }
    title
    pageContent
    id
    canonicalPath
  }
}
    `;
export const GetLandingPagesDocument = gql`
    query GetLandingPages {
  allLandingPageV1s {
    pageSlug
  }
}
    `;
export const GetLegalListPageDocument = gql`
    query GetLegalListPage {
  legalPage {
    id
    _seoMetaTags {
      ...metaTagsFragment
    }
    legalPageSlug
    title
  }
}
    ${MetaTagsFragmentFragmentDoc}`;
export const GetLegalPageDocument = gql`
    query GetLegalPage($legalPageSlug: String!) {
  legalPage(filter: {legalPageSlug: {eq: $legalPageSlug}}) {
    id
    legalPageSlug
    title
    _seoMetaTags {
      ...metaTagsFragment
    }
    summary {
      value
    }
    legalText {
      value
      links {
        __typename
        ... on ContactPageRecord {
          id
          __typename
          pageSlug
        }
        ... on LegalPageRecord {
          id
          __typename
          legalPageSlug
        }
      }
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}`;
export const GetLegalPagesDocument = gql`
    query GetLegalPages {
  allLegalPages {
    id
    legalPageSlug
    title
    summary {
      value
    }
  }
}
    `;
export const GetPdfCredentialsPageDocument = gql`
    query GetPdfCredentialsPage {
  credentialsPage {
    id
    _seoMetaTags {
      ...metaTagsFragment
    }
    pageSlug
    title
    flipsnackEmbedUrl
    fileDownload {
      mimeType
      url
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}`;
export const GetServicePageDocument = gql`
    query GetServicePage($pageSlug: String!) {
  service(filter: {pageSlug: {eq: $pageSlug}}) {
    _seoMetaTags {
      ...metaTagsFragment
    }
    canonicalPath
    id
    mainHeading
    illustration
    heroParagraph {
      value
    }
    leftRightParagraphs {
      ... on FeatureParagraphImageRecord {
        ...featureParagraphImageRecordFragment
      }
    }
    pageContent {
      value
      blocks {
        ... on TwoColumnListRecord {
          ...twoColumnListRecordFragment
        }
      }
    }
    modularContent {
      ... on SideBySidePRecord {
        ...sideBySidePRecordFragment
      }
      ... on TestimonialRecord {
        ...testimonialRecordFragment
      }
      ... on CtaRecord {
        ...ctaRecordFragment
      }
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}
${FeatureParagraphImageRecordFragmentFragmentDoc}
${TwoColumnListRecordFragmentFragmentDoc}
${SideBySidePRecordFragmentFragmentDoc}
${TestimonialRecordFragmentFragmentDoc}
${CtaRecordFragmentFragmentDoc}`;
export const GetServicePagesDocument = gql`
    query GetServicePages {
  allServices {
    pageSlug
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAboutUs(variables?: GetAboutUsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAboutUsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAboutUsQuery>(GetAboutUsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAboutUs');
    },
    GetBlogPage(variables?: GetBlogPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBlogPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBlogPageQuery>(GetBlogPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetBlogPage');
    },
    getBlogPostSummaries(variables?: GetBlogPostSummariesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBlogPostSummariesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBlogPostSummariesQuery>(GetBlogPostSummariesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogPostSummaries');
    },
    getBlogPost(variables: GetBlogPostQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBlogPostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBlogPostQuery>(GetBlogPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogPost');
    },
    getBlogPostPaths(variables?: GetBlogPostPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBlogPostPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBlogPostPathsQuery>(GetBlogPostPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogPostPaths');
    },
    GetContactPage(variables?: GetContactPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetContactPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetContactPageQuery>(GetContactPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetContactPage');
    },
    GetFavicons(variables?: GetFaviconsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetFaviconsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFaviconsQuery>(GetFaviconsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetFavicons');
    },
    getGlobalCompanyInformation(variables?: GetGlobalCompanyInformationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGlobalCompanyInformationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGlobalCompanyInformationQuery>(GetGlobalCompanyInformationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getGlobalCompanyInformation');
    },
    GetHomePage(variables?: GetHomePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageQuery>(GetHomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomePage');
    },
    GetLandingPage(variables: GetLandingPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLandingPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLandingPageQuery>(GetLandingPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLandingPage');
    },
    GetLandingPages(variables?: GetLandingPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLandingPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLandingPagesQuery>(GetLandingPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLandingPages');
    },
    GetLegalListPage(variables?: GetLegalListPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLegalListPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLegalListPageQuery>(GetLegalListPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLegalListPage');
    },
    GetLegalPage(variables: GetLegalPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLegalPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLegalPageQuery>(GetLegalPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLegalPage');
    },
    GetLegalPages(variables?: GetLegalPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLegalPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLegalPagesQuery>(GetLegalPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLegalPages');
    },
    GetPdfCredentialsPage(variables?: GetPdfCredentialsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPdfCredentialsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPdfCredentialsPageQuery>(GetPdfCredentialsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPdfCredentialsPage');
    },
    GetServicePage(variables: GetServicePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetServicePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicePageQuery>(GetServicePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServicePage');
    },
    GetServicePages(variables?: GetServicePagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetServicePagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicePagesQuery>(GetServicePagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServicePages');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;