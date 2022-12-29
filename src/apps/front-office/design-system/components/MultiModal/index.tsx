import { Button, Text } from '@mantine/core';
import { closeAllModals, openConfirmModal } from '@mantine/modals';

const ModalButton = ({}) => (
  <Button
    onClick={() =>
      openConfirmModal({
        title: 'Please confirm your action',
        closeOnConfirm: false,
        labels: { confirm: 'Next modal', cancel: 'Close modal' },
        children: (
          <Text size="sm">
            This action is so important that you are required to confirm it with
            a modal. Please click one of these buttons to proceed.
          </Text>
        ),
        onConfirm: () =>
          openConfirmModal({
            title: 'This is modal at second layer',
            labels: { confirm: 'Close modal', cancel: 'Back' },
            closeOnConfirm: false,
            children: (
              <Text size="sm">
                When this modal is closed modals state will revert to first
                modal
              </Text>
            ),
            onConfirm: closeAllModals,
          }),
      })
    }
  >
    Open multiple steps modal
  </Button>
);
