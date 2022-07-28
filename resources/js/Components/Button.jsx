import React from 'react';
import PropTypes from 'prop-types'

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'reset', 'destroy', 'button']),
    className: PropTypes.string,
    processing: PropTypes.bool,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['success', 'light-outline', 'warning', 'danger', 'white-outline']),
}

export default function Button({ type = 'submit', className = '', processing, children, variant = 'primary' }) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${processing && 'opacity-30'} btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
