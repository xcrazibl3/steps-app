import { useState } from "react";
import { messages } from "../data";
import Button from "./Button";
import StepMessage from "./StepMessage";

export default function App() {
  const numMessages = messages.length;
  const [step, setStep] = useState(1);

  function handlePrevious() {
    step <= 1 ? setStep(step) : setStep(step - 1);
  }

  function handleNext() {
    step >= numMessages ? setStep(step) : setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <StepMessage step={step}>{messages[step - 1]}</StepMessage>

      <div className="buttons">
        <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
          <span>⬅️</span> Previous
        </Button>

        <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
          <span>➡️</span>Next
        </Button>
      </div>
    </div>
  );
}
