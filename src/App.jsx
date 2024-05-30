import { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function App() {
  //state  to hold values from input field
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);

  /*for conditional rendering*/
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsyear] = useState(true);

  const calculate = () => {
    setInterest((principle * rate * year) / 100);
  };
  const validate = (e) => {
    const { name, value } = e.target;
    if (!!value.match(/^[0-9]*$/)) {
      if (name === "principle") {
        setPrinciple(value);
        setIsPrinciple(true);
      } else if (name === "rate") {
        setRate(value);
        setIsRate(true);
      } else {
        setYear(value);
        setIsyear(true);
      }
    } else {
      if (name === "principle") {
        // setPrinciple(value);
        setIsPrinciple(false);
      } else if (name === "rate") {
        // setRate(value);
        setIsRate(false);
      } else {
        // setYear(value);
        setIsyear(false);
      }
    }
  };
  const handleReset = () => {
    setPrinciple(0);
    setIsPrinciple(true);
    setRate(0);
    setIsRate(true);
    setYear(0);
    setIsyear(true);
    setInterest(0);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 content mt-5 rounded-3 shadow ">
          <h3 className="text-center fw-bold pt-5">Simple Interest App</h3>
          <p className="text-center">Calculate your simple interest easily</p>
          <div className="row amt-area rounded-3 d-flex justify-content-center align-items-center ps-5 pe-5">
            <div className="col-12 amt-text shadow rounded-2">
              <h1 className="fw-bold flex-column text-center mt-3">
                ₹ {interest}
              </h1>
              <p className="text-center">Total simple interest</p>
            </div>
          </div>
          <form action="" className="rounded-3  mt-5 ps-5 pe-5 bg-transparent">
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="₹ Principle Amount"
                variant="outlined"
                className="w-100"
                name="principle"
                onChange={(e) => validate(e)}
                value={principle || ""}
              />
              {!isPrinciple && <p className="text-danger">Invalid input</p>}
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="Rate of Interest (p.a) %"
                variant="outlined"
                className="w-100"
                name="rate"
                onChange={(e) => validate(e)}
                value={rate || ""}
              />
              {!isRate && <p className="text-danger">Invalid input</p>}
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="Year (Yr)"
                variant="outlined"
                className="w-100"
                name="year"
                onChange={(e) => validate(e)}
                value={year || ""}
              />
              {!isYear && <p className="text-danger">Invalid input</p>}{" "}
            </div>
            <div className="row mt-3 pb-5">
              <div className="col-md-12 d-flex justify-content-between align-items-center ">
                <Button
                  variant="contained"
                  color="success"
                  style={{ width: "47%", height: "45px" }}
                  disabled={isPrinciple && isRate && isYear ? false : true}
                  onClick={calculate}
                >
                  Calculate
                </Button>
                <Button
                  variant="outlined"
                  style={{ width: "47%", height: "45px" }}
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default App;
