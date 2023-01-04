import { Box, FileButton, Group, Input, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import { HiddenInput, useFormInput } from '@mongez/react-form';
import { useRef, useState } from 'react';
import Icons from 'shared/assets/svgs';
import theme from '../../theme';
import Button from '../Button';

export default function FileInput({ ...props }) {
  const {
    name,
    label,
    value,
    required,
    id,
    helper,
    onChange,
    onBlur,
    error,
    button,
  } = useFormInput(props);
  const fileInputRef = useRef<any>();

  const OpenSelector = () => {
    fileInputRef.current && fileInputRef.current.click();
  };
  const configureControl = () => {
    if (!value?.url) {
      OpenSelector();
    }
  };

  const [file, setFile] = useState<File | null>(null);

  return (
    <>
      <HiddenInput name={name} value={value} />
      <Input.Wrapper
        label={label}
        required={required}
        sx={{ marginBottom: '20px', fontWeight: 200 }}
      >
        <FileButton onChange={setFile} accept="image/png,image/jpeg,.pdf">
          {(props) => (
            <Box
              {...props}
              sx={{
                padding: '25px 20px',
                border: `2px dashed ${theme.colors.gray[100]}`,
                cursor: 'pointer',
                borderRadius: '10px',
              }}
            >
              <Group position="apart">
                <Group>
                  <Button
                    variant="link"
                    type="button"
                    Icon={Icons.UploadFileIcon}
                  />
                  <div>
                    <Text>{trans('selectFile')}</Text>
                    <Text size="xs" color="dimmed">
                      {trans('fileDetails')}
                    </Text>
                  </div>
                </Group>
                <Button
                  variant="transparent"
                  text={trans('select')}
                  borderRadius="10px"
                  padding="10px 25px"
                />
              </Group>
            </Box>
          )}
        </FileButton>
      </Input.Wrapper>
      {file && (
        <Text size="sm" align="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
{
  /* <Popover width={140} position="top" withArrow shadow="md">
        <Popover.Target>
          <Input.Wrapper
            label={label}
            required={required}
            sx={{ marginBottom: '20px', fontWeight: 200 }}
          >
            
          </Input.Wrapper>
        </Popover.Target>
        <Popover.Dropdown>
          <FlexRow>
            <SMIcon src={Icons.DeleteIcon} />
            <Tooltip label={trans('delete')} withArrow>
            <SMIcon src={Icons.DeleteIcon} />
            </Tooltip>
          </FlexRow>
        </Popover.Dropdown>
      </Popover>
      <input
        type="file"
        // accept={accept}
        style={{
          display: 'none',
        }}
        ref={fileInputRef}
        // onChange={startUploading}
      />
    </>
  ); */
}
{
  /* // <Input.Wrapper
  //   label={trans(label as any)}
  //   required={required}
  // ></Input.Wrapper> */
}
