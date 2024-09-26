export type BlogPost = {
    id: number;
    title: string;
    slug?: any;
    image_base64: string;
    image_caption: string;
    tags?: string;
    content: any;
  };