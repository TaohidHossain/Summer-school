

const Card = ({ course }) => {
    return (
        <div className="card bg-base-100 bg-slate-600 text-neutral-content shadow-xl">
        <figure><img className="rounded-lg mt-4" src={ course.image }/></figure>
        <div className="card-body">
          <h2 className="card-title">
            { course.courseTitle }
          </h2>
            <p>${ course.price }</p>
            <p>{ course.teacher.username }</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{ course.category }</div>
          </div>
        </div>
      </div>
    )
}

export default Card;