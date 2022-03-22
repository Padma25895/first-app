import {React,useState, useEffect} from 'react'

function FormSection(props) {
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productImage, setProductImage] = useState("")
  const [productList, setProductList] = useState([])
  console.log(productList)
  const handleSubmit = () => {
    const product =
     {
      name : productName,
      id:Math.random(),
      price : productPrice,
      description : productDescription,
      image : productImage
    }
    console.log(product)
    productList.push(product)
    
    let updateData = productList.find((ele) => ele.id === product.id);
     updateData=product;
     console.log(updateData);


    props.parentList(productList)
    setProductName("")
    setProductPrice("")
    setProductDescription("")
    setProductImage("")
  }
  useEffect( () => {
    setProductName(props.productEdit.name)
    setProductPrice(props.productEdit.price)
    setProductDescription(props.productEdit.description)
    setProductImage(props.productEdit.image)
  },[props.productEdit])
  
  return (
    <div>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" value={productName} className="form-control" onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="text" value={productPrice} className="form-control" onChange={(e) => setProductPrice(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" value={productDescription} className="form-control" onChange={(e) => setProductDescription(e.target.value)}  />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Image</label>
          <input type="file" value={productImage} className="form-control" onChange={(e) => setProductImage(e.target.value)}  />
        </div>
        
        <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default FormSection