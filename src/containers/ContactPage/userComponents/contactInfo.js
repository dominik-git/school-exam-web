import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { StyledContactInfo, StyledIconWrapper, StyledContactRow, StyledDetailInfo } from "../styles";
import Text from "../../../components/Text";

const emailIcon = <i className="far fa-envelope fa-2x" aria-hidden="true" />;
const phoneIcon = <i className="fas fa-mobile-alt  fa-2x" aria-hidden="true" />;
const addressIcon = <i className="fas fa-map-marker-alt fa-2x" aria-hidden="true" />;
const timeIcon = <i className="far fa-clock fa-2x" aria-hidden="true" />;

const Contactinfo = props => (
  <StyledContactInfo>
    <StyledContactRow>
      <StyledIconWrapper>{addressIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <Text> {props.content.get("address")}</Text>
      </StyledDetailInfo>
    </StyledContactRow>
    <StyledContactRow>
      <StyledIconWrapper>{phoneIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <Text>
          {props.content.get("number1")}, {props.content.get("number2")}
        </Text>
      </StyledDetailInfo>
    </StyledContactRow>
    <StyledContactRow>
      <StyledIconWrapper>{emailIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <Text>{props.content.get("emailAddress")}</Text>
      </StyledDetailInfo>
    </StyledContactRow>
    <StyledContactRow>
      <StyledIconWrapper>{timeIcon}</StyledIconWrapper>
      <StyledDetailInfo>
        <span>
          Pondelok - Piatok {props.content.get("openTime")} - {props.content.get("closeTime")}
        </span>
        <span>Sobota, Nedela - zatvorene</span>
      </StyledDetailInfo>
    </StyledContactRow>
  </StyledContactInfo>
);

export default Contactinfo;
