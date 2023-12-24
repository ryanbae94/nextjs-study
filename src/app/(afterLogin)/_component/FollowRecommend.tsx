'use client';
import React from 'react';
import * as styles from './followRecommend.css';

export default function FollowRecommend() {
  const onFollow = () => {};
  const user = {
    id: '일론',
    nickname: 'Elon Musk',
    image: '/yRsRRjGO.jpg',
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.userLogo}>
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.title}>{user.nickname}</div>
        <div className={styles.count}>@{user.id}</div>
      </div>
      <div className={styles.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
