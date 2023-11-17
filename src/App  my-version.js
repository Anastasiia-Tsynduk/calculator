import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState(0);
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendlyPercentage, setFriendlyPercentage] = useState(0);
  const tip =
    (price * (Number(myPercentage) + Number(friendlyPercentage))) / 100;

  function handleSetPrice(newPrice) {
    setPrice(newPrice);
  }

  function handleSetMyPercentage(newPercentage) {
    setMyPercentage(newPercentage);
  }

  function handleSetFriendlyPercentage(newFriendlyPercentage) {
    setFriendlyPercentage(newFriendlyPercentage);
  }

  function handleClearInput() {
    setPrice(0);
    setMyPercentage(0);
    setFriendlyPercentage(0);
  }

  return (
    <div>
      <BillInput price={price} onSetPrice={handleSetPrice} />
      <SelectPercentage
        percentage={myPercentage}
        onSetPercentage={handleSetMyPercentage}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={friendlyPercentage}
        onSetPercentage={handleSetFriendlyPercentage}
      >
        How did you friendly like the service?
      </SelectPercentage>
      <Output price={price} tip={tip} />
      <Reset onClearInput={handleClearInput} />
    </div>
  );
}

function BillInput({ price, onSetPrice }) {
  return (
    <div>
      <p>
        How much was the bill?
        <input
          type="text"
          value={price}
          onChange={(event) => onSetPrice(event.target.value)}
        />
      </p>
    </div>
  );
}

function SelectPercentage({ percentage, onSetPercentage, children }) {
  return (
    <div>
      <p>
        {children}
        <select
          value={percentage}
          onChange={(e) => onSetPercentage(e.target.value)}
        >
          <option value="0">Dissatisfield (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing (20%)!</option>
        </select>
      </p>
    </div>
  );
}

function Output({ price, tip }) {
  return (
    <div>
      <h2>
        You pay {Number(tip) + Number(price)} (${price} + ${tip} tip)
      </h2>
    </div>
  );
}

function Reset({ onClearInput }) {
  return <button onClick={onClearInput}>Reset</button>;
}
