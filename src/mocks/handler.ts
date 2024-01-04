import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';

const User = [
  { id: 1, nickname: 'Elon Musk', image: faker.image.avatar() },
  { id: 2, nickname: 'Ryan Bae', image: faker.image.avatar() },
];

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인');
    return HttpResponse.json(User[1], {
      headers: {
        'Set-Cookie': 'connect.sid=msw;HttpOnly;Path=/',
      },
    });
  }),

  http.post('/api/logout', () => {
    console.log('로그아웃');
    return new HttpResponse.json(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
];
