import {CardTitle, Container} from "react-bootstrap"
import { Card } from "react-bootstrap"
import {Row}from "react-bootstrap"
import {Col} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function(){
    return(
        <>
           <Container>
              <Row>
                 <Col>
                   <Card>
                      <CardTitle>sign </CardTitle>
                        <Form>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                      <Button variant="primary" type="submit">
                       Submit
                    </Button>
                     </Form>
                   </Card>
                 </Col>
              </Row>
            </Container>
        </>
    )
}