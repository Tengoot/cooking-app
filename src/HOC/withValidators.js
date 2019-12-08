import React from 'react';

export function withValidators(WrappedComponent) {
  return class extends React.Component {
    validateRequiredFields = (validationState, fieldState) => {
      return this.generateValidationState(
        validationState,
        fieldState,
        'Złe wartości pól',
        (value, _state) => ((value || value === '') && (value.length > 0)),
      );
    };

    validatePositiveNumbers = (validationState, fieldState) => {
      return this.generateValidationState(
        validationState,
        fieldState,
        'Wartości powinny być większe od 0',
        (value, _state) => (value && value > 0),
      );
    }

    validateValueLimits = (validationState, fieldState) => {
      return this.generateValidationState(
        validationState,
        fieldState,
        'Zbyt duże wartości',
        (value, state) => (value && value <= state.maxValue),
      );
    }

    validateSizeLimits = (validationState, fieldState) => {
      return this.generateValidationState(
        validationState,
        fieldState,
        'Za długie teksty',
        (value, state) => (value || value === '') && (value.length <= state.maxSize),
      );
    }

    validateImageExtension = (validationState, fieldState) => {
      return this.generateValidationState(
        validationState,
        fieldState,
        'Załadowano zły format pliku',
        (value, _state) => !!(value && /(\.jpg|\.jpeg|\.png|\.gif)$/i.test(value)),
      );
    }

    validatePassword = (validationState, fieldState) => {
      return this.generateValidationState(
        validationState,
        fieldState,
        'Za słabe hasło',
        (value, _state) => {
          return ((value || value === '') && value.length >= 8) && !([/[a-z]/, /[A-Z]/, /\d/, /\W/].map((regex) => regex.test(value)).includes(false));
        },
      )
    }

    validateEmail = (validationState, fieldState) => {
      return this.generateValidationState(
        validationState,
        fieldState,
        'Zły format email',
        (value, _state) => (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)),
      )
    }

    generateValidationState = (validationState, fieldState, errorMessage, validatingFunction) => {
      const newState = fieldState;
      const value = fieldState.value;
      const validation = validatingFunction(value, newState);

      newState.valid = validation;

      if (!validation && !validationState.message) {
        validationState.valid = false;
        validationState.message = errorMessage;
      }

      return(newState);
    }

    render() {
      return (
        <WrappedComponent
          validateRequiredFields={this.validateRequiredFields}
          validatePositiveNumbers={this.validatePositiveNumbers}
          validateValueLimits={this.validateValueLimits}
          validateSizeLimits={this.validateSizeLimits}
          validateImageExtension={this.validateImageExtension}
          validatePassword={this.validatePassword}
          validateEmail={this.validateEmail}
          {...this.props}
        />
      );
    }
  }
}
