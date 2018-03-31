import React from 'react'
import './addloction.css'
import CityComponent from '../regoin/regoin.js'
import http from '../../utils/HttpClient.js'
export default class AddLocationComponent extends React.Component{
    address(){
        var addressName=$('#consignee').val();
        var adderssPhone=$('.tel').val();
        var proince=$('#sheng').val();
        var city=$('#city').val();
        var xian=$('#xian').val();
        var detail=$('#detail').val();
        var detailAddress=proince+city+xian+detail;
        var addressObj={addressName,adderssPhone,detailAddress}
        var username=window.sessionStorage.getItem('myname')
        // console.log(username)
        if(addressName&&adderssPhone&&proince&&city&&xian&&detail){
            http.post('getAddress',{username}).then((res)=>{
                    var address=res.data.result[0].address
                   
                    if(address){
                        var newObj=JSON.parse(address)
                        newObj.push(addressObj)
                        http.post('addAddress',{username:username,address:JSON.stringify(newObj)}).then((res)=>{
                            
                            this.props.router.push('location')
                            
                        })

                    }else{
                        var newObj=[{addressName,adderssPhone,detailAddress}]
                        http.post('addAddress',{username:username,address:JSON.stringify(newObj)}).then((res)=>{
                            
                            this.props.router.push('location')
                        })

                    }

                })
           
        }
    }
    preTo(){
        this.props.router.push('location')
    }
    render(){
        return (
            <div className="add-father">
                <header className="updata-hd">
                    <span className="fa fa-chevron-left" aria-hidden="true" onClick={this.preTo.bind(this)}></span>
                    <span>新增地址</span>
                </header>
                <main className="add-main">
                    <ul>
                        <li>
                            <label htmlFor="consignee">收货人:</label>
                            <input type="text" id="consignee" placeholder="请输入收货人姓名"/>
                        </li>
                        <li>
                            <label htmlFor="consignee">手机号码:</label>
                            <input type="text" id="consignee"  className="tel" placeholder="请输入收货人手机号码"/>
                        </li>
                        <li>
                            <label htmlFor="consignee">城市：</label>
                            <CityComponent></CityComponent>
                        </li>
                        <li>
                            <label htmlFor="detail">详细地址：</label>
                            <input type="textarea" id="detail" placeholder="请输入详细地址"/>
                        </li>
                    </ul>
                </main>
                    <footer className="updata-foot">
                    <p onClick={this.address.bind(this)}>确定添加</p>
                </footer>
            </div>

        )
    }
}