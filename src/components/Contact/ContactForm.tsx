import { useState, useEffect } from 'react';
import { validate as validateEmail } from 'email-validator';
import DOMPurify from 'dompurify';

// Constant
import CONTENT from '@utils/data';

// Hooks
import { useStyletron } from 'baseui';

// Components
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';
import { Checkbox } from 'baseui/checkbox';
import { StyledLink } from 'baseui/link';
import { Button } from 'baseui/button';
import { Notification, KIND } from 'baseui/notification';

const {
  FOOTER: { PRIVACY },
  CONTACT: { CONTACT_FORM },
} = CONTENT;

const ContactForm: React.FC = () => {
  // Style
  const [css, theme] = useStyletron();

  const formWrapperStyle = css({
    marginTop: '80px',
    width: '100%',
    [theme.mediaQuery.medium]: {
      margin: '80px auto 160px auto',
    },
  });

  const formSectionWrapperStyle = css({
    display: 'flex',
    flexDirection: 'column',

    [theme.mediaQuery.medium]: {
      flexDirection: 'row',
    },
  });

  const nameInputWrapperStyle = css({
    width: '100%',
    [theme.mediaQuery.medium]: {
      width: '50%',
      marginRight: '13px',
    },
  });

  const emailInputWrapperStyle = css({
    width: '100%',
    [theme.mediaQuery.medium]: {
      width: '50%',
      marginLeft: '13px',
    },
  });

  const privacyCheckBoxWrapperStyle = css({
    marginTop: '20px',
    width: '240px',
  });

  const privacyLinkStyle = css({
    marginLeft: '5px',
  });

  const submitButtonWrapperStyle = css({
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  });

  const submitButtonTextStyle = css({
    fontSize: '22px',
  });

  const notificationWrapperStyle = css({
    position: 'absolute',
    bottom: '180px',
    right: '20px',

    [theme.mediaQuery.medium]: {
      bottom: '130px',
    },
  });

  // Form Logics
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [nameVisited, setNameVisited] = useState(false);
  const showNameError = !nameValid && nameVisited;
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setNameValid(!!sanitizedValue.trim());
    setName(sanitizedValue);
  };

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailVisited, setEmailVisited] = useState(false);
  const showEmailError = !emailValid && emailVisited;
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setEmailValid(validateEmail(sanitizedValue));
    setEmail(sanitizedValue);
  };

  const [message, setMessage] = useState('');
  const [messageValid, setMessageValid] = useState(false);
  const [messageVisited, setMessageVisited] = useState(false);
  const showMessageError = !messageValid && messageVisited;
  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setMessageValid(!!sanitizedValue.trim());
    setMessage(sanitizedValue);
  };

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyAcceptedVisited, setPrivacyAcceptedVisited] = useState(false);
  const showPrivacyAcceptedError = !privacyAccepted && privacyAcceptedVisited;
  const onPrivacyAcceptedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyAccepted(e.target.checked);
  };

  const [submitting, setSubmitting] = useState(false);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState(
    CONTACT_FORM.SUBMIT.SUCCESS,
  );
  const [notificationPositive, setNotificationPositive] = useState(true);
  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 4500);
    }
  }, [showNotification]);

  const resetForm = () => {
    setName('');
    setNameValid(false);
    setNameVisited(false);
    setEmail('');
    setEmailValid(false);
    setEmailVisited(false);
    setMessage('');
    setMessageValid(false);
    setMessageVisited(false);
    setPrivacyAccepted(false);
    setPrivacyAcceptedVisited(false);
    setSubmitting(false);
  };

  const onFormSubmit = () => {
    setSubmitting(true);

    if (nameValid && emailValid && messageValid && privacyAccepted) {
      submitForm();
    } else {
      if (!nameValid) {
        setNameVisited(true);
      } else if (!emailValid) {
        setEmailVisited(true);
      } else if (!messageValid) {
        setMessageVisited(true);
      } else if (!privacyAccepted) {
        setPrivacyAcceptedVisited(true);
      }
      setSubmitting(false);
    }
  };

  const submitForm = async () => {
    const res = await fetch('/api/send-mail', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (data.statusCode === 202) {
      setShowNotification(true);
      setNotificationText(CONTACT_FORM.SUBMIT.SUCCESS);
      setNotificationPositive(true);
    } else {
      setShowNotification(true);
      setNotificationText(CONTACT_FORM.SUBMIT.ERROR);
      setNotificationPositive(false);
    }

    resetForm();
    setSubmitting(false);
  };

  return (
    <div className={formWrapperStyle}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={formSectionWrapperStyle}>
          <div className={nameInputWrapperStyle}>
            <FormControl
              label={CONTACT_FORM.NAME.LABEL}
              error={showNameError ? CONTACT_FORM.NAME.ERROR : null}
            >
              <Input
                id="contact-form-name"
                value={name}
                onChange={onNameChange}
                onBlur={() => setNameVisited(true)}
                error={showNameError}
                positive={nameValid}
              />
            </FormControl>
          </div>
          <div className={emailInputWrapperStyle}>
            <FormControl
              label={CONTACT_FORM.EMAIL.LABEL}
              error={showEmailError ? CONTACT_FORM.EMAIL.ERROR : null}
            >
              <Input
                id="contact-form-email"
                value={email}
                onChange={onEmailChange}
                onBlur={() => setEmailVisited(true)}
                error={showEmailError}
                positive={emailValid}
              />
            </FormControl>
          </div>
        </div>
        <div>
          <FormControl
            label={CONTACT_FORM.MESSAGE.LABEL}
            error={showMessageError ? CONTACT_FORM.MESSAGE.ERROR : null}
          >
            <Textarea
              id="contact-form-message"
              value={message}
              onChange={onMessageChange}
              onBlur={() => setMessageVisited(true)}
              error={showMessageError}
              positive={messageValid}
            />
          </FormControl>
        </div>
        <div className={privacyCheckBoxWrapperStyle}>
          <FormControl
            error={showPrivacyAcceptedError ? CONTACT_FORM.PRIVACY.ERROR : null}
          >
            <Checkbox
              checked={privacyAccepted}
              onChange={onPrivacyAcceptedChange}
              onBlur={() => setPrivacyAcceptedVisited(true)}
              error={showPrivacyAcceptedError}
            >
              {CONTACT_FORM.PRIVACY.LABEL}
              <StyledLink
                className={privacyLinkStyle}
                href={PRIVACY.URL}
                target="_blank"
                rel="noreferrer"
              >
                {PRIVACY.LABEL}
              </StyledLink>
            </Checkbox>
          </FormControl>
        </div>
        <div className={submitButtonWrapperStyle}>
          <Button kind={'minimal'} onClick={onFormSubmit} disabled={submitting}>
            <span className={`gradient-link-animated ${submitButtonTextStyle}`}>
              {submitting
                ? CONTACT_FORM.SUBMIT.SUBMITTING
                : CONTACT_FORM.SUBMIT.CTA}
            </span>
          </Button>
        </div>
      </form>
      <div className={notificationWrapperStyle}>
        {showNotification && (
          <Notification
            closeable
            onClose={() => setShowNotification(false)}
            kind={notificationPositive ? KIND.positive : KIND.negative}
            autoHideDuration={4000}
          >
            {notificationText}
          </Notification>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
