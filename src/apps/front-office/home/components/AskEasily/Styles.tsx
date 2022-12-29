import styled from '@emotion/styled';
import landingImage from 'shared/assets/images/overlay.png';

interface LandingContentProps {
  maxWidth?: string;
}
export const LayoutWrapper = styled('div')({
  position: 'relative',
  height: '100vh',
  backgroundImage: `url(${landingImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
});

export const LandingContent = styled('div')((Props: LandingContentProps) => ({
  position: 'relative',
  right: '15%',
  maxWidth: `${Props.maxWidth ? Props.maxWidth : '35%'}`,
}));
