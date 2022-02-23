import { loadStripe } from '@stripe/stripe-js';
/** 
 * getStripe is a singleton that ensures that we only instantiate Stripe once
 */

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    //stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);
    stripePromise = loadStripe(`pk_test_L79mhXEd2CmUBGzX1rQcMsml`);
  }
  return stripePromise;
}

export default getStripe;