
import './App.css'
// import Button from '@mui/material/Button';
// import { BarChart } from '@mui/icons-material'
function App() {
    return (
        <>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <div className='maincontainer'>
                <div className="sidebar">
                    <ul>
                        <li className="dashboard">
                            <a><i className="bi bi-flower1"></i>Dashboard</a>
                        </li>
                        <li>
                            <a href="#product"><i className="glyphicon glyphicon-shopping-cart"></i> Product <i
                                className="glyphicon glyphicon-chevron-right arrow"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#customer"><i className="glyphicon glyphicon-user"></i> Customer <i
                                className="glyphicon glyphicon-chevron-right arrow"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#income"><i className="glyphicon glyphicon-usd"></i> Income<i
                                className="glyphicon glyphicon-chevron-right arrow"></i></a>

                        </li>
                        <li>
                            <a href="#promote"><i className="glyphicon glyphicon-bullhorn"></i> Promote<i
                                className="glyphicon glyphicon-chevron-right arrow"></i></a>

                        </li>
                        <li>
                            <a href="#help"><i className="glyphicon glyphicon-question-sign"></i> Help<i
                                className="glyphicon glyphicon-chevron-right arrow"></i></a>

                        </li>
                    </ul>
                </div>

                {/* --------------------------------------------------------------------------- */}

                <div className="main-content">


                    <div className="navbar">
                        <span className="name">Hello Jayesh,</span>
                        <input type="text" className="search-bar" placeholder="Search..." />
                    </div>


                    <div className="card-container">

                        <div className="cardcolum">
                            <div className="icon">
                                <img src="economy-icon.png.png" width={80} height={80} alt="Economy Icon" />
                            </div>
                            <div className="content">
                                <h6 className="title">Economy</h6>
                                <h2>$254K</h2>
                                <div className="arrow up"><span>▲</span><h5>+45</h5> this month</div>
                            </div>
                        </div>


                        <div className="cardcolum">
                            <div className="icon">
                                <img src="order-icon.png" width={80} height={80} alt="Order Icon" />
                            </div>
                            <div className="content">
                                <h6 className="title">Order</h6>
                                <h2>$123K</h2>
                                <div className="arrow up"><span>▲</span><h5>+45</h5> this month</div>
                            </div>
                        </div>

                        <div className="cardcolum">
                            <div className="icon">
                                <img src="balance-icon.png.png" width={80} height={80} alt="Balance Icon" />
                            </div>
                            <div className="content">
                                <h6 className="title">Balance</h6>
                                <h2>$45K</h2>
                                <div className="arrow down"> <span>▼</span><h5>-9</h5>this month</div>
                            </div>
                        </div>

                        <div className="cardcolum">
                            <div className="icon">
                                <img src="sales-icon.png" width={80} height={80} alt="Total Sales Icon" />
                            </div>
                            <div className="content">
                                <h6 className="title">Total Sales</h6>
                                <h2>$111K</h2>
                                <div className="arrow down"> <span>▼</span><h5>-15</h5>this month</div>
                            </div>
                        </div>
                    </div>


                    {/* ------------------------------------------------------------------------------------------------- */}


                    <div className='flex-container'>
                        <div className="overview-card">
                            <div className='card-body'>
                                <div className="overview-head">
                                    <div>
                                        <h2>Overview</h2>
                                        <span className='overview-subtitle'>Monthly Earning</span>
                                    </div>
                                    <div className='divQu'>
                                        <p>Quarterly</p>
                                    </div>
                                </div>
                                <div className="overview-body">
                                    <div className="chart">
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">Jan</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">Feb</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">Mar</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">Apr</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">May</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">Jun</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">Jul</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">Aug</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">Sep</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">Oct</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">Nov</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner"></div>
                                            <div className="label">Dec</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='customer-card'>
                            <div className='card-body'>
                                <div className="overview-head">
                                    <div>
                                        <h2>Customers</h2>
                                        <span className='overview-subtitle'>Customer that buy product</span>
                                    </div>
                                </div>
                                <div className="overview-body">
                                    <div className="container">
                                        <div className="donut-chart-block block">
                                            <div className="donut-chart">
                                                <div id="part1" className="portion-block"><div className="circle"></div></div>
                                                <div id="part2" className="portion-block"><div className="circle"></div></div>

                                                <div className="center">
                                                    <h1>65%</h1>
                                                    <p>Total New</p>
                                                    <h5>Customers</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="product-card">
                            <div className='product-sell-card'>
                                <div className="product-card-body">
                                    <h2>Product sell</h2>
                                </div>
                                <div className="search-container">
                                    <input type="text" placeholder='search here' />
                                    <select name="" id="">
                                        <option value="">Last 10 days</option>
                                        <option value="">Last 10 days</option>
                                        <option value="">10 days</option>
                                        <option value="">10 days</option>
                                    </select>
                                </div>
                            </div>
                            <div className="table-heading-row">
                                <div className="product-name">
                                    Product Name
                                </div>
                                <div className="product-stock">
                                    Product Stocks
                                </div>

                                <div className="product-price">
                                    Product Price
                                </div>

                                <div className="product-sales">
                                    Product Sales
                                </div>


                            </div>
                            <div className="table-heading-row">
                                <div className="product-name">
                                    <div className='symbol1'></div>
                                    <div className='produc-name-container'>
                                        <h3>Abstract 3d</h3>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic porro! Minima quam ex iste
                                    </div>
                                </div>
                                <div className="product-stock" style={{ fontSize: '13px' }}>
                                    32 in stock
                                </div>

                                <div className="product-price" style={{ fontSize: '13px', fontWeight: 'bold', marginLeft: '5px' }}>
                                    $ 499
                                </div>

                                <div className="product-sales" style={{ fontSize: '13px', marginLeft: '5px' }}>
                                    20
                                </div>


                            </div>
                            <div className="table-heading-row">
                                <div className="product-name">
                                    <div className='symbol2'></div><div className='produc-name-container'>
                                        <h3>Abstract 3d</h3>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic porro! Minima quam ex iste
                                    </div>
                                </div>
                                <div className="product-stock" style={{ fontSize: '13px' }}>
                                    32 in stock
                                </div>

                                <div className="product-price" style={{ fontSize: '13px', fontWeight: 'bold', marginLeft: '5px' }}>
                                    $ 499
                                </div>

                                <div className="product-sales" style={{ fontSize: '13px', marginLeft: '5px' }}>
                                    20
                                </div>


                            </div>
                            <div className="table-heading-row">
                                <div className="product-name">
                                    <div className='symbol3'></div><div className='produc-name-container'>
                                        <h3>Abstract 3d</h3>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic porro! Minima quam ex iste
                                    </div>
                                </div>
                                <div className="product-stock" style={{ fontSize: '13px' }}>
                                    32 in stock
                                </div>

                                <div className="product-price" style={{ fontSize: '13px', fontWeight: 'bold', marginLeft: '5px' }}>
                                    $ 499
                                </div>

                                <div className="product-sales" style={{ fontSize: '13px', marginLeft: '5px' }}>
                                    20
                                </div>


                            </div>
                            <div className="table-heading-row">
                                <div className="product-name">
                                    <div className='symbol4'></div><div className='produc-name-container'>
                                        <h3>Abstract 3d</h3>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic porro! Minima quam ex iste
                                    </div>
                                </div>
                                <div className="product-stock" style={{ fontSize: '13px' }}>
                                    32 in stock
                                </div>

                                <div className="product-price" style={{ fontSize: '13px', fontWeight: 'bold', marginLeft: '5px' }}>
                                    $ 499
                                </div>

                                <div className="product-sales" style={{ fontSize: '13px', marginLeft: '5px' }}>
                                    20
                                </div>

                            </div>
                            <div className="table-heading-row">
                                <div className="product-name">
                                    <div className='symbol5'></div><div className='produc-name-container'>
                                        <h3>Abstract 3d</h3>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic porro! Minima quam ex iste
                                    </div>
                                </div>
                                <div className="product-stock" style={{ fontSize: '13px' }}>
                                    32 in stock
                                </div>

                                <div className="product-price" style={{ fontSize: '13px', fontWeight: 'bold', marginLeft: '5px' }}>
                                    $ 499
                                </div>

                                <div className="product-sales" style={{ fontSize: '13px', marginLeft: '5px' }}>
                                    20
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default App

