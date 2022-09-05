import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

// table riceve selected NON più dal proprio stato,
// ma da una prop con lo stesso nome (this.props.selected)

// Table riceve ora due prop:
// selected <-- il valore salvato nello stato di App ('First', 'Second', o 'Third')
// setSelected <-- il metodo che permette a Table di cambiare lo stato di App

class Table extends Component {
  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'First' })}
            // setState qui cambia il valore dello stato di Table!
            // dovremmo cliccando gli elementi cambiare lo stato del padre,
            // cambiare lo stato di App...
            onClick={(e) => this.props.setSelected('First')}
            className={this.checkSelected('First')}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.setSelected('Second')}
            className={this.checkSelected('Second')}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.setSelected('Third')}
            className={this.checkSelected('Third')}
          >
            Third
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Local state is {this.props.selected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
