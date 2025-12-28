import React from 'react';

interface Post {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl?: string;
  slug: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface border border-muted/20 shadow-sm transition-all hover:shadow-md hover:border-secondary/50 h-full">
      <div className="aspect-[2/1] w-full bg-muted/10 overflow-hidden">
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 text-muted">
            <span className="text-4xl opacity-20">✍️</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-muted mb-3">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-lg font-bold text-text mb-2 group-hover:text-secondary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted text-sm line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center text-sm font-medium text-secondary">
          Read more
          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
