export default function ProductCard(props) {
    console.log(props.name);
    
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name} />
            <p>{props.price}</p>
            <button>Buy Now</button>

        </div>
    )
}
