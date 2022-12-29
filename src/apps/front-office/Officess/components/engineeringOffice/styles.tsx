import styled from '@emotion/styled';
import { Group, Modal, Select, Table } from '@mantine/core';
import theme from 'design-system/theme';
import mediaQueries from 'shared/constants/mediaQueries';

const { tablet } = mediaQueries;
export const OfficeWrapper = styled('div')(() => ({
  padding: '5rem 4rem ',
  [tablet]: {
    padding: '1rem 0',
  },
  backgroundColor: theme.colors.background,
  margin: '4rem 0',
}));

export const PackageWrapper = styled('div')({
  position: 'relative',
  backgroundColor: '#F8FCFE',
  padding: '3rem',
  margin: '4rem 0',
  maxHeight: '700px',
  [tablet]: {
    padding: '0',
    margin: '1rem 0',
    maxHeight: 400,
  },
});

export const Price = styled('div')({
  backgroundColor: theme.colors.gray.text,
  borderRadius: '30px',
  textAlign: 'center',
  padding: '3px',
  fontWeight: 'bold',
  color: theme.colors.gray.DARK_GRAY,
  fontSize: '12px',
  margin: '1rem 2rem',
});

export const CustomTable = styled(Table)({
  border: '1px solid #F4F4F4',
  overflowY: 'scroll',
});

export const CommentsWrapper = styled('div')({
  margin: '3rem 3rem',
  maxWidth: '70%',
  [tablet]: {
    margin: '10rem 0 0 3rem',
    maxWidth: '100%',
  },
});

export const CustomGroup = styled(Group)({
  backgroundColor: theme.colors.background,
  padding: '2rem 1rem',
  marginBottom: '1rem',
  borderRadius: '10px',
});

export const CustomSelect = styled(Select)({
  input: {
    backgroundColor: '#EAECEF',
    border: 'none',
  },
  item: {
    color: '#000',
    backgroundColor: '#fff',
  },
  itemsWrapper: {
    color: 'red',
  },
  // backgroundColor: '#EAECEF',
});

export const CustomModal = styled(Modal)({
  '& .mantine-Modal-body': {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  '& .mantine-Modal-close': {
    position: 'absolute',
    right: '20px',
    top: '15px',
  },
  '& .mantine-Modal-header': {
    width: '180px',
    margin: 'auto',
    textAlign: 'center',
  },
});

// export const CustomText = styled(Text)({
//   width: '60%',
// });
