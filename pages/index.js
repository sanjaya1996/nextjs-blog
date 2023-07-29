import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'Nextjs is a react framework for Production ',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'Nextjs is a react framework for Production ',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'Nextjs is a react framework for Production ',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'Nextjs is a react framework for Production ',
    date: '2022-02-10',
  },
];
function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
