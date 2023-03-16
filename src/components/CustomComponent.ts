import { h } from 'vue'
interface Props {
  title: string
}
export default function CustomComponent(props: Props, context: any) {
  const slotDefault = context.slots.default ? context.slots.default() : h('p', 'Default Slot')
  return h('fieldset', { style: { padding: '1rem' } }, [h('legend', props.title), slotDefault])
}
