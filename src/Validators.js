function generateValidationState(validationState, fieldState, errorMessage, validatingFunction) {
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

export function validateRequiredFields(validationState, fieldState) {
  return generateValidationState(
    validationState,
    fieldState,
    'Złe wartości pól',
    (value, _state) => ((value || value === '') && (value.length > 0)),
  );
};

export function validatePositiveNumbers(validationState, fieldState) {
  return generateValidationState(
    validationState,
    fieldState,
    'Wartości powinny być większe od 0',
    (value, _state) => (value && value > 0),
  );
}

export function validateValueLimits(validationState, fieldState) {
  return generateValidationState(
    validationState,
    fieldState,
    'Zbyt duże wartości',
    (value, state) => (value && value <= state.maxValue),
  );
}

export function validateSizeLimits(validationState, fieldState) {
  return generateValidationState(
    validationState,
    fieldState,
    'Za długie teksty',
    (value, state) => (value || value === '') && (value.length <= state.maxSize),
  );
}

export function validateImageExtension(validationState, fieldState) {
  return generateValidationState(
    validationState,
    fieldState,
    'Załadowano zły format pliku',
    (value, _state) => !!(value && /(\.jpg|\.jpeg|\.png|\.gif)$/i.test(value)),
  );
}

export function validatePassword(validationState, fieldState) {
  return generateValidationState(
    validationState,
    fieldState,
    'Za słabe hasło',
    (value, _state) => {
      return ((value || value === '') && value.length >= 8) && !([/[a-z]/, /[A-Z]/, /\d/, /\W/].map((regex) => regex.test(value)).includes(false));
    },
  )
}

export function validateEmail(validationState, fieldState) {
  return generateValidationState(
    validationState,
    fieldState,
    'Zły format email',
    (value, _state) => (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)),
  )
}
