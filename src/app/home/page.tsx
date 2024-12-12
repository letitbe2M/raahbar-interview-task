import AdvertiseBar from "../_components/AdvertiseBar";
import ContactUsForm from "../_components/ContactUsForm";
import HeaderAndInfo from "../_components/HeaderAndInfo";
import HomeProducts from "../_components/HomeProducts";
import Navbar from "../_components/Navbar";
import Slider from "../_components/Slider";

const Page = () => {
  return (
    <>
      <HeaderAndInfo />
      <Navbar />
      <Slider />
      <HomeProducts />
      <AdvertiseBar />
      <ContactUsForm />
    </>
  );
};

export default Page;
