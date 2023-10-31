import { AuthInputContainer, Input } from './styles'
import { IconProps } from 'phosphor-react'
import { ErrorMessage, FieldProps } from 'formik'

interface InputFieldProps extends FieldProps {
  placeholder: string
  icon: IconProps
}

export function AuthInput({
  field,
  form: { touched, errors },
  placeholder,
  icon,
  ...props
}: InputFieldProps) {
  return (
    <AuthInputContainer>
      <div className="inputBox">
        <>{icon}</>
        <Input
          {...field}
          {...props}
          placeholder={placeholder}
          haserror={touched[field.name] && errors[field.name]}
        />
      </div>
      <ErrorMessage name={field.name} component="div" className="errorMsg" />
    </AuthInputContainer>
  )
}
