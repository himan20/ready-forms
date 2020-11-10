import React from "react";
import { Card, CardTitle, CardBody, CardFooter, Button } from "reactstrap";

const FormInCardTemplate = (props: any) => {

  const showCurrentDetails = () => {
    console.log(props.formState);
  }

  return (
    <Card className="main-card mb-3">
      <CardTitle>{props.title}</CardTitle>
      <CardBody>{props.children}</CardBody>
      <CardFooter>
        <Button onClick={showCurrentDetails}>SHOW</Button>
      </CardFooter>
    </Card>
  );
};

export default FormInCardTemplate;
