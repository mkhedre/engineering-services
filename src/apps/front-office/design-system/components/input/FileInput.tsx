import { Box, Group, Input, Popover, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import { HiddenInput, useFormInput } from '@mongez/react-form';
import { useRef, useState } from 'react';
import Icons from 'shared/assets/svgs';
import theme from '../../theme';
import Button from '../Button';
import { SMIcon } from '../ColoredIcon/SMIcon';
import { FlexRow } from '../Flex';

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
    const [file, setFile] = useState();

    fileInputRef.current && fileInputRef.current.click();
  };
  const configureControl = () => {
    if (!value?.url) {
      OpenSelector();
    }
  };

  return (
    <>
      <HiddenInput name={name} value={value} />
      <Popover width={140} position="top" withArrow shadow="md">
        <Popover.Target>
          <Input.Wrapper
            label={label}
            required={required}
            sx={{ marginBottom: '20px', fontWeight: 200 }}
          >
            <Box
              sx={{
                paddingInline: '15px',
                paddingTop: '10px',
                paddingBottom: '10px',
                border: `2px dashed ${theme.colors.gray[100]}`,
                cursor: 'pointer',
              }}
              onClick={configureControl}
            >
              <Group>
                <Button
                  variant="link"
                  type="button"
                  Icon={Icons.UploadFileIcon}
                />
                <div style={{ flex: 1 }}>
                  <Text>{trans('selectFile')}</Text>
                  <Text size="xs" color="dimmed">
                    {trans('fileDetails')}
                  </Text>
                </div>
                {button && (
                  <Button
                    variant="transparent"
                    text="kkk"
                    style={{
                      left: ' 30px',
                      position: 'absolute',
                    }}
                  />
                )}
              </Group>
            </Box>
          </Input.Wrapper>
        </Popover.Target>
        <Popover.Dropdown>
          <FlexRow>
            <SMIcon src={Icons.DeleteIcon} />
            {/* <Tooltip label={trans('delete')} withArrow> */}
            <SMIcon src={Icons.DeleteIcon} />
            {/* </Tooltip> */}
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
  );
  // <Input.Wrapper
  //   label={trans(label as any)}
  //   required={required}
  // ></Input.Wrapper>
}

FileInput.defaultProps = {};
