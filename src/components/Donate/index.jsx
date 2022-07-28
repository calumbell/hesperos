import React, { useState } from 'react';
import getStripe from '../../utils/stripejs';

const Donate = () => {

  const [popupVisible, setPopupVisibility] = useState(false);

  // Event handler: redirects user to checkout
  const redirectToCheckout = async (event, donationLevel) => {
    event.preventDefault();
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      submitType: `donate`,
      lineItems: [
        { price: donationLevel, quantity: 1 },
      ],
      successUrl: `${window.location.origin}/thanks/`,
      cancelUrl: `${window.location.origin}/support/`,
    })
    if (error) return; // Handle errors here
  }

  const donationLevels = [
    { name: '£5', stripePrice: process.env.GATSBY_STRIPE_DONATION_PRICE_FIVE },
    { name: '£10', stripePrice: process.env.GATSBY_STRIPE_DONATION_PRICE_TEN },
    { name: '£25', stripePrice: process.env.GATSBY_STRIPE_DONATION_PRICE_TWENTY_FIVE },
    { name: '£50', stripePrice: process.env.GATSBY_STRIPE_DONATION_PRICE_FIFTY },
    { name: '£100', stripePrice: process.env.GATSBY_STRIPE_DONATION_PRICE_ONE_HUNDRED }
  ]

  return (
    <section className='center-children'>
      <button 
        onClick={ () => setPopupVisibility(!popupVisible) }
        className={`call-to-action mt-2 w-25`}
      > Donate Now</button>
      {popupVisible &&
        <ul className='btn-list d-flex w-50'>
          {donationLevels.map((donation, i) => 
            <li key={i}>
              <button 
                className='call-to-action-secondary'
                onClick={(e) => redirectToCheckout(e, donation.stripePrice)}
              >{donation.name}</button>
            </li>
          )}
        </ul> 
      }
    </section>
  )
}

export default Donate;