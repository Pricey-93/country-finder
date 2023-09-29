import "./Button.css";

interface Iprops {
  callbackHandler: () => void,
  value: string
}
export default function Button(props: Iprops) {
  const { callbackHandler, value } = props;

  return (
    <button onClick={() => callbackHandler()}>{ value }</button>
  )
}