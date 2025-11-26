
import LandingPage from "./components/homePageComponents/LandingPage";
import AsAClient from "./components/homePageComponents/AsAClient";
import ForClients from "./components/homePageComponents/ForClients";
import Popular from "./components/homePageComponents/Popular";
import WhatUsersSay from "./components/homePageComponents/WhatUsersSay";
import How from "./components/homePageComponents/How";
import Why from "./components/homePageComponents/Why";
import OnePlatform from "./components/homePageComponents/OnePlatform";
import ServiceProvider from "./components/homePageComponents/ServiceProvider";

export default function Home() {
    return (
      <div className="max-w-[1440px] mx-auto">
        <LandingPage/>
        {/* <How/> */}
        {/* <Why/> */}
        <OnePlatform/>
        <ServiceProvider/>
        <Popular/>
        <WhatUsersSay/>
        

      </div>
    );
}
