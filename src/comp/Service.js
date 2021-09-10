import {useState} from "react";
import Feel from "../data/feel.json";
import FeelGraph from "./FeelGraph";


export default function Service(){
    let subject=[];
    let [data,setData] = useState(Feel.DATA);

    for(let tit in Feel.feel){
        subject.push(Feel.feel[tit]);
    }
    function dataChange(e){
        setData(
            Feel.DATA.filter(day => (
                day['month'] == e.target.value
            ))
        );
    }

    let feelDat= [];
    Feel.DATA.forEach(function(c){
        feelDat.push( c['corona'] );
    });

    
    return(
        <> 
        <div className="fourth">
        <h2>강원도 춘천시_코로나 19 확진자 월별</h2>
            <select onChange={dataChange}>
                {
                    Feel.DATA.map(function(data,k){
                        return(
                            <option key={k}>
                                {data['year']},
                                {data['month']}
                            </option>
                        )
                    })
                }

            </select>
            
                <table border="1">
                    <thead>
                        <tr>
                            {
                                subject.map(function(tit,k){
                                    return <th key={k}> {tit} </th>
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map(function(dataView,k){
                                return(
                                    <tr key={k}>
                                        <td>{dataView['year']}</td>
                                        <td>{dataView['month']}</td>
                                        <td>{dataView['corona']}</td>

                                    </tr>    
                                )
                            })
                        }
                    </tbody>



                </table>

        <FeelGraph d={feelDat}/>
        </div>
        </>
    );
        }
     