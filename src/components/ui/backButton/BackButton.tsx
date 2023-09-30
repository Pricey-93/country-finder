import "./BackButton.css";

interface Iprops {
  callbackHandler: () => void,
  value: string
}
export default function BackButton(props: Iprops) {
  const { callbackHandler, value } = props;

  return (
    <button onClick={ () => callbackHandler() }>{ value }</button>
  )
}