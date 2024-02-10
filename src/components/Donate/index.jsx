import React, { useState } from "react";
import * as styles from "./Donate.module.scss";

const Donate = () => {
  const [popupVisible, setPopupVisibility] = useState(false);

  const donationLevels = [];

  return (
    <section className="center-children">
      <button
        onClick={() => setPopupVisibility(!popupVisible)}
        className={`call-to-action mt-2`}
      >
        Donate Now
      </button>
      {popupVisible && (
        <ul className={styles.btnList}>
          {donationLevels.map((donation, i) => (
            <li key={i}>
              <button className="call-to-action-secondary">
                {donation.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Donate;
