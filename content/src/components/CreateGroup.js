import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ButtonGroup,
  Container
} from "reactstrap";
import "./css/createGroup.css";
// import TestSelect from "./TestSelect";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onRadioBtnClick(selected) {
    this.setState({ selected });
  }

  onSave() {
    console.log("testing");
  }

  render() {
    return (
      <Container>
        <div className="div_createGroup">
          <Form className="form_createGroup">
            <h5 id="createGroup">Create a group</h5>
            <FormGroup>
              <Label for="groupName">Group Name</Label>
              <Input
                type="text"
                name="groupName"
                id="groupName"
                placeholder="Enter Your Group Name"
              />
            </FormGroup>
            <Label for="rideSelect">Key Words</Label>
            {/* <TestSelect id="rideSelect" /> */}
            <br />
            <FormGroup>
              <Label for="groupDescribe">Group Description</Label>
              <Input type="textarea" name="groupDescribe" id="groupDescribe" />
            </FormGroup>
            <br />
            <div>
              <Button outline color="primary" onClick={this.onSave}>
                Submit
              </Button>{" "}
              <Button outline color="secondary">
                Clear
              </Button>{" "}
            </div>
          </Form>
        </div>
      </Container>
    );
  }
}
export default CreateGroup;
