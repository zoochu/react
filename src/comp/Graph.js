 //comp > Graph.js
 import {useEffect, useState} from "react";
 import "../App.css";
 import { ResponsiveBar } from '@nivo/bar';
 
 export default function Graph({d}){
     let [gData,setGdata] = useState(d);
     //1차 접종자 - fir_inc, fir_inc1
     //2차 접종자 - scd_inc, scd_inc1    
     useEffect(()=>{
         setGdata (
             [
                 {
                     "country": "1차 접종자",
                     "hot dog": d[0]['fir_inc'],
                     "burger": d[0]['fir_inc1']
                 },
                 {     
                     "country": "2차 접종자",
                     "hot dog": d[0]['scd_inc'],
                     "burger": d[0]['scd_inc1']
                 }
             ]
         );
     },[d]);
     
 
     return(
         
         <div className="grap">
             <ResponsiveBar
                 data={gData}
                 keys={[ 'hot dog','burger']}
                 indexBy="country"
                 margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                 padding={0.3}
                 valueScale={{ type: 'linear' }}
                 indexScale={{ type: 'band', round: true }}
                 valueFormat={{ format: '', enabled: false }}
                 colors={{ scheme: 'nivo' }}
                 defs={[
                     {
                         id: 'dots',
                         type: 'patternDots',
                         background: 'inherit',
                         color: '#38bcb2',
                         size: 4,
                         padding: 1,
                         stagger: true
                     },
                     {
                         id: 'lines',
                         type: 'patternLines',
                         background: 'inherit',
                         color: '#eed312',
                         rotation: -45,
                         lineWidth: 6,
                         spacing: 10
                     }
                 ]}
                 fill={[
                     {
                         match: {
                             id: 'fries'
                         },
                         id: 'dots'
                     },
                     {
                         match: {
                             id: 'sandwich'
                         },
                         id: 'lines'
                     }
                 ]}
                 borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                 axisTop={null}
                 axisRight={null}
                 axisBottom={{
                     tickSize: 5,
                     tickPadding: 5,
                     tickRotation: 0,
                     legend: '코로나 예방접종 현황',
                     legendPosition: 'middle',
                     legendOffset: 32
                 }}
                 axisLeft={{
                     tickSize: 5,
                     tickPadding: 5,
                     tickRotation: 0,
                     legend: 'food',
                     legendPosition: 'middle',
                     legendOffset: -40
                 }}
                 labelSkipWidth={12}
                 labelSkipHeight={12}
                 labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                 legends={[
                     {
                         dataFrom: 'keys',
                         anchor: 'bottom-right',
                         direction: 'column',
                         justify: false,
                         translateX: 120,
                         translateY: 0,
                         itemsSpacing: 2,
                         itemWidth: 100,
                         itemHeight: 20,
                         itemDirection: 'left-to-right',
                         itemOpacity: 0.85,
                         symbolSize: 20,
                         effects: [
                             {
                                 on: 'hover',
                                 style: {
                                     itemOpacity: 1
                                 }
                             }
                         ]
                     }
                 ]}
              />
         </div>
     );
 }
 