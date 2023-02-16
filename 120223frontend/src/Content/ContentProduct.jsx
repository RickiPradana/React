import { useContext, useEffect, useState } from "react";
import "./ContentProduct.css";
import { ThemeContext } from "../ThemeContext";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from 'react-modal';

const ContentProduct = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  const { DarkTheme } = useContext(ThemeContext);

  const customStyles = {
    content: {
      // top: '1%',
      left: '30%',
      right: '30%',
      // bottom: 'auto',
      // marginRight: '-50%',
      // transform: 'translate(-1%, -1%)',
    },
  };

  // Modal Add
  const [modalAddIsOpen, setAddIsOpen] = useState(false);
  const openAddModal = () => {
    setAddIsOpen(true);
  }
  const closeAddModal = () => {
    setAddIsOpen(false);
  }

  // Modal Edit
  // const [modalEditIsOpen, setEditIsOpen] = useState(false);
  // const openEditModal = () => {
  //   setEditIsOpen(true);
  // }
  // const closeEditModal = () => {
  //   setEditIsOpen(false);
  // }

  // Tambah
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ setMsg] = useState("");
  const navigate = useNavigate();
  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        name: name,
        price: price,
      });
      setAddIsOpen(false);
      navigate("/products");
      getProducts();
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  // Edit
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [msg] = useState("");
  // const navigate = useNavigate();
  // const { id } = useParams();
  // useEffect(() => {
  //   const getProductById = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/products/${id}`
  //       );
  //       setName(response.data.name);
  //       setPrice(response.data.price);
  //     } catch (error) {
  //       if (error.response) {
  //         setMsg(error.response.data.msg);
  //       }
  //     }
  //   };
  //   getProductById();
  // }, [id]);
  // const updateProduct = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.patch(`http://localhost:5000/products/${id}`, {
  //       name: name,
  //       price: price,
  //     });
  //     navigate("/products");
  //   } catch (error) {
  //     if (error.response) {
  //       setMsg(error.response.data.msg);
  //     }
  //   }
  // };

  return (
    <div className={`content ${DarkTheme && "dark"}`}>
      <div>
        <button className="btnaddmodal" onClick={openAddModal}>Add new</button>
        <Modal
          isOpen={modalAddIsOpen}
          // onAfterOpen={afterOpenAddModal}
          onRequestClose={closeAddModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="contentmodal">
            <form onSubmit={saveProduct}>
            <div className="form-group">
                <h1>Add Product</h1>
              </div>
              <div className="form-group">
                <label>Product Name</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  // className="inputedit"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Product Name"
                  required
                />

              </div>
              <div className="form-group">
                <label>Price</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  // className="inputedit"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                  required
                />
              </div>
              <button className="buttonsaveproduct" type="submit">Submit</button>
            </form>
          </div>
        </Modal>
        {/* <button className="btnaddmodal" onClick={openEditModal}>Edit</button>
        <Modal
          isOpen={modalEditIsOpen}
          // onAfterOpen={afterOpenAddModal}
          onRequestClose={closeEditModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="contentmodal">
            <form onSubmit={updateProduct}>
              <div className="form-group">
                <h1>Edit Product</h1>
              </div>
              <div className="form-group">
                <label for="fname">Product Name</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Product Name"
                  required
                />

              </div>
              <div className="form-group">
                <label for="fname">Price</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="input"
                  value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                  required
                />
              </div>
              <button className="buttonsaveproduct" type="submit">Update</button>
            </form>
          </div>
        </Modal> */}
      </div>
      <p className="section-title">Table Product</p>
      <div className="txt-head">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.uuid}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.user.name}</td>
                <td>
                  <NavLink
                    to={`/products/edit/${product.uuid}`}
                    className="NavLinkProductEdit"
                  >
                    Edit
                  </NavLink>
                  {" "}
                  <NavLink
                    onClick={() => deleteProduct(product.uuid)}
                    className="NavLinkProductHapus"
                  >
                    Hapus
                  </NavLink>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentProduct;
