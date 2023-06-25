import phonebookmain from '../img/phonebookmain.jpg';
import { HomeContainer, HomeImgBox, HomeTextBox, HomeText, HomeImg } from './pages.styled';

export default function Home() {
  return (
    <HomeContainer>
      <HomeImgBox>
        <HomeImg src={phonebookmain} alt="" />
      </HomeImgBox>
      <HomeTextBox>
        <HomeText>Welcome to the Phonebook app!</HomeText>
      </HomeTextBox>
    </HomeContainer>
  );
}
