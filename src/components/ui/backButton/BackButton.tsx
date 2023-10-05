interface Iprops {
  callbackHandler: () => void,
  value: string
}
export default function BackButton(props: Iprops) {
  const { callbackHandler, value } = props;

  return (
    <button className="back-button" onClick={ () => callbackHandler() }>
      <i className="fa-solid fa-arrow-left"></i>{ value }
    </button>
  )
}