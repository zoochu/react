// Company.js
import {useState} from "react";
import Test from "../data/corona.json";
import CorGraph from "./CorGraph.js";

export default function Company(){
    let subject = [];
    let [data,setData] = useState(Test.DATA);
    
    for(let tit in Test.DESCRIPTION){
        subject.push(Test.DESCRIPTION[tit]);
    }
    function dataChange(e){
        setData(
            Test.DATA.filter(day => (
                day['corona19_area'] == e.target.value
            ))
        );
    }

    return(
        
        <div className="third"> 
            <h2>코로나 확진현황</h2>
            <div>
                <select onChange={dataChange}>
                    {
                        Test.DATA.map(function(data,k){
                            return(
                                <option key={k}>
                                {data['corona19_area']}
                            </option>
                            )
                        })
                    }
                </select>
            </div>

            <table border="1">
            <thead>
                    <tr>
                        {
                        subject.map(function(tit,k){
                            return <th key={k}> {tit} </th>;
                        })            
                    }
                    </tr>
                </thead>
            <tbody>
                {
                    data.map(function(dataView,k){
                        return(
                            <tr key={k}>
                                <td>{dataView['corona19_leave_status']}</td>
                                <td>{dataView['corona19_idate']}</td>
                                <td>{dataView['corona19_corrective']}</td>
                                <td>{dataView['corona19_display_yn']}</td>
                                <td>{dataView['corona19_id']}</td>
                                <td>{dataView['corona19_contact_history']}</td>
                                <td>{dataView['corona19_date']}</td>
                                <td>{dataView['corona19_area']}</td>
                            </tr>    
                        )
                    })
                }
            </tbody>
            </table>
            <h3>코로나 확진자 그래프</h3>
            <CorGraph d={data}/>
        </div>
        
    );
}