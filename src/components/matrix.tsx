export default function Matrix({
    graphNodes,
    graphEdges,
  }: Readonly<{
    graphNodes: string[];
    graphEdges: string[];
  }>) {
    return (
      <div className="border-2 border-gray-300 bg-slate-50 rounded p-4 border-b-2 mt-4 flex-1 flex flex-row items-center justify-center">
        {graphNodes.length > 0 ? (
          <table className="text-center">
            <thead>
              <tr>
                <td className="border-0"></td>
                {graphNodes.map((node, index) => {
                  const color = index % 2 == 1 ? "bg-teal-400" : "bg-teal-500";
                  return (
                    <th
                      key={node}
                      className={`${color} py-3 px-4 w-[50px] h-[50px]`}
                    >
                      {node}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {graphNodes.map((targetNode, index) => {
                const color = index % 2 == 0 ? "bg-teal-400" : "bg-teal-500";
                return (
                  <tr key={targetNode}>
                    <td
                      className={`${color} py-3 px-4 font-bold w-[50px] h-[50px]`}
                    >
                      {targetNode}
                    </td>
                    {graphNodes.map((sourceNode) => {
                      const value = graphEdges.includes(
                        `${sourceNode}${targetNode}`
                      )
                        ? 1
                        : 0;
                      return (
                        <td
                          key={sourceNode}
                          className={`border-2 border-gray-300 py-3 px-4 w-[50px] h-[50px] shadow-lg ${
                            value === 1 ? "bg-yellow-200" : ""
                          }`}
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="bg-gray-200 animate-pulse h-full w-full flex flex-row items-center justify-center">
            <p className="text-gray-500">
              The adjacency matrix will be displayed here.
            </p>
          </div>
        )}
      </div>
    );
  }