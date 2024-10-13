'use client';

import Button from '@/components/button';
import Error from '@/components/error';
import Input from '@/components/input';
import Watermark from '@/components/watermark';
import { redirectToDashboard } from './actions';
import { useState } from 'react';

export default function Page() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormData) => {
    setError('');
    const res = await redirectToDashboard(e);

    if (res?.error) {
      setError(res.error);
    }
  };

  return (
    <main className='bg-teal-100 flex flex-col h-screen items-center justify-center'>
      <Watermark />
      {error && <Error message={error} />}
      {/* CODE FOR TASK 2.2 ----------------------------------------- */}
      <section className='flex flex-col w-max gap-3'>
        <div className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-400 animate-pulse'>
          <h4 className='text-2xl'>Welcome to</h4>
          <h1 className='text-5xl'>Graph Renderer</h1>
        </div>
        <div className='bg-slate-50 p-5 border-2 z-20'>
          <form action={handleSubmit} className='flex flex-col gap-2 '>
            <label className='text-gray-400'>What's your name?</label>
            <div className='flex gap-1'>
              <Input id='name' placeholder='eg: John Appleased' type='text' key={'x'} />
              <Button theme='primary' type='submit'>
                Continue
              </Button>
            </div>
          </form>
        </div>
      </section>
      {/* END OF CODE FOR TASK 2.2 ---------------------------------- */}
    </main>
  );
}
