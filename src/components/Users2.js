import axios from 'axios'
import{useEffect,useState} from 'react'


function Users(){
   
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=1')
        .then(res=>{
alert('success')
console.log(res.data)
setData(res.data.data)
        })
        .catch(error=>{
            alert('something went wrong')
        })
    },[])
    return(
        <div>List of Users:
            <table>
<tr>
    <th>ID</th>
    <th>Email</th>
    <th>FirstName</th>
    <th>LastName</th>
</tr>
{
                data.length > 0 &&
                data.map((item)=>{ 
                    return (
                        <tr>
<td>(item.id)</td>
<td>(item.email)</td>
<td>(item.first_name)</td>
<td>(item.last_name)</td>
                        </tr>
                    
                )}
               )
            }
 
            </table>
           
        </div>
    )
}
export default Users