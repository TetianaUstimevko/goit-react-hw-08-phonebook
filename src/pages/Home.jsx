import phonebookmain from '../img/phonebookmain.jpg';
import { HomeContainer, HomeImgBox, HomeTextBox, HomeText, HomeImg } from './pages.styled';

export default function Home() {
  return (
    <HomeContainer>
      <HomeImgBox>
        <HomeImg src={phonebookmain} alt="" />
      </HomeImgBox>
      <HomeTextBox>
        <HomeText>Welcome to the Phonebook app! In this application you can save your contacts.</HomeText>
      </HomeTextBox>
    </HomeContainer>
  );
}
