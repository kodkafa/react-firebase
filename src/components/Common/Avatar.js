import React from 'react';
import StorImage from './StorImage'
import avatar from "styles/img/avatar.svg"

class Avatar extends React.Component {

  checkSrc(src) {
    return (!src || src === 'undefined' || src === 'undefined.png' || typeof src === 'object')
  }

  render() {
    console.log('this.checkSrc(this.props.src)', this.checkSrc(this.props.src), this.props.src)
    const src = this.checkSrc(this.props.src) ? avatar : null;
    return <StorImage {...this.props} default={src}/>
  }
}

export default React.forwardRef((props, ref) =>
  (
    <Avatar {...props} forwardref={ref}/>
  )
)
