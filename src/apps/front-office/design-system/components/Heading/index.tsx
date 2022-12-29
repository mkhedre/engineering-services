import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import Button from '../Button';
import { HeadingTitle, HeadingWrapper } from './style';

interface HeadingProps {
  title: string;
  subTitle?: string;
  icon?: React.ReactNode;
  button?: {
    text: string;
    href: string;
  };
  badge?: string;
}

export default function Heading({
  title,
  icon,
  button,
  subTitle,
  badge,
}: HeadingProps) {
  return (
    <>
      <HeadingWrapper>
        <HeadingTitle>{title}</HeadingTitle>
        {/* {badge && <CustomBadge>new</CustomBadge>} */}
        {button && (
          <Link to={button.href} style={{ textDecoration: 'none' }}>
            <Button
              variant="info"
              text={trans(button.text)}
              style={{ margin: 'auto' }}
            />
          </Link>
        )}
      </HeadingWrapper>
    </>
  );
}
