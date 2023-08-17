import React from "react";
import { render } from "react-dom";

import ContactForm from "./form/form";
import SuccessMsg from "./success/success";

import "./form/form.css";
import "./input/input.css";
import "./success/success.css";

const contactFields = [
  {
    label: "Your full name",
    id: "fullname",
    placeholder: "John Hancock",
    type: "text",
    options: {
      required: true
    }
  },
  {
    label: "Your email",
    id: "email",
    placeholder: "john.hancock@example.com",
    type: "email",
    options: {
      required: true,
      email: true
    }
  },
  {
    label: "Subject",
    id: "subject",
    placeholder: "I am enquiring about...",
    type: "text",
    options: {
      required: true
    }
  },
  {
    label: "Enquiry",
    id: "content",
    placeholder: "Tell us more about your enquiry, feedback or issues.",
    type: "textarea",
    options: {
      required: true
    }
  }
];

const salesFields = [
  {
    label: "Your full name",
    id: "fullname",
    placeholder: "John Hancock",
    type: "text",
    options: {
      required: true
    }
  },
  {
    label: "Your work email",
    id: "email",
    placeholder: "john.hancock@example.com",
    type: "email",
    options: {
      required: true,
      email: true
    }
  },
  {
    label: "Company website",
    id: "website",
    placeholder: "https://example.com",
    type: "text",
    options: {
      required: true,
      url: true
    }
  },
  {
    label: "Details",
    id: "content",
    placeholder:
      "Tell us more about your needs, timeline or potential partnership.",
    type: "textarea",
    options: {
      required: true
    }
  }
];

const App = () => (
  <div>
    <ContactForm fields={contactFields} submitText="contact" />
    <br />
    <br />
    <br />
    <ContactForm fields={salesFields} submitText="contact sales" />
    <br />
    <br />
    <br />
    <SuccessMsg email="sstockology@gmail.com" />
  </div>
);

render(<App />, document.getElementById("root"));
