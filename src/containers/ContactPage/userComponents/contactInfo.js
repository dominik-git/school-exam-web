import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { StyledContactInfo, StyledRow, StyledIconWrapper, StyledDetailInfo } from "../styles";
import Text from "../../../components/Text";

const emailIcon = <i className="fa fa-envelope fa-2x" aria-hidden="true" />;
const phoneIcon = <i className="fa fa-phone fa-2x" aria-hidden="true" />;
const addressIcon = <i className="fa fa-map-marker fa-2x" aria-hidden="true" />;
const timeIcon = <i className="fa fa-clock-o fa-2x" aria-hidden="true" />;

const Contactinfo = props => (
  <StyledContactInfo>
    <StyledRow>
      <StyledIconWrapper>{addressIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <Text bold lg>
          Adresa
        </Text>
        <Text>{props.content.address}</Text>
      </StyledDetailInfo>
    </StyledRow>
    <StyledRow>
      <StyledIconWrapper>{phoneIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <Text bold lg>
          Telefon
        </Text>
        <Text>
          {props.content.number1}, {props.content.number2}
        </Text>
      </StyledDetailInfo>
    </StyledRow>
    <StyledRow>
      <StyledIconWrapper>{emailIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <Text bold lg>
          Email
        </Text>
        <Text>{props.content.emailAddress}</Text>
      </StyledDetailInfo>
    </StyledRow>
    <StyledRow>
      <StyledIconWrapper>{timeIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <Text bold lg>
          Otvaracie hodiny
        </Text>
        <Text>
          {props.content.openDay}-{props.content.closeDay}:{props.content.openTime}-{props.content.closeTime}
        </Text>
      </StyledDetailInfo>
    </StyledRow>
  </StyledContactInfo>
);

export default Contactinfo;
