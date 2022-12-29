import { Center, Container, Group, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import { IconChevronDown } from '@tabler/icons';
import Button from 'design-system/components/Button';
import { SMIcon } from 'design-system/components/ColoredIcon/SMIcon';
import { useState } from 'react';
import Icons from 'shared/assets/svgs';
import { CommentsWrapper, CustomGroup, CustomSelect } from '../styles';
import Comment from './CommentCard';

const Comments = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <CommentsWrapper>
      <Container size="lg">
        <Group spacing={0} mb={40}>
          <SMIcon src={Icons.Star} color="red" />
          <div>
            <Text size="xl">{trans('comments')}</Text>
            <Text color="dimmed">{trans('allComments')} (3.22)</Text>
          </div>
        </Group>
        <CustomGroup>
          <Center style={{ flex: 1 }}>
            <Button
              fontSize="15px"
              variant="burble"
              text={trans('addComment')}
            />
          </Center>
          <Group>
            <Text color="dimmed">{trans('orderWith')} :</Text>
            <CustomSelect
              rightSection={<IconChevronDown size={14} />}
              value={value}
              onChange={setValue}
              data={[{ value: trans('latest') }]}
            />
          </Group>
        </CustomGroup>
        <Comment
          postedAt="July, 23 2020"
          author={{
            name: 'mostafa',
            image:
              'https://th.bing.com/th/id/OIP.jt5y3tRyYCoVdWLg1DBFgQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          }}
          body="سعدت جدا بالتعامل مع حضرتك في اعداد خطة العمل , حيث تم الانتهاء من اعدادها قبل الموعد المتفق عليه بكل احترافية ومهنية , بالإضافة الى سرعة الاستجابة في اجراء أي تعديلات مطلوبة او إضافة الى ملف العمل , هذا بجانب الرقى في التعامل وسعة الصدر , اسعدني التعامل مع حضرتك ولن يكون هذا التعامل الا بداية عمل متواصل بإذن الله تعالى , مع خالص الشكر ووافر الامتنان لشخصكم الكريم ."
        />
        <Comment
          postedAt="July, 23 2020"
          author={{
            name: 'mostafa',
            image:
              'https://th.bing.com/th/id/OIP.jt5y3tRyYCoVdWLg1DBFgQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          }}
          body="سعدت جدا بالتعامل مع حضرتك في اعداد خطة العمل , حيث تم الانتهاء من اعدادها قبل الموعد المتفق عليه بكل احترافية ومهنية , بالإضافة الى سرعة الاستجابة في اجراء أي تعديلات مطلوبة او إضافة الى ملف العمل , هذا بجانب الرقى في التعامل وسعة الصدر , اسعدني التعامل مع حضرتك ولن يكون هذا التعامل الا بداية عمل متواصل بإذن الله تعالى , مع خالص الشكر ووافر الامتنان لشخصكم الكريم ."
        />
      </Container>
    </CommentsWrapper>
  );
};

export default Comments;
