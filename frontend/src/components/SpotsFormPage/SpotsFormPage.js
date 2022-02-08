const SpotsFormPage = () => {
  return (
    <div>
      <h1 className="pageHeader">Create a new Spot</h1>

      <form>
        <div className="spot-form-input-container">
          <label htmlFor="name">Name of the Spot</label>
          <input className="input-control" type="text" name="name" />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="address">Street Address</label>
          <input className="input-control" type="text" name="address" />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="city">City</label>
          <input className="input-control" type="text" name="city" />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="state">State</label>
          <input className="input-control" type="text" name="state" />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="country">Country</label>
          <input className="input-control" type="text" name="country" />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="price">How much per Night?</label>
          <input className="input-control" type="text" name="price" />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="lat">Latitude Coordinates</label>
          <input className="input-control" type="number" name="lat" />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="lng">Longitutde Coordinates</label>
          <input className="input-control" type="number" name="lng" />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="img_link">Add a Picture</label>
          <input
            className="input-control"
            type="text"
            name="img_link"
            placeholder="Please put the link"
          />
        </div>
        <button type="submit">Add new Spot!</button>
      </form>
    </div>
  );
};

export default SpotsFormPage;
