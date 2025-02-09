export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
  body: any;
  _id: string;
  tagOne: string;
  tagTwo: string;
  readingTime: string;
  author: string;
}
