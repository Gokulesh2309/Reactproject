import React,{useState,useEffect} from "react";

export default function SData(){
    
    const [userdata,setUserData] = useState({});
    
    const [result,setresult]=useState([])

    var final=""
    useEffect( async()=> {
        fetchuserdata().then(() => {
            let finalTable = document.getElementById('finalTable');
            for(let [key, value] of Object.entries(result)){
                if(value['name'])
                    finalTable.innerHTML += " <tr><td> "+value['name']+" </td><td> "+value['contact']+" </td><td> "+value['email']+" </td><td> "+value['address']+" </td></tr> ";
            }
        })
    },[]);

    async function fetchuserdata(){
        const response = await fetch("http://dry-bayou-99944.herokuapp.com/profiles")
        const jsondata = await response.json();
        setUserData(jsondata);
        jsondata.forEach((entry) => {
            result.push(entry);
        })
        //console.log(result);
    };

    return (
        <div>
            <table id="finalTable">

            </table>
        </div>
    )
}