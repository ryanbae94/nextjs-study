'use server';
import { redirect } from 'next/navigation';

export default async function signup(prevState: any, formData: FormData) {
  // 서버 코드는 브라우저에 노출이 되지 않음..
  'use server';
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return { message: 'no_id' };
  }
  if (!formData.get('name') || !(formData.get('name') as string)?.trim()) {
    return { message: 'no_name' };
  }
  if (
    !formData.get('password') ||
    !(formData.get('password') as string)?.trim()
  ) {
    return { message: 'no_password' };
  }
  if (!formData.get('image')) {
    return { message: 'no_image' };
  }

  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: 'post',
        body: formData,
        credentials: 'include',
      },
    );
    console.log(response.status);
    console.log(await response.json());

    if (response.status === 403) {
      return { message: 'user_exists' };
    }
    shouldRedirect = true;
  } catch (error) {
    console.log('error: ', error);
    return;
  }

  // redirect는 try catch 안에 쓰면 안됨
  if (shouldRedirect) redirect('/home');
}
