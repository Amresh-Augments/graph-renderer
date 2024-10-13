import Dashboard from '@/components/dashboard';
import Header from '@/components/header';
import HeaderSkeleton from '@/components/header-skeleton';
import { Suspense, useEffect } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {
  // CODE FOR TASK 3.2 -----------------------------------------
  const userName = cookies().get('gr-name')?.value ?? '';
  return (
    <div className='h-screen bg-teal-100'>
      <Suspense fallback={<HeaderSkeleton />}>{userName && <Header name={userName} />}</Suspense>
      <Dashboard />
    </div>
  );
  // END OF CODE FOR TASK 3.2 ----------------------------------
}
