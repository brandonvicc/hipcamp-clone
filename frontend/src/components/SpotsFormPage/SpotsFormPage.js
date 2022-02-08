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
            "iwannacamp makes it easy to block important dates and build your ideal hosting schedule."
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
      <div className="spots-extra-info-container">
        <div className="spots-extra-info">
          <div className="spots-extra-content">
            <h2>You need less than you think.</h2>
            <p>
              iwannacamp features simple plots of land, developed cabins, and
              everything in between. No matter what you have, there’s no need to
              wait to get started.
            </p>
          </div>
          <div className="spots-extra-info-img-container">
            <img
              className="spots-extra-info-img"
              src="https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,h_1190,q_60,w_1190/v1/campground-photos/unoax5ggajjsf3elb7vd.jpg"
              alt="field"
            />
          </div>
        </div>
        <div className="spots-extra-info">
          <div className="spots-extra-info-img-container">
            <img
              className="spots-extra-info-img"
              src="https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,h_1190,q_60,w_1190/v1/campground-photos/uidr2r4nhtsecp2eqffe.jpg"
              alt="field"
            />
          </div>
          <div className="spots-extra-content">
            <h2>What about toilets?</h2>
            <p>
              Toilets aren’t required on properties larger than 20 acres or on
              those offering only dry camping for self-contained RVs. You do
              need a toilet if you have a smaller property and intend to host
              tent campers. This ensures that iwannaCampers dispose of human
              waste in a way that’s good for the environment and compliant with
              local laws.
            </p>
          </div>
        </div>
      </div>
      <SpotsForm />
    </div>
  );
};

export default SpotsFormPage;
