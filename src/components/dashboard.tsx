'use client';

import Button from './button';
import Error from './error';
import Instructions from './instructions';
import Matrix from './matrix';
import TextArea from './textarea';
import { renderGraph } from '@/app/dashboard/actions';
import { useState } from 'react';

export default function Dashboard() {
  const [error, setError] = useState<string | null>(null);
  const [graphNodes, setGraphNodes] = useState<string[]>([]);
  const [graphEdges, setGraphEdges] = useState<string[]>([]);

  const handleSubmit = async (e: FormData) => {
    setError('');
    const res = await renderGraph(e);
    console.log(res)

    if ('error' in res) {
      setError(res.error);
    } else {
      setGraphNodes(res.graphNodes);
      setGraphEdges(res.graphEdges);
    }
  };

  return (
    <main className='bg-teal-100 flex-1 flex flex-col'>
      {error && <Error message={error} />}
      <section className='flex-1 flex flex-col gap-4 bg-teal-50 m-5 p-4 rounded border-2 border-gray-300 z-10'>
        <Instructions />
        <div className='flex-1 flex flex-col gap-4 md:flex-row'>
          {/* // CODE FOR TASK 4.2 ----------------------------------------- */}
          <div className='w-1/2'>
            <h2 className='bg-teal-500 text-white py-2 px-3'>GRAPH EDITOR</h2>
            <form action={handleSubmit} className='border-2 border-gray-300 bg-slate-50 rounded p-4 border-b-2 mt-4 text-black flex flex-col gap-2'>
              <label>Enter your graph notation below: </label>
              <TextArea id='graph-notation' placeholder='eg: A->B' />
              <div className='flex gap-1'>
                <Button theme='primary' type='submit'>
                  Generate
                </Button>
                <Button theme='secondary' type='button'>
                  Clear
                </Button>
              </div>
            </form>
          </div>
          <div className='w-1/2 text-black'>
            <h2 className='bg-teal-500 text-white py-2 px-3'>ADJACENCY MATRIX</h2>
            <Matrix graphNodes={graphNodes} graphEdges={graphEdges} />
          </div>
          {/* // END OF CODE FOR TASK 4.2 ---------------------------------- */}
        </div>
      </section>
    </main>
  );
}
