import React from 'react';
import glamorous from 'glamorous';
import { ResHeader } from '../../styles/style-index';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendMail } from '../../actions/mail';

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
      onChange={(param,data) => {props.input.onChange(data.value)}}
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



const ContactForm = ({ handleSubmit, reset, dispatch }) => {

  const submitForm = (props) => { dispatch(sendMail(props)) }

  return (
    <div>
      <ResHeader style={{ paddingTop: '4em' }}>CONTACT US</ResHeader>
      <FormWrapper>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Form.Group widths='equal'>
            <Field name="firstName" label="First Name" component={Input} type="text" />
            <Field name="lastName" label="Last Name" component={Input} type="text" />
          </Form.Group>
          <Field name="email" label="Email" component={Input} type="email" />
          <Field name="message" label="Message" component={Message} type="text" />
          <div style={{ textAlign: 'center'}} >
            <Button type="submit" primary>Submit</Button>
            <Button type="button" secondary onClick={reset}>Reset</Button>
          </div>
        </Form>
      </FormWrapper>
    </div>
  )

}



export default reduxForm({
  form: 'contact',
})( connect()(ContactForm) );
