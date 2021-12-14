import { Flex, InputLabel, RadioButton } from '@atoms'
import { ButtonSelectType } from '../types'

export type ButtonSelectProps = ButtonSelectType

export function ButtonSelect({
  label,
  field_id,
  select_options,
  defaultValue,
  register,
}: ButtonSelectType): JSX.Element {
  return (
    <>
      <InputLabel as="label" htmlFor={field_id}>
        {label}
      </InputLabel>
      <Flex wrap css={{ mt: '$3', pb: '$3' }}>
        {select_options.map((option) => (
          <RadioButton
            id={option.id}
            name={field_id}
            key={option.id}
            {...register(field_id)}
            value={option.label}
            defaultChecked={defaultValue === (option.value || option.label)}
          >
            {option.label}
          </RadioButton>
        ))}
      </Flex>
    </>
  )
}
