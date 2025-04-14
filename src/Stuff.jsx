
function Stuff({name = "Employee Man", title="Worker"}){
    return(
        <div className="mycard">
            <img className="cardpic" src="https://placehold.co/200x200"></img>
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    );
}



export default Stuff