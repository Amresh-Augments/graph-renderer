'use server';

const MAX_NODES = 6;

interface SuccessResponse {
  graphNodes: string[];
  graphEdges: string[];
}

interface ErrorResponse {
  error: string;
}

export async function renderGraph(formData: FormData): Promise<SuccessResponse | ErrorResponse> {
  const graphNotation = formData.get('graph-notation') as string;

  if (!graphNotation) {
    return {
      error: 'Hey, your graph notation is missing!',
    };
  }
  // CODE FOR TASK 3.4 -----------------------------------------
  let notation = graphNotation.toString().split('\n');
  if (notation.length > MAX_NODES) {
    notation = notation.slice(0, 6);
  }

  let error = '';

  const allNodes: string[] = [];
  const allEdges: string[] = [];

  notation?.forEach((l, idx) => {
    l = l.replace('\r', '');
    const regex = /^[A-Z]\s*->\s*[A-Z]$/;
    const space = l.includes(' ');
    const arrow = l.includes('->');
    const regexTest = regex.test(l);
    if (space || !arrow || !regexTest) {
      return (error = `Hey, there was an error parsing line ${idx + 1} of your graph notation!`);
    }

    allNodes.push(l[0]);
    allNodes.push(l[3]);
    allEdges.push(l[0] + l[3]);
  });

  if (error) {
    return { error: error };
  }

  const nodes = Array.from(new Set([...allNodes]));
  const edges = Array.from(new Set([...allEdges]));

  return {
    graphNodes: nodes,
    graphEdges: edges,
  };
  // END OF CODE FOR TASK 3.4 ----------------------------------
}
