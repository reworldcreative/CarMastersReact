import React from "react";
import "./calculatorResult.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function CalculatorResult({ priceAmount, months, status }) {
  const [biWeeklyPayment, setBiWeeklyPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [weeklyPayment, setWeeklyPayment] = useState(0);

  useEffect(() => {
    //   const newMonthlyPayment = Math.ceil(priceAmount / months);
    let newMonthlyPayment;

    switch (status) {
      case "poor":
        newMonthlyPayment = Math.ceil((priceAmount / months) * 0.9);
        break;
      case "average":
        newMonthlyPayment = Math.ceil((priceAmount / months) * 0.98);
        break;
      default:
        newMonthlyPayment = Math.ceil(priceAmount / months);
    }
    const newWeeklyPayment = Math.ceil(newMonthlyPayment / 4);
    const newBiWeeklyPayment = Math.ceil(newWeeklyPayment * 2);

    setBiWeeklyPayment(newBiWeeklyPayment);
    setMonthlyPayment(newMonthlyPayment);
    setWeeklyPayment(newWeeklyPayment);
  }, [priceAmount, months, status]);

  return (
    <div className="calculator__block calculator-results">
      <p className="visibility-hidden">
        information about payments according to the selected parameters
      </p>
      <div className="calculator-results__container first">
        <div className="calculator-results__block">
          <p className="secondary-text">Bi-Weekly Payment</p>
          {/* <p className="calculator-results__amount caption accent">$ 483</p> */}
          <p
            aria-hidden="true"
            className="calculator-results__amount caption accent"
          >
            $ {biWeeklyPayment.toLocaleString()}
            {/* {biWeeklyPayment
            .toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              useGrouping: false,
            })
            .replace(/(\D)(\d)/, "$1 $2")
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} */}
          </p>
          <p className="visibility-hidden">{biWeeklyPayment}$</p>
        </div>

        <div className="calculator-results__container">
          <div className="calculator-results__block">
            <p className="secondary-text">Monthly Payment</p>
            {/* <p className="calculator-results__amount caption">$ 966</p> */}
            <p
              aria-hidden="true"
              className="calculator-results__amount caption"
            >
              $ {monthlyPayment.toLocaleString()}
            </p>
            <p className="visibility-hidden">{monthlyPayment}$</p>
          </div>

          <div className="calculator-results__block">
            <p className="secondary-text">Weekly Payment</p>
            {/* <p className="calculator-results__amount caption">$ 241</p> */}
            <p
              aria-hidden="true"
              className="calculator-results__amount caption"
            >
              $ {weeklyPayment.toLocaleString()}
            </p>
            <p className="visibility-hidden">{weeklyPayment}$</p>
          </div>
        </div>
      </div>
      <div
        style={{ width: "100%", height: "45px" }}
        className="calculator-results__button-wrapper"
      >
        <Link
          className="calculator-results__button accent button"
          to={"/quiz"}
          aria-label="Move to quiz page"
        >
          Request a car
        </Link>
        {/* <Button addclass="calculator-results__button accent">
          Request a car
        </Button> */}
      </div>
    </div>
  );
}
