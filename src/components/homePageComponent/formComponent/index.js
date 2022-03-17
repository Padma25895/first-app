import {React,useState, useEffect} from 'react'

function FormSection(props) {
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productImage, setProductImage] = useState("")
  const [productList, setProductList] = useState([])


  const handleSubmit = () => {
    console.log(productList, 'test')
    const product = {
      name : productName,
      price : productPrice,
      description : productDescription,
      image : productImage
    }

    productList.push(product)
    props.parentList(productList)
    setProductName("")
    setProductPrice("")
    setProductDescription("")
    setProductImage("")
  }
  useEffect((product) => {
    props.Editproduct(console.log(product));
  })
  
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