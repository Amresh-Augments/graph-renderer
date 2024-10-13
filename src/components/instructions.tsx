export default function Instructions() {
    return (
      <div>
        <h2 className="bg-teal-500 text-white px-4 py-2 font-bold uppercase tracking-widest">
          Instructions
        </h2>
        <ul className="list-disc list-inside p-4 border-b-2 text-black">
          <li>
            Type out your <span className="text-teal-700 font-bold">nodes</span>{" "}
            as English letters and connect them using the &quot;-&gt;&quot;
            symbol.
          </li>
          <li>
            Type only{" "}
            <span className="text-teal-700 font-bold">one connection</span> -
            involving 2 nodes - per line (e.g. A-&gt;B){" "}
            <span className="text-gray-700 font-bold">without any spaces</span>.
          </li>
          <li>
            Once you complete typing out all your connections, press the{" "}
            <span className="text-teal-700 font-bold">&quot;Generate&quot;</span>{" "}
            button to generate the graph as an Adjacency Matrix.
          </li>
          <li>
            If you make a mistake, press the{" "}
            <span className="text-gray-700 font-bold">&quot;Clear&quot;</span>{" "}
            button to start over.
          </li>
          <li>
            Any errors will be displayed in a{" "}
            <span className="text-red-500 font-bold">red box</span> above.
          </li>
          <li>
            Only the{" "}
            <span className="text-teal-700 font-bold">first 6 nodes</span> will be
            displayed in the adjacency matrix.
          </li>
        </ul>
      </div>
    );
  }