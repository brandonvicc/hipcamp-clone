import SpotsForm from "./SpotsForm/SpotsForm";
import StepComponent from "./StepComponent";
import "./SpotsFormPage.css";

const SpotsFormPage = () => {
  return (
    <div className="spots-form-page-container">
      <h1 className="pageHeader">Hosting on iwannacamp is really easy!</h1>
      <div className="steps-container">
        <StepComponent
          text={
            "Starting a listing is completely free and easy—it only takes minutes from start to publish."
          }
          imgUrl={
            "https://djqvcbmmgpti5.cloudfront.net/assets/home/illustration_tent_arms-82c99eed4e15d761676cca6d9795b400ed632244c0b269d7effab3f0cfae500e.svg"
          }
          heading={"Its Free!"}
        />
        <StepComponent
          text={
            "Hipcamp makes it easy to block important dates and build your ideal hosting schedule."
          }
          imgUrl={
            "https://djqvcbmmgpti5.cloudfront.net/assets/home/illustration_palm_eye-ea23799cd4f1047836f04ffddd367a1508d47354372a713661775d919bfcce05.svg"
          }
          heading={"Host when you want."}
        />
        <StepComponent
          text={
            "Easily set up direct deposit, and you’ll start receiving your earnings every week."
          }
          imgUrl={
            "https://djqvcbmmgpti5.cloudfront.net/assets/home/illustration_bill_sun-84117db2560843651507bc5f4c8e692a86d8863ab137d92b7dc851b646692c2f.svg"
          }
          heading={"Get paid every week."}
        />
      </div>
      <SpotsForm />
    </div>
  );
};

export default SpotsFormPage;
