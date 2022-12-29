import { Text } from '@mantine/core';
import Icons from 'shared/assets/svgs';
import Button from '../../Button';
import { Flex } from '../../Flex';
import { Input, Wrapper } from './style';

interface Iprops {
  name: string;
  placeholder?: string;
  required?: boolean;
}
const FileInput = ({ name, placeholder, required }: Iprops) => {
  return (
    <Wrapper>
      <Flex>
        <Button
          variant="link"
          type="button"
          text={placeholder}
          Icon={Icons.UploadFileIcon}
        />
        <Flex flexDirection="column" gap="0">
          <Text>kkkk</Text>
          <Text>kkkk</Text>
        </Flex>
        <Button
          variant="transparent"
          text="kkk"
          borderRadius="10px"
          style={{
            left: ' 30px',
            position: 'absolute',
          }}
        />
        <Input
          type="file"
          name={name}
          accept=".pdf,.docx,.png"
          // onChange={(e) => {
          //   fieldName.onChange(e);
          //   handleChange(e);
          // }}
          // ref={fieldName.ref}
          multiple
        />
      </Flex>
    </Wrapper>
  );
};

export default FileInput;
