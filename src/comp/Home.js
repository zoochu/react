// Home.js


export default function Home(){

    return(
        <div className="first">
           <h2 className="title"> 코로나 바이러스 감염증-19</h2>
            <p className="mean"><h3>정의</h3>  2019년 12월 중국 우한에서 처음 발생한 이후 중국 전역과 전 세계로 확산된, 새로운 유형의 코로나바이러스(SARS-CoV-2)에 의한 호흡기 감염질환이다. 코로나바이러스감염증-19는 감염자의 비말(침방울)이 호흡기나 눈·코·입의 점막으로 침투될 때 전염된다. 감염되면 약 2~14일(추정)의 잠복기를 거친 뒤 발열(37.5도) 및 기침이나 호흡곤란 등 호흡기 증상, 폐렴이 주증상으로 나타나지만 무증상 감염 사례 빈도도 높게 나오고 있다.</p>
            <table border="1" className="chart" >
                <tr>
                    <td><b>외국어표기</b></td> 
                    <td>corona virus disease 19</td>
                    <td>COVID-19</td>
                </tr>
                <tr>
                    <td><b>최초 발생</b></td> 
                    <td>2019년 12월</td>
                    <td>중국 후베이성 우환</td>
                </tr>
                <tr>
                    <td><b>질병 분류</b></td> 
                    <td>법정감염병:제 1급 감염병 신종감염병증후군</td>
                    <td>질병코드:U07.1</td>
                </tr>
                <tr>
                    <td><b>병원체</b></td> 
                    <td>Servere Acute Respiratory Syndrome-Coronavirus-2</td>
                    <td>Coronaviriadae family, Betacoronavirus genus Sarbecovirus subgenus에 속함</td>
                </tr>
                <tr>
                    <td><b>잠복기</b></td> 
                    <td>1~14일 (평균5~7일)</td>
                    
                </tr>
            </table>
        </div>
    );
}