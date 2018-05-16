import React from "react";
import { Field, reduxForm, reset } from "redux-form/immutable";
import ReactStars from "react-stars";
import PropTypes from "prop-types";
import { FormInput, FormTextarea } from "../../../components/FormElements/index";
import { StyledForm } from "../styles";
import Button from "../../../components/Button";
import ButtonGroup from "../../../components/ButtonGroup";

const ReviewForm = props => {
  const { handleSubmit, ratingChanged, onCancel } = props;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <Field
          name="nickName"
          label=""
          component={FormInput}
          type="text"
          border
          placeholder="Meno"
          labelColor="#545454"
        />
      </div>
      <div>
        <Field
          name="message"
          label=""
          component={FormTextarea}
          type="text"
          placeholder="Bol som spokojny so sluzbami a zamestnancami servisu"
          border
          labelColor="#545454"
        />
      </div>
      <div>
        <ReactStars count={5} onChange={ratingChanged} size={35} color2={"#ffd700"} />
      </div>
      <ButtonGroup>
        <Button type="submit" blue>
          Pridat
        </Button>
      </ButtonGroup>
    </StyledForm>
  );
};
const afterSubmit = (result, dispatch) => dispatch(reset("reviewForm"));
// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "reviewForm",
  onSubmitSuccess: afterSubmit
})(ReviewForm);

ReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  ratingChanged: PropTypes.func.isRequired
};
