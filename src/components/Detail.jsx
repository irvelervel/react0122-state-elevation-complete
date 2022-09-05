import { Alert } from 'react-bootstrap'
import React from 'react'

const Detail = (props) => (
  <Alert variant="success">{props.selected || 'No value selected'}</Alert>
)

export default Detail
