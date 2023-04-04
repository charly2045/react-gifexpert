
export const GifItem = ({ title, url}) => {
  
  return (
    <div className="card-grid">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}
