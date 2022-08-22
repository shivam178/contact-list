import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import contactImg from '../public/images/contactImg.png';
import phone from '../public/images/phone.jpeg';
import Image from 'next/image';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <Image height="500px" width="500px" src={contactImg} />
        </div>
        <div className={utilStyles.midTextHome}>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd}>
            <p>This Site will Store all your contact details in MongoDB.</p>
            <p>
              You might need MongoDB on your local machine to run this site. But Since you've reached
              this far you might have sorted that part out.
            </p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>
                <Link href="/contact/list">
                  <a>Click here to see your contact list</a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <Image height="500px" width="500px" src={phone} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
