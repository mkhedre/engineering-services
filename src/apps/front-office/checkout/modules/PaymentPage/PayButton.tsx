import { UnstyledButton } from '@mantine/core';
import { Teme } from './styles';

export default function PayButton({ icon, setBank, isBank }: any) {
  return (
    <UnstyledButton mx={10} onClick={() => setBank(!isBank)}>
      <Teme size={60} variant="outline" px={40}>
        <img src={icon} alt="" width={40} />
      </Teme>
    </UnstyledButton>
  );
}
