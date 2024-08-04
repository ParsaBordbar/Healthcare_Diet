export const chunkingArray = (array: any, size: any) => {
    return array.reduce((acc: any, item: any, index: any) => {
      const chunkIndex = Math.floor(index / size);
      acc[chunkIndex] = acc[chunkIndex] || [];
      acc[chunkIndex].push(item);
      return acc;
    }, []);
  };
  