export interface Blog {
  id: string;
  title: string;
  description: string;
  publish_date: string; // You can change this to Date if you plan to parse it
  author_name: string;
  blog_image: string;
  total_likes: string; // You can also use `number` if the value is always numeric
}
