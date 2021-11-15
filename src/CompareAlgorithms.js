import React from 'react'
import './compalgo.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';
// import {useState} from 'react'



function CompareAlgorithms({raiseflag,data}) {
    // const mydata = [
    //     { name: 'fifo', miss: 4 },
    //     { name: 'lru', miss: 4 },
    //     { name: 'opr', miss: 4 },
    //     { name: 'nru', miss: 7 },
    //     { name: 'random', miss: 4 },
    //     { name: 'lfu', miss: 4 },
    //     { name: 'mfu', miss: 4 },
    //     { name: 'sca', miss: 4 },
    //     { name: 'mru', miss: 5 },
    //     { name: 'wset', miss: 5 }
    //   ]
    const img_link = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEX19fX+xGNetOcAAAD4+Phft+tjuOoXOk//ymd6YDYnTWNcosxmUCz7+/tetulQi6+Af36ZmZgaNkYAECJlteUAGy11WzOaeUEjP1bPz84ACiKjgUkAGC2Zekj/xmP/ym1MhKYYAAD7xWzjtGjp6emjo6MADhgAAxNSkLbHx8dqaGdbWVhGQ0IWLjwlQlVAaoW5ubkABRo1JgpJOBwQHin/0G6thEfVqmG7lVYnGw9ZhJ5AbotGNBhbm8GvjFLxv2wyWG+JbD5dSSvGnl0rGgAeCwDarmYAJTtEZ30RHiiLi4ve3t4zLisgGhURAAAAAAcdKjKRkSutAAAFzUlEQVR4nO2cgVbaSBSGNZeMgcCoONqyVpIirOiuoKKrNSLYaq3atfv+T7OTBBSCSjI1ZvD83zntsVLHfOdO5t7cJDM3BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH6DXCmXNaVcmoKlyl+UNX9vl1IU3KZddzFb3BY1UlSkgjCzhrWpntZEze2RzY3MEbScVhBLy/siaz0JKy+lZ7jiG7IseQtD1l7IjoJI3ZBz1jrIZ0Xn8A0MDfYxf2Rlw9H6avqG8hd8XHPms8H6AEMYwhCGMIQhDGEIQxjCEIYh1fdu6PxTe9+G1WM6sd61odOhLzXliToDhtY5ndKGchBnwLD2ucDa1Hu/htYG2abYV/953Q2rPfKYwVw6VjwTtTd0ivuCG1yUzxQH0N1QZgrXNAzD7NK52mKju6FzVmbhrZX+vdpio7mhzBRdMzA0bbpQCqLGhlV/mfncZ4P7Y6ZHmyqLjcaG/tFdkD28A8jFalFpDJ0Nq5vkmQ83Oc1F+qYQRK0Nna+ro/eP2cKBwiA6G1a/0aIfQs4ZG2SM9eSLjc6GtctWsMwIt+/ZZpAxFMpTjQ2tdfK9ZDlDnavggQ4u6CL5MPoa9ugHC7PEsdO7agfPGyhkDH0NrTwFywwryCThrAWljcwYXxOPo6th9XtYkBqsJX/U+vCJDTNGwsVGW0M/U/DQsOgbrgzK09ZBwq6UrobWCTXDZM8KcmJaF9fMCITtpBlDU8Nq7bIwKEhZv+Ofh63hP9vUS7TYaGoYtC6GSmc1OWeHwobYzycbSk/DHgXZgQcZ4kut6nQerzFcOp59Q2dt5aEglUY1OWm9oSEXu50kY2lp6Lcu2INhU554tUHqMMLyNEkLXEtD56ws+Jhhb7iyhqvr5wQtcB0NH1sXg5BtWpuj3+F2kha4joa9q4eFM/Q5to7HHqU22wnKUw0N/dbF6JPhtizUTmj0UpgnaYHrZzjeuvATIJ3LC6kRQx5kjLhB1M/QKa6IsYf72XX+aO2aGWPW8Vvg2hlWv40khvCs8yjvh3VEm/P4LXDtDGsHC9G3F0T/ui0i72z4LfB481Q3Q3nGdc2IoWEyMyLIeewWuG6GPeqzqKBw2240hvEbGpoZOiNN7mG4xC4d0GH01aLYDQ29DCcyRRis787m1XhoefwWuF6GkSZ3aBj0aTZWJiYvW4jV0NDKUGaK5sQywwodxzoq7k4YmvEaGloZDpvc4yJNKp7kyZ18xS9eC1wnQ7918cSrimzxmlbdSXW/nouRMXQyHDS5J6MohIgmxPADuQhNXWw0MnTyWxNZbwA3jKc+4eJwesbQx3D41EUSeHN6C1wfQ6ez+1wIn0e0Lqc1NLQxrJ7IgpS/xFOT15ze0NDGsHZVECr8mJYxdDG0Lmj/j5f59DS05rw4T3UxnF+fysZzzEYM53/jTd8ZMUwNGMIQhjCEIQxhCEMYwvDRsLWm/gbhbBhmu8cQf4sYXhaz4uAm/RhyzrxCdvTfwFD+hmBvP5bBfoLyj/EG52HmvHtDnqbhHulgKFZu0zLM1cljJjc5D/u9wd+m+fDlc98YfBk50pf/87Mjm6ZLldS2oS0tU79rKzNuqDqKRztpbkLbuFffHvdm9H4bbyqPc5vuRsJzdxVFbv+MGG6rjVNPMYIByls4N7YihopDpeynzFOGJY2PNz4yeD5yci9FZ2ljb7tSDz6eWVH/6OuVxu3Oz2CFOBw3PPw12J97aXnvbm4GNXOluUpj51/frNV2F7u2iFQLQgjbbrpev7zle95u10vpbrf+quRK9b2de/pVbi9Ks6BK5xMPKHBuBCU8E6LrFValZaM+K46l+hJR2etKtydvaUdVfVNhuy2ipdRzwasg69d9z364vOKxr46Eu0Vp7pr/WuTu6L/TptKm+c3TG8r68GOQq6hXdpJ61scfA9WyR++aBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4L3wP7YJUdZFyl5/AAAAAElFTkSuQmCC"
    return (
        <div className = "compare__algos">
           { (raiseflag===-1)?
           <div className = "display__graphs">
               <h1>Algorithm Vs PageFaults</h1>
               <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="name" stroke="#000000" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" />
                    <Bar dataKey="miss" fill="#0045a5" barSize={30} />
                </BarChart>
           </div>
           :
           <div className="confuse__monkey">
                <h1>Input is Missing</h1>
                <img src={img_link} alt="page image is there" id ="myimg"/>
           </div>
           }
        </div>
    )
}

export default CompareAlgorithms
