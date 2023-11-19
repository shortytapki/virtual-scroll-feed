import { Virtuoso } from 'react-virtuoso';

interface VirtualScrollerProps {
  totalCount: number;
  footer: JSX.Element;
  endReached: () => void;
  itemContent: (index: number) => JSX.Element;
}

export const VirtualScroller = ({
  totalCount,
  footer,
  itemContent,
  endReached,
}: VirtualScrollerProps) => {
  return (
    <Virtuoso
      endReached={endReached}
      useWindowScroll
      style={{ height: '80vh' }}
      totalCount={totalCount}
      itemContent={itemContent}
      components={{
        Footer: () => footer,
      }}
    />
  );
};
