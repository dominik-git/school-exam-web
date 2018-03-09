import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import ReactStars from "react-stars";
import PropTypes from "prop-types";
import { ReduxFormInputWithIcon, FormTextAreaWithIcon } from "../../../components/FormElements/index";
import { StyledFormWrapper,StyledForm } from "../styles";
import Button from "../../../components/Button";
import ButtonGroup from "../../../components/ButtonGroup";

const ReviewForm = props => {
  const { handleSubmit, ratingChanged, onCancel } = props;

  const userIcon = <i className="fa fa-user fa-2x" aria-hidden="true" />;
  const messageIcon = <i className="fa fa-commenting fa-2x" aria-hidden="true" />;
  const starIcon = <i className="fa fa-star" aria-hidden="true" />;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <Field
          name="nickName"
          label=""
          component={ReduxFormInputWithIcon}
          type="text"
          icon={userIcon}
          placeholder="Meno"
        />
      </div>
      <div>
        <Field name="message" label="" component={FormTextAreaWithIcon} icon={messageIcon} placeholder="Napiste nam" />
      </div>
      <div>
        <ReactStars count={5} onChange={ratingChanged} size={35} color2={"#ffd700"} />
      </div>
      <ButtonGroup>
        <Button type="submit" blue>
          Pridat
        </Button>
        <Button grey onClick={onCancel}>
          Spat
        </Button>
      </ButtonGroup>
    </StyledForm>
  );
};
// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "reviewForm",
})(ReviewForm);

ReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  ratingChanged: PropTypes.func.isRequired,
};
