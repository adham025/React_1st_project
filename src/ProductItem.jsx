export default function ProductItem({product, changePrice, deleteProduct}) {
  return (
<>
    <div className="col-md-4">
        <div className="card rounded shadow-sm" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.price}</p>
            <div className="d-flex justify-content-between">
            <button onClick={()=> changePrice(product.id)} className="btn btn-primary">
            Change Price
            </button>
            <button onClick={()=> deleteProduct(product.id)} className="btn btn-danger">
            Delete
            </button>
            </div>
          </div>
      </div>
    </div>
</>
  );
}

