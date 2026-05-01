type BlogSlug =
  | "social-media"
  | "content-creation"
  | "performance-marketing"
  | "webdesign";

type BlogId = `${number}`;

export type { BlogId, BlogSlug };
