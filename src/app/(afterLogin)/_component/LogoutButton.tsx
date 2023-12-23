'use client';

import React from 'react';
import * as styles from './logoutButton.css';

export default function LogoutButton() {
  const me = {
    id: 'ryanbae94',
    nickname: 'ryan',
    image: '/5Udwvqim.jpg',
  };
  const onLogout = () => {};
  return (
    <button className={styles.logoutButton} onClick={onLogout}>
      <div className={styles.logoutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={styles.logoutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
