import { Component } from 'react'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'

class App extends Component {
  state = {
    selected: undefined,
  }

  setSelected = (value) => this.setState({ selected: value })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  selected={this.state.selected}
                  setSelected={this.setSelected}
                />
              </Col>
              <Col className="my-auto">
                <Detail selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
