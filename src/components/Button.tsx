interface Props {
  label: string
  click?: () => void
}

const Button = (props: Props) => {
  const { label, click } = props
  return (
    <button className="bg-backgroundButton rounded-lg py-2.5 px-4 text-white hover:bg-cyan-500" onClick={click}>{label}</button>
  )
}
export default Button
