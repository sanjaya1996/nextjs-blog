import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs4',
  title: 'Getting started with nextjs',
  image: 'getting-started-nextjs.png',
  excerpt: 'Nextjs is a react framework for Production ',
  date: '2022-02-10',
  content: '# This is a first post',
};
function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      CONTENT
    </article>
  );
}
export default PostContent;