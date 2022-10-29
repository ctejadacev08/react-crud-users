
import { Col, Container, Row } from 'react-bootstrap'

const Content = ({children}) => {
  return (
    <Container fluid className="mt-4">
        <Row className="justify-content-center">
            <Col xs={8}>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default Content
