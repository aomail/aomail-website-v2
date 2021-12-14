import { visuallyHidden } from '@theme/utils/utilityClasses'
import { store } from '@lib/little-state-machine/store'

export interface NetlifyWorkaroundFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formFields: { [k: string]: any }
  name: string
  withUserData?: boolean
}

export function NetlifyWorkaroundForm({
  formFields,
  name,
  withUserData = true,
}: NetlifyWorkaroundFormProps): JSX.Element {
  const fields = withUserData
    ? { ...formFields, ...store.userData }
    : formFields
  return (
    <form
      method="POST"
      data-netlify="true"
      name={name}
      aria-hidden="true"
      netlify-honeypot="bot-field"
      hidden
      className={visuallyHidden()}
    >
      <input
        type="hidden"
        hidden
        aria-hidden="true"
        name="form-name"
        value={name}
      />
      {Object.entries(fields).map(([name, value]) => (
        <input
          type="hidden"
          hidden
          aria-hidden="true"
          tabIndex={-1}
          name={name}
          value={value || ''}
          key={name}
        />
      ))}
    </form>
  )
}
