
interface Iprops {
  callbackHandler: () => void
}
export default function Button(props: Iprops) {
  const { callbackHandler } = props;

  return (
    <button onClick={() => callbackHandler()}>back</button>
  )
}