import Body from "../components/body/body";
import Header from "../components/Header/Header";
import  Footer  from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <div className="font-body bg-[#F5F5F5]">
        <Header />
        <Body />
        <Footer/>
      </div>
    </>
  );
}
