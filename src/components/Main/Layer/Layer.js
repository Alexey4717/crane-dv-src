import cn from 'classnames'

export const Layer = (props) => {
  let classnames = cn(props.layerNum, 'container')
  return (
    <div className={classnames}>
      <img className={props.classImg} src={props.src} alt="crane" />
    </div >
  )
}