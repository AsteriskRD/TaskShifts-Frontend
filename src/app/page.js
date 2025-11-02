
import LandingPage from "./components/homePageComponents/LandingPage";
import AsAClient from "./components/homePageComponents/AsAClient";
import ForClients from "./components/homePageComponents/ForClients";
import Popular from "./components/homePageComponents/Popular";
import WhatUsersSay from "./components/homePageComponents/WhatUsersSay";

export default function Home() {
    return (
      <div>
        <LandingPage/>
        <AsAClient/>
        <ForClients/>
        <Popular/>
        <WhatUsersSay/>

      </div>
    );
}
