import { defineComponent, h, type Component, type DefineComponent } from 'vue'
import { Field, type FieldContext } from 'vee-validate'

export function WithHandleError<T = DefineComponent>(component: T): T {
  return defineComponent({
    props: {
      name: {
        type: String,
        required: true
      }
    },
    setup() {
      return ({ $props, $attrs }: DefineComponent) =>
        h(
          Field,
          { name: $props.name },
          {
            default: ({ field, errors }: { field: FieldContext; errors: string[] }) =>
              h(component as Component, {
                ...field,
                ...$attrs,
                errorMessages: errors
              })
          }
        )
    }
  }) as T
}
