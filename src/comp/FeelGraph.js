import {useEffect, useState} from "react";
import "../App.css";
import { ResponsiveLine } from '@nivo/line';
import  datas from "../data/feelgraph.json";

export default function FeelGraph({d}){
    let [gData,setGdata] = useState(d);
    // console.log(d[0]['corona'])

    useEffect(()=>{
        setGdata (
            [
                {"year":"2020년","month":"1월","corona":0},
                {"year":"2020년","month":"2월","corona":2},
                {"year":"2020년","month":"3월","corona":3},
                {"year":"2020년","month":"4월","corona":2},
                {"year":"2020년","month":"5월","corona":0},
                {"year":"2020년","month":"6월","corona":3},
                {"year":"2020년","month":"7월","corona":0},
                {"year":"22020년","month":"8월","corona":17},
                {"year":"2020년","month":"9월","corona":3},
                {"year":"2020년","month":"10월","corona":1},
                {"year":"2020년","month":"11월","corona":54},
                {"year":"2020년","month":"12월","corona":77},
                {"year":"2021년","month":"1월","corona":34},
                {"year":"2021년","month":"2월","corona":19},
                {"year":"2021년","month":"3월","corona":28},
                {"year":"2021년","month":"4월","corona":24},
                {"year":"2021년","month":"5월","corona":77},
                {"year":"2021년","month":"6월","corona":175},
                {"year":"2021년","month":"7월","corona":78},
                {"year":"2021년","month":"8월","corona":36}
                ]
        );
    },[d]);

    console.log(gData)
    return(
        <div className="line">
        <ResponsiveLine
        data={gData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
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