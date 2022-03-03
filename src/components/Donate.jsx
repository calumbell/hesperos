import React from 'react';
import getStripe from '../utils/stripejs';

const Donate = () => {
  const redirectToCheckout = async event => {
    event.preventDefault();
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      submitType: `donate`,
      lineItems: [{ price: process.env.GATSBY_STRIPE_DONATION_PRICE, quantity: 1}],
      successUrl: `${window.location.origin}/thanks/`,
      cancelUrl: `${window.location.origin}/support/`,
    })
  }

  return (
    <button 
      onClick={redirectToCheckout}
      className={`call-to-action`}
    >
      Donate
    </button>
  )
}

export default Donate