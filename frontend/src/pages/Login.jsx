import Header from '../components/Header';
import {useFormik} from 'formik';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import loginImage from '../assets/image/login.png'
import {loginVolidateSchema} from '../schemas';


const onSubmit = () => {
  console.log('Login form submited');
}
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginVolidateSchema,
    onSubmit,
  });

  console.log('formik.errors: ', formik.errors);

  console.log(formik)
  return (
    <>
      <Header />
      <Container container-fluid mt-5>
        <Row justify-content-center align-content-center style={{'height': '93vh'}}>
          <Col col-8 col-md-8 col-xxl-6 className='d-flex justify-content-center' style={{'alignSelf': 'center'}}>
            <Card style={{ 'width': '50rem'}} className="shadow-sm">
              <Card.Body>
                <Row>
                  <Col style={{'textAlign': 'center',  'alignSelf': 'center'}}>
                    <Card.Img src={loginImage} variant='center' style={{'width': '17rem'}}/>
                  </Col>
                  <Col>
                    <h2>Войти</h2>
                    <Form onSubmit={formik.handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          value={formik.values.email}
                          type="email"
                          onChange={formik.handleChange}
                          name="email"
                          id="email"
                          placeholder='Enter email'
                          onBlur={formik.handleBlur}
                          className={ formik.errors.email && formik.touched.email ? 'input-error' : ''}
                        />
                        <Form.Text className="text-muted">
                          {
                            formik.errors.email && formik.touched.email
                              ? formik.errors.email
                              : 'We\'ll never share your email with anyone else.'
                          }
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          value={formik.values.password}
                          type='password'
                          name='password'
                          id='password'
                          placeholder='Password'
                          onChange={formik.handleChange}
                          className={ formik.errors.password && formik.touched.password ? 'input-error' : ''}
                        />
                        {
                          formik.errors.password && formik.touched.password
                            ? (<Form.Text className="text-muted">{formik.errors.password}</Form.Text>)
                            : ''
                        }
                      </Form.Group>
                      <Button disabled={formik.isSubmitting} variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <div className="text-center">
                  <span>Нет аккаунта? </span>
                  <a href='/'>Зарегестринуйся</a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  )
};
export default Login;
