import React from "react";
import { Field, reduxForm, reset, FormSection } from "redux-form/immutable";
import { FormInput, FormTextarea } from "../../../components/FormElements/index";
import Button from "../../../components/Button";
import { 
  StyledOrderField, 
  StyledOrderWrapper,
  StyledFormWrapper, 
  StyledRow, 
  StyledInformLabel, 
  StyledOrderTitle 
} from "../styles";
// import MyDatePicker from "../../../components/DatePicker";
import ServiceOrderItem from "../../../components/ServiceOrderItem";

const OrderForm = props => {
  const { handleSubmit, handleChange, date, error, serviceItems, theme } = props;

  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit}>
        <StyledOrderTitle>Osobne informacie</StyledOrderTitle>
        <StyledRow>
          <StyledOrderField>
            <Field
              name="name"
              label="Meno"
              component={FormInput}
              type="text"
              border
              placeholder="Peter"
              labelColor="#545454"
            />
            <StyledInformLabel>* Pole je povine</StyledInformLabel>
          </StyledOrderField>
          <StyledOrderField>
            <Field name="surname" label="Priezvisko" component={FormInput} type="text" border placeholder="Novy"  labelColor="#545454" />
            <StyledInformLabel>* Pole je povine</StyledInformLabel>
          </StyledOrderField>
        </StyledRow>

        <StyledRow>
          <StyledOrderField>
            <Field
              name="emailAddress"
              label="E-mailova adresa"
              component={FormInput}
              type="email"
              border
              placeholder="email@email.com"
              labelColor="#545454"
            />
            <StyledInformLabel>* Pole je povine</StyledInformLabel>
          </StyledOrderField>
          <StyledOrderField>
            <Field
              name="phoneNumber"
              label="Telefonne cislo"
              component={FormInput}
              type="text"
              border
              placeholder="0955 111 222"
              labelColor="#545454"
            />
            <StyledInformLabel>* Pole je povine</StyledInformLabel>
          </StyledOrderField>
        </StyledRow>

        {serviceItems.length > 0 ? (
          <div>
            <StyledOrderTitle>Pozadovany servisny ukon</StyledOrderTitle>
              <FormSection name="serviceItems">
              <StyledOrderWrapper>
                {serviceItems.map(option => <ServiceOrderItem item={option} key={option.id} />)}
                </StyledOrderWrapper>
              </FormSection>
            
          </div>
        ) : null}

        <StyledOrderTitle>Popis zavady</StyledOrderTitle>
        <Field
          name="problemDescription"
          label=""
          component={FormTextarea}
          type="text"
          placeholder="Popis zavady"
          border
          labelColor="#545454"
        />

        <StyledOrderTitle>Udaje o vozidle</StyledOrderTitle>
        <StyledRow>
          <StyledOrderField>
            <Field name="carBrand" label="Znacka auta" component={FormInput} type="text" border placeholder="BMW"  labelColor="#545454" />
          </StyledOrderField>
          <StyledOrderField>
            <Field name="carModel" label="Model auta" component={FormInput} type="text" border placeholder="X6"  labelColor="#545454" />
          </StyledOrderField>
        </StyledRow>

        <StyledRow>
          <StyledOrderField>
            <Field name="yearOfMade" label="Rok vyroby" component={FormInput} type="text" border placeholder="2014"  labelColor="#545454" />
          </StyledOrderField>
          {/* <Field name="time" label="Orientacny cas" component={MyDatePicker} /> */}
        </StyledRow>

        <StyledOrderTitle>ĎAKUJEME</StyledOrderTitle>
        <span>
          Veľmi pekne ďakujeme, že ste si vybrali nás, budeme sa snažiť maximálne vyhovieť. Čoskoro Vás kontaktuje náš
          technik.
        </span>
        <hr />

        <Button type="submit" blue>
          OBJEDNAT
        </Button>
      </form>
    </StyledFormWrapper>
  );
};
const afterSubmit = (result, dispatch) => dispatch(reset("orderForm"));
// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "orderForm",
  onSubmitSuccess: afterSubmit
})(OrderForm);

// OrderForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };
