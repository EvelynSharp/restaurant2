import React from 'react';
import glamorous from 'glamorous';
import { ResHeader } from '../../styles/style-index';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';

const FormWrapper = glamorous.div({
  padding: '3vw 5vw',
  textAlign: 'left',
})


const Input = props => (
  <Form.Field>
    <Form.Input
      required
      value={props.input.value}
      label={props.label}
      onChange={(param,data) => {
        console.log(props)
        props.input.onChange(data.value)}}
    />
  </Form.Field>
)

const Message = props => (
  <Form.Field>
    <Form.TextArea
      required
      value={props.input.value}
      label={props.label}
      onChange={(param,data) => props.input.onChange(data.value)}
    />
  </Form.Field>
)


const ContactForm = ({ handleSubmit, reset }) => (
  <div>
    <ResHeader>CONTACT US</ResHeader>
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Field name="firstName" label="First Name" component={Input} type="text" />
          <Field name="lastName" label="Last Name" component={Input} type="text" />
        </Form.Group>
        <Field name="email" label="Email" component={Input} type="email" />
        <Field name="message" label="Message" component={Message} type="text" />
        <Button type="submit" primary>Submit</Button>
      </Form>
    </FormWrapper>
  </div>
)

export default reduxForm({
  form: 'contact',
  onSubmit(values, _, props) {
    console.log(values)
  }
})(ContactForm);
