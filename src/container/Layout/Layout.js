import React, { Component } from "react";
import Aux from "../../HOC/Auxe";
import LayoutCss from "./Layout.module.css";
import { Col, Row } from "react-bootstrap";
import LeftPage from "../../component/LeftPage/LeftPage";
import RightPage from "../../component/RightPage/RightPage";

class Layout extends Component {
  state = {
    inputDisable: false,
    disable: false,
    submit: false,
    input: "",
    image: "",
    clear: "",
  };

  changed = (event) => {
    this.setState({ input: event.target.value });
  };

  changedUrl = (event) => {
    this.setState({ image: event.target.value });
  };

  submit = () => {
    this.setState({ submit: true });
    this.clear();
  };

  clear = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  //  document.getElementById("form").reset();
  };

  disable = () => {
    this.setState({ disable: true });
  };

  render() {
    let disable = "";
    if (this.state.submit) {
      if (!this.state.disable)
        disable = (
          <RightPage disable={this.disable} list={this.state}></RightPage>
        );
    }

    return (
      <Aux>
        <Row className={LayoutCss.Row}>
          <Col className={LayoutCss.Column1}>
            <LeftPage
              changed={this.changed}
              changedUrl={this.changedUrl}
              submit={this.submit}
              disabled={
                this.state.input.length < 1 || this.state.image.length < 1
              }
            />
          </Col>
          <Col className={LayoutCss.Column2}>{disable}</Col>
        </Row>
      </Aux>
    );
  }
}

export default Layout;
