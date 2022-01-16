import './style.scss';
import Category from '../../../components/category';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from "react"
import productServices from "../../../services/productServices";
import { useDispatch, useSelector } from 'react-redux';
import categoryServices from '../../../services/categoryServices'


const ProductMenu = () => {
 let listMenu = ['Best selling products', 'Kitchen ', ' Meat and fish ', 'Special nutrition', 'Pharmacy','Baby'];
 const menu = [
    {
        titleProduct:"Category menu", 
        decription:"Space for a small product description ",
        price: "1.48 USD",
        sale: "48.56"
    },
    {
        titleProduct:"Category menu", 
        decription:"Space for a small product description ",
        price: "1.48 USD",
        sale: "48.56"
    },
    {
        titleProduct:"Category menu", 
        decription:"Space for a small product description ",
        price: "1.48 USD",
        sale: "48.56"
    },
 ];
 const { loginStatus} =  useSelector( store => store.auth);

    const dispatch = useDispatch()
    const[product ,setProducts] = useState([])
    useEffect ( () =>{
        (async () => {  
            const res = await productServices.list()
            setProducts(res.data)
        })()
    }, []);
    const[IsCategory ,setIsCategorys] = useState([])
        useEffect ( () =>{
            (async () => {  
                const res = await categoryServices.listCategory();
                console.log(res)
                setIsCategorys(res);
                dispatch({
                    type: 'GETCATEGORY',
                    payload: res
                })
            })()
        }, [])

    return (
        <div className="product__container">
            <div className="item__product card__menu">
                <Category titleFirst="Best selling products" listMenu={IsCategory.slice(1,5)}/>
            </div>
            <div className="card__product">
                {product.map( (e,i) =>  <div className="item__product "> 
                <ProductCard titleProduct={e.name}  price={e.discount} sale={e.discount_rate} id={e._id} img={e.images[0].medium_url}
                key={i}/></div>)}

            </div>
        </div>
    );
}
export default ProductMenu;