import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { StyledContactInfo, StyledRow, StyledIconWrapper, StyledDetailInfo } from "../styles";
import Text from "../../../components/Text";

const emailIcon = <i className="far fa-envelope fa-2x" aria-hidden="true" />;
const phoneIcon = <i className="fas fa-mobile-alt  fa-2x" aria-hidden="true" />;
const addressIcon = <i className="fas fa-map-marker-alt fa-2x" aria-hidden="true" />;
const timeIcon = <i className="far fa-clock fa-2x" aria-hidden="true" />;

const Contactinfo = props => (
  <StyledContactInfo>
    <StyledRow>
      <StyledIconWrapper>{addressIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <Text bold lg>
          Adresa
        </Text>
        <Text> {props.content.get("address")}</Text>
      </StyledDetailInfo>
    </StyledRow>
    <StyledRow>
      <StyledIconWrapper>{phoneIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <Text bold lg>
          Telefon
        </Text>
        <Text>
          {props.content.get("number1")}, {props.content.get("number2")}
        </Text>
      </StyledDetailInfo>
    </StyledRow>
    <StyledRow>
      <StyledIconWrapper>{emailIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <Text bold lg>
          Email
        </Text>
        <Text>{props.content.get("emailAddress")}</Text>
      </StyledDetailInfo>
    </StyledRow>
    <StyledRow>
      <StyledIconWrapper>{timeIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <Text bold lg>
          Otvaracie hodiny
        </Text>
        <Text>
          {/* {props.content.openDay}-{props.content.closeDay}:{props.content.openTime}-{props.content.closeTime} */}
        </Text>
      </StyledDetailInfo>
    </StyledRow>
  </StyledContactInfo>
);

export default Contactinfo;
