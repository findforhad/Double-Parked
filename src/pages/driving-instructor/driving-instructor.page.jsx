import React from "react";

import Header from "../../components/header/header.component";
import FirstBlock from "./sections/first-block/first-block.section";
import SecBlock from "./sections/sec-block/sec-block.section";
import ThiredBlock from "./sections/thired-block/thired-block.section";
import Promise from "./sections/promise/promise.section";
import FouthBlock from "./sections/fourth-block/fourth-block.section";
import SmarterMarketing from "./sections/smarter-marketing/smarter-marketing.section";
import SavingMoney from "./sections/saving-money/saving-money.section";
import Packeges from "./sections/packeges/packeges.section";

import "./driving-instructor.styles.scss";

const DrivingInstructor = () => (
  <div className="driving_instructor__wrapper">
    <Header pageTitle="Driving Instructor" />
    <FirstBlock />
    <SecBlock />
    <ThiredBlock />
    <Promise />
    <FouthBlock />
    <SmarterMarketing />
    <SavingMoney />
    <Packeges />
  </div>
);

export default DrivingInstructor;
