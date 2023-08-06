import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './post-header';
import classes from './post-content.module.css';

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const { alt, src } = node.children[0].properties;

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${src}`}
              alt={alt}
              height={300}
              width={600}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(code) {
      console.log('This is code: ', code);
      const { node, inline, className, children, ...props } = code;
      const match = /language-(\w+)/.exec(className || '');
      console.log('Match: ', match);

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          children={String(children).replace(/\n$/, '')}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
export default PostContent;
