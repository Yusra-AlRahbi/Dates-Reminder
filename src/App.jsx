import { Button, Col, Container, Row } from "react-bootstrap";
import {data} from "./data"
function App() {
  return (
    <>
      <div>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col sm="8" className="">
              لديك {data.length} مواعيد اليوم
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="8" className="">
              <div className="rectangle p-2">
                {data.length
                  ? data.map((item) => {
                      return (
                        <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                          <img
                            className="img-avtar "
                            alt="avtar"
                            src="../src/assets/img/avatar.png"
                          />
                          <div className="px-3">
                            <p className="d-inline fs-5">{item.name}</p>
                            <p className="fs-6">{item.date}</p>
                          </div>
                        </div>
                      );
                    })
                  : <h2 className="p-5 text-center">لا يوجد مواعيد اليوم</h2>}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center my-2">
            <Col sm="8" className="d-flex justify-content-between">
              <button className="btn-style p-2">مسح الكل</button>
              <button className="btn-style p-2">عرض البيانات</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
