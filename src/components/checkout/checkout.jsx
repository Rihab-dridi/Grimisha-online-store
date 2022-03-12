import { Paper, StepLabel, Stepper, Typography, Step } from "@material-ui/core";
import React, { useState } from "react";
import useStyle from "./styles";
export default function Checkout() {
  const steps = ["Shipping adress", "Payment details "];
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyle();
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={0} className={classes.Stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </main>
    </>
  );
}
