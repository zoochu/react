//Main.js
import {useState} from "react";
import Corona from "../data/corona19.json";
import Graph from "./Graph.js";

export default function Main(){
    let subject = [];
    let [data,setData] = useState(Corona.DATA);

    for(let tit in Corona.DESCRIPTION){
        subject.push(Corona.DESCRIPTION[tit]);
    }    
    function dataChange(e){
        setData(
            Corona.DATA.filter(day => (
                day['s_vc_dt'] == e.target.value
            ))
        );
    }

   
    return(
        <> 
            <section className="second">
                <h2>코로나 예방접종 현황</h2>
                <div>
                    <select id="day" onChange={ dataChange}>
                    {
                        Corona.DATA.map(function(data,k){
                            return (
                                <option key={k}>
                                    {data['s_vc_dt']}
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
                            return (
                                <tr key={k}>   
                                    <td>{dataView['scd_inc']}</td>
                                    <td>{dataView['fir_inc1']}</td>
                                    <td>{dataView['fir_inc_rate']}</td>
                                    <td>{dataView['scd_inc1']}</td>
                                    <td>{dataView['s_vc_dt']}</td>
                                    <td>{dataView['scd_inc_rate']}</td>
                                    <td>{dataView['fir_inc']}</td>
                                    <td>{dataView['fir_sub']}</td>
                                </tr>
                            );
                        })
                    }       
                </tbody>
                </table>
            </section>
            <Graph d={data}/>
        </>
    );
}