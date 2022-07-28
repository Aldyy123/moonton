import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'file']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    isError: PropTypes.bool,
    placeholder: PropTypes.string,
}

export default function Input({
    type = 'text',
    name,
    value,
    className = '',
    variant = 'primary',
    autoComplete,
    required,
    isFocused,
    handleChange,
    isError,
    placeholder,
    defaultValue,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && 'input-error'} input-${variant} ${className}`}
                ref={input}
                defaultValue={defaultValue}
                placeholder={placeholder}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
