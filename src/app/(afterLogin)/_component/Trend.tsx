import React from 'react';
import * as styles from './trend.css';
import Link from 'next/link';

export default function Trend() {
  return (
    <Link href={`/search?q=트렌드`} className={styles.container}>
      <div className={styles.count}>실시간트렌드</div>
      <div className={styles.title}>라이언</div>
      <div className={styles.count}>1,234 posts</div>
    </Link>
  );
}
