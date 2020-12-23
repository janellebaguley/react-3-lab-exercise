
 const Person = (props) => {
    const {name, title, city, employer, id, favoriteMovies, country } = props.person
    const {data, i} = props
    const lastI = data.length - 1
    return (
    <div>
       <section type= 'container'>
          <h3> {name.first} {name.last}</h3>
       </section>
       <section>From: {city}, {country}</section>
       <section>Job Title: {title}</section>
       <section>Employer: {employer}</section>
       <section>Favorite Movies: </section>
       <ul>1. {favoriteMovies[0]}</ul>
       <ul>2. {favoriteMovies[1]}</ul>
       <ul>3. {favoriteMovies[2]}</ul>
       <button className ={i === 0 ? 'dec-none' : null}
        onClick={props.dec}
        > previous</button>
       <button className={i === lastI ? 'inc-none' : null}
       onClick={props.inc}
       >next</button>
    </div>
)}

export default Person