'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function redirectToDashboard(formData: FormData): Promise<{ error: string } | void> {
  // CODE FOR TASK 2.4 -----------------------------------------
  let name = formData.get('name');
  if (!name) {
    return { error: 'Hey, your name is missing!' };
  }

  name = name.toString().toLowerCase().replace(/\s+/g, '').toLowerCase();

  const cookieStore = cookies();
  cookieStore.set('gr-name', name, { path: '/', maxAge: 3600 });

  redirect('/dashboard');
  // END OF CODE FOR TASK 2.4 ----------------------------------
}
