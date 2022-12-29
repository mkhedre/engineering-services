import AskEasily from '../AskEasily/AskEasily';
import BestOffices from '../BestOffices/BestOffices';
import Categories from '../Categories/Categories';
import EngineeringServices from '../EngineeringServices/EngineeringServices';
import JoinNow from '../JoinNow/JoinNow';
import Mask from '../Mask/Mask';
import WhyUs from '../WhyUS/WhyUs';
import { HomeWrapper } from './style';

export default function HomePage() {
  return (
    <HomeWrapper>
      <AskEasily />
      <WhyUs />
      <BestOffices />
      <Mask />
      <Categories />
      <EngineeringServices />
      <JoinNow />
    </HomeWrapper>
  );
}
