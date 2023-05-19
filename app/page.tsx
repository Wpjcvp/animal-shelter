import Image from "next/image";
import { Header } from "./components/header";
import { WhatWeDo } from "./components/what-we-do";
import { WhatWeNeed } from "./components/what-we-need";
import { SupportDay } from "./components/support-day";
import { PayInfo } from "./components/pay-info";

export default function Home() {
  return (
    <div>
      <Header />
      <WhatWeDo />
      <WhatWeNeed />
      <SupportDay />
      <PayInfo />
    </div>
  );
}
