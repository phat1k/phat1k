import IconLeft from './components/iconLeft';
import IconRight from './components/iconRight';
import Vector from '../../assets/img/Vector.svg'
import queryString from 'query-string'
import './style.scss';
import Freshnesecom from '../../assets/img/Freshnesecom.png';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import userService from '../../services/userServices';
import userReducer from '../../store/userReducer'
import {Link,} from 'react-router-dom'
import productServices from '../../services/productServices';

const SearchBar = () => {
        const {userinfo} = useSelector(store => store.user)
        const dispatch = useDispatch();
        const { login, statusLogin } =  useSelector(store => store.auth);
        const [isOpen, setIsOpen] = useState(false);
        
        const [formSearch, setFormSearch] = useState({search:""})
        const [error, seterror] = useState()
       
        const handleTitleClick = () => {
            setIsOpen(!isOpen);
        };
        useEffect( () =>{
            if(statusLogin){
                getUser()
            }
        }, [statusLogin])
    
        const getUser = async() => {
            let res = await userService.getinfo();
            if(res){
                    dispatch({
                        type: 'GETINFO',
                        payload: res.data
                    })
                // dispatch(userLogin)
            }
        }
        const logoutAcout = () => {
            dispatch({
                type: 'LOGOUT',
            })
            
        }
        const [filters, setfilters] = useState({
            name: "điện thoại"
        })
        const SubmitSearch = async (e) => {
            e.preventDefault();
            let obj = {};
            if (!formSearch.search) {
                obj.search = "vui lòng nhận Product bạn mún tìm kiếm"
            }
            if (Object.keys(obj).length === 0) {
                // call api
                const paramsString = queryString.stringify(filters)
                const res = await `http://cfd-reactjs.herokuapp.com/product?'${paramsString}`;
                console.log(`res`, res)
                    // if (!res || res.message) {
                    //     alert(res?.message || "Login error")
                    // } else {
                    //     const loginAction = {
                    //         type: "LOGIN",
                    //         payload: formSearch
                    //     }
                    //     dispatch(loginAction)
                    // }
            }
            seterror(obj);
            console.log(formSearch)
        }
        const inputSearch = (e) => {
                let name = e.currentTarget.name;
                let value = e.currentTarget.value;
                setFormSearch({
                ...formSearch, [name]: value,
            })
            console.log(value)
        }
        
        

        return (
        <div className="searchbar__container">
            <div><img src={Freshnesecom} alt="" /></div>
            <div className="search">
                <div className={`search__left ${isOpen ? "open" : "hide"}`}>
                    <label for="fname" onClick={handleTitleClick} >All categories <img src={Vector} alt="" /></label>
                    <div className="content">All categories
                        <br />
                                            All categories
                    </div>
                </div>
                <div className="search__right">
                    <input type="text"  name="search" placeholder="Search Products, categories ..." value={formSearch.username} onChange={inputSearch}></input>
                    {/* {error.search && <p>{error.search}</p>} */} <br />
                    {error?.search && <p className="errlogin">{error?.search}</p>}
                </div>
                <button onClick={SubmitSearch}>Search</button>
            </div>
            <div className="icon">
                { statusLogin && <button className="btn__lougout" onClick={logoutAcout}>logout</button>}
            <Link to="/login">
                <div style={{color: `${statusLogin ? "red" : "black"}` }}>
             <IconLeft color="red" />
            </div>
            </Link>
             {
                statusLogin ? <p>{userinfo?.email}</p> : ''
            } 
                <div className="icon-right"><IconRight /></div>
            </div>
        </div>
    );
}
export default SearchBar;