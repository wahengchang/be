import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const EmbededVideoBlock = styled.div`
  text-align: center;
`

export default class AtomicEmbedComponent extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }
  render() {
    const { url } = this.props.data
    const innerHTML = `${url}`
    return (
      <EmbededVideoBlock>
        <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
      </EmbededVideoBlock>
    )
  }
}
