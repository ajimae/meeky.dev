import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import Layout from '../../components/Layout';

export default function ContactMePage() {
  return (
    <Layout>
      <Helmet title="Contact Me" />
      <h1>Contact Me</h1>
      <p>Want to get in touch?</p>
      <p>
        Send me a DM on <a href="https://twitter.com/ajimae8">Twitter</a> or use
        the form below.
      </p>
      <ContactForm />
    </Layout>
  );
}

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends React.Component {
  state = { name: '', email: '', message: '', submitted: false };

  componentDidMount() {
    if (this.multilineTextarea) {
      this.multilineTextarea.style.height = 'auto';
    }
  }

  handleSubmit = (e) => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ..._.omit(this.state, ['submitted']),
      }),
    })
      .then(() => this.setState({ submitted: true }))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.multilineTextarea.style.height = 'auto';
    this.multilineTextarea.style.height = `${this.multilineTextarea.scrollHeight}px`;
  };

  render() {
    const { name, email, message, submitted } = this.state;
    if (submitted) {
      return <span>Success. Thank you!</span>;
    }
    return (
      <form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <p>
          <label>
            {/* Name:{' '} */}
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            {/* Email:{' '} */}
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={this.handleChange}
              ref={(ref) => (this.multilineTextarea = ref)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}
