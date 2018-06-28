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
    let innerHTML
    if (url.indexOf('www.youtube.com') !== -1) {
      const _url = new URL(url)
      const getVideoHash = _url.searchParams.get('v')
      innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${getVideoHash}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
    }
    if (url.indexOf('youtu.be') !== -1) {
      const _url = new URL(url)
      const getVideoHash = _url.pathname
      innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${getVideoHash}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
    }
    return (
      <EmbededVideoBlock>
        <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
      </EmbededVideoBlock>
    )
  }
}
