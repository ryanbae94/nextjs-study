import Post from '../_component/Post';
import PostForm from './_component/PostForm';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import * as styles from './home.css';
export default function Home() {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
