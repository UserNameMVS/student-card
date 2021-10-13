import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ children, visible, setVisible }) => {
  return (
    <div className={'modal' + (visible ? ' active' : '')} onClick={() => setVisible(false)}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired
}

export default Modal
