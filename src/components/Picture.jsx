import pictureStyle from"../sass/picture.module.scss"

const Picture = ({photographer, src}) => {
      
      
  return (
    <div className="mt-5">




      <div className="card gap-5" style={{width:"18rem"}}>
  <img src={src.large}  class={pictureStyle["card-img-top"]} alt={photographer} />
  <div className="card-body">
    <h5 className="card-title text-center">{photographer}</h5>

  </div>
</div>
      </div>



  )
}

export default Picture