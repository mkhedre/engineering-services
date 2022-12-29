import { Pagination } from '@mantine/core';
import { useState } from 'react';
import theme from '../../theme';

const MainPagination = () => {
  const [activePage, setPage] = useState(1);
  console.log(activePage);
  return (
    <Pagination
      total={5}
      siblings={1}
      initialPage={1}
      size="lg"
      radius="md"
      position="center"
      onChange={setPage}
      styles={() => ({
        item: {
          background: theme.colors.pagination.main,
          color: theme.colors.gray.dark,
          border: 'none',
          '&[data-active]': {
            border: `1px solid ${theme.colors.pagination.border}`,
            background: theme.colors.white,
            color: theme.colors.gray.dark,
          },
        },
      })}
    />
  );
};

export default MainPagination;
