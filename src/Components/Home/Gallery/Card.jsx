

const Card = ({ course }) => {
    return (
        <div className="card bg-base-100 bg-neutral text-neutral-content shadow-xl">
        <figure><img src={ course.photo }/></figure>
        <div className="card-body">
          <h2 className="card-title">
            { course.name }
          </h2>
            <p>${ course.price }</p>
            <p>{ course.rating }</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{ course.category }</div>
          </div>
        </div>
      </div>
    )
}

export default Card;