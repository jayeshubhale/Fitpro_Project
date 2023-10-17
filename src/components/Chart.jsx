// import React from 'react'
import'./Chart.css';


const Chart = () => {
    return (
        <>
            <div className="chart">
                <div className="bar" style={{ height: '60%', backgroundColor: '#3498db' }} title="Jan"></div>
                <div className="bar" style={{ height: '80%', backgroundColor: '#3498db' }} title="Feb"></div>
                <div className="bar" style={{ height: '40%', backgroundColor: '#3498db' }} title="Mar"></div>
                <div className="bar" style={{ height: '60%', backgroundColor: '#3498db' }} title="Apr"></div>
                <div className="bar" style={{ height: '80%', backgroundColor: '#3498db' }} title="May"></div>
                <div className="bar" style={{ height: '40%', backgroundColor: '#3498db' }} title="Jun"></div>
                <div className="bar" style={{ height: '60%', backgroundColor: '#3498db' }} title="Jul"></div>
                <div className="bar" style={{ height: '80%', backgroundColor: '#3498db' }} title="Aug"></div>
                <div className="bar" style={{ height: '40%', backgroundColor: '#3498db' }} title="Sep"></div>
                <div className="bar" style={{ height: '60%', backgroundColor: '#3498db' }} title="Oct"></div>
                <div className="bar" style={{ height: '80%', backgroundColor: '#3498db' }} title="Nov"></div>
                <div className="bar" style={{ height: '40%', backgroundColor: '#3498db' }} title="Dec"></div>
            </div>
        </>
    )
}

export default Chart
