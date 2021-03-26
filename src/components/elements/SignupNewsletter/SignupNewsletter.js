import React, { memo, useCallback, useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import {
  Background, ContainerSignup, Discount, InputEmail,
  ButtonSignupNewsletter, ContainerInput, EmailSent, InputRow,
  InfoMsg, ContainerInfoSignup,
} from './SignupNewsletter.styles';
import I from '../../ui/I';
import { B } from '../../ui/B';

const SignupNewsletter = () => {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [mailchimpMsg, setMailchimpMsg] = useState(null);
  const [email, setEmail] = useState('');
  const handleChangeEmailInput = useCallback((e) => setEmail(e.target.value), []);
  const handleSubscribeNewsletter = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setMailchimpMsg(null);
    try {
      const res = await addToMailchimp(email);
      if (res.result === 'error') {
        setMailchimpMsg(res.msg);
      } else {
        setEmailSent(true);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, [email]);
  return (
    <Background id="subscribe">
      <ContainerSignup>
        <ContainerInfoSignup>
          <h2>
            Sign up
            {' '}
            <I>for</I>
            <br />
            our—
            <B weight={500}>newsletter</B>
          </h2>
          <Discount>
            and get 20% off your first
            Boite
            {' '}
            <I>du</I>
            {' '}
            Santon when we launch
          </Discount>
        </ContainerInfoSignup>
        <ContainerInput>
          {emailSent
            ? <EmailSent>Thank you! See you soon</EmailSent>
            : (
              <>
                <InputRow>
                  <InputEmail placeholder="enter your email" onChange={handleChangeEmailInput} />
                  <ButtonSignupNewsletter
                    type="button"
                    onClick={handleSubscribeNewsletter}
                    disabled={loading}
                  >
                    Signup —
                  </ButtonSignupNewsletter>
                </InputRow>
                {mailchimpMsg
                && (
                <InfoMsg>
                  <div dangerouslySetInnerHTML={{ __html: mailchimpMsg }} />
                </InfoMsg>
                )}
              </>
            )}
        </ContainerInput>
      </ContainerSignup>
    </Background>
  );
};

export default memo(SignupNewsletter);
