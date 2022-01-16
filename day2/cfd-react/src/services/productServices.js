import {API} from '../constant/api'
import queryString from 'query-string'
import { useSelector } from 'react-redux'


const productServices =  {
    list(){
        // const {filters} = useSelector(store => store.card)
        // const paramsString = queryString.stringify(filters)
        return fetch(`${API}/product?`).then(res => res.json())
    }
}  
export default productServices

