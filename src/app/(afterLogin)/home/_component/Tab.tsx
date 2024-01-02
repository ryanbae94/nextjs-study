'use client';
import React, { useState } from 'react';
import * as styles from './tab.css';

export default function Tab() {
  const [tab, setTab] = useState('recommend');
  const onClickRec = () => {
    setTab('recommend');
  };
  const onClickFol = () => {
    setTab('following');
  };

  return (
    <div className={styles.homeFixed}>
      <div className={styles.homeText}>홈</div>
      <div className={styles.homeTab}>
        <div onClick={onClickRec}>
          추천
          <div
            className={styles.tabIndicator}
            hidden={tab === 'following'}
          ></div>
        </div>
        <div onClick={onClickFol}>
          팔로우 중
          <div
            className={styles.tabIndicator}
            hidden={tab === 'recommend'}
          ></div>
        </div>
      </div>
    </div>
  );
}
