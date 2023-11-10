import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import "./App.css";
import BrandLogo from "./assets/logo/brand_logo.svg";
import FloatingEvent from "./components/floating_event/floating_event";
import Landing from "./sections/landing/landing";
import MobileMenu from "./components/mobile_menu/mobile_menu";
import SlidingStrip from "./components/sliding_strip/sliding_strip";
import Registrations from "./sections/registrations/registrations";
import BottomSheet from "./components/bottom_sheet/bottom_sheet";
import Footer from "./sections/footer/footer";

function App() {
  const [menuState, setMenuState] = useState<boolean>(false);
  const [bottomState, setBottomState] = useState<boolean>(false);
  const menuToggler = () => {
    setMenuState((state) => !state);
  };

  const bottomToggler = () => {
    setBottomState((state) => !state);
  };

  return (
    <div
      className="relative w-screen  overflow-x-hidden"
      style={{
        overflowY: menuState ? "hidden" : "scroll",
        height: menuState ? "100vh" : "auto",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-row px-10 items-center justify-between">
          <img
            src={BrandLogo}
            alt="brand logo"
            className="p-0 w-1/2 max-w-[200px] min-w-[150px]"
          />
          <div
            onClick={menuToggler}
            onKeyDown={menuToggler}
            className="cursor-pointer"
          >
            <FiMenu color="white" size={22} />
          </div>
        </div>
      </div>
      <MobileMenu menuState={menuState} menuToggler={menuToggler} />
      <FloatingEvent />
      <Landing />
      <SlidingStrip />
      <Registrations bottomToggler={bottomToggler} />
      <Footer />
      <BottomSheet bottomState={bottomState} bottomToggler={bottomToggler} />
    </div>
  );
}

export default App;
