import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import ReactStars from "react-stars";
import PropTypes from "prop-types";
import ReduxFormField from "../../components/FormElements";
import { StyledFormWrapper } from "./styles";

const ReviewForm = props => {
  const { handleSubmit, nameOfFields, ratingChanged } = props;
  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="nickName" label={nameOfFields.get("emailField")} component={ReduxFormField} type="text" />
        </div>
        <div>
          <ReactStars count={5} onChange={ratingChanged} size={24} color2={"#ffd700"} />
        </div>
        <div>
          <Field name="message" label={nameOfFields.get("message")} component={ReduxFormField} type="textarea" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </StyledFormWrapper>
  );
};
// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "reviewForm",
})(ReviewForm);

ReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  nameOfFields: PropTypes.object.isRequired,
  ratingChanged: PropTypes.func.isRequired,
};
