import Header from '../components/Header';
import {Container, Row, Col, Image} from 'react-bootstrap';
import notFoundImg from '../assets/image/404.png'

const styles = {
  container: {
    'marginTop': '50px'
  },
  row: {
    // 'height': '96vh',
    'alignItems': 'center',
    'justifyContent': 'center',
  },
  img: {
    'width': '100%',
  },
  text: {
    'fontSize': '16rem',
    'color': '#feaaa8',
  },
  link: {
    'textDecoration': 'none',
    'textAlign': 'center',
    'fontSize': '1.4rem',
  },
};

const NotFound = () => {
  return (
    <>
      <Header />
      <Container style={styles.container}>
        <Row style={styles.row}>
          <Col  xs={6} style={styles.text}>404</Col>
          <Col  xs={6}>
            <Image src={notFoundImg} style={styles.img}/>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col xs={4}>
            <a href='/' style={styles.link}>Вернуться на главную</a>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default NotFound;
