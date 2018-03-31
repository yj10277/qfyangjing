import React,{Component}  from 'react'
import './locationList.css'
import http from '../../utils/HttpClient.js'
class LocationListComponent extends Component{
    preTo(){
        this.props.router.push('updatemessage')
    }
    nextTo(){
        this.props.router.push('addlocation')
    }
    state={
        location:null
    }
    componentWillMount(){
        var username=window.sessionStorage.getItem('myname');
            console.log(username)
        http.post('getAddress',{username}).then((res)=>{
          
            if(res.data.result.length>0){

                this.setState({
                    location:JSON.parse(res.data.result[0].address)
                })
            }
           
        })
    }
    getKeys(item){
        return item ? Object.keys(item) : [];
    }
    del(e){
        var delId=e.target.parentNode.id;
        var parent=e.target.parentNode.parentNode
        var son=e.target.parentNode
        var username=window.sessionStorage.getItem('myname');
        http.post('getAddress',{username}).then((res)=>{
            
            var newObj=JSON.parse(res.data.result[0].address)
            newObj.splice(delId,1)
            http.post('delAddress',{username}).then((res)=>{
                http.post('addAddress',{username:username,address:JSON.stringify(newObj)}).then((res)=>{
                            parent.removeChild(son)

                })
            })
        })
    }
    getAddress(item){
        // console.log([item])
        var items=JSON.stringify([item])
        window.sessionStorage.setItem('myplace',items)
        this.props.router.push('creatOrder')
    }
    render(){
        console.log(this.state.location,)
        let html=(<div><header className="updata-hd">
                        <span className="fa fa-chevron-left" aria-hidden="true" onClick={this.preTo.bind(this)}></span>
                        <span>收货地址</span>
                    </header>
                    <main className="location-main"></main>
                    <footer className="updata-foot">
                        <p onClick={this.nextTo.bind(this)}>添加新地址</p>
                    </footer></div> )
        if(this.state.location){

             html=(
                <div className="location-father">
                    <header className="updata-hd">
                        <span className="fa fa-chevron-left" aria-hidden="true" onClick={this.preTo.bind(this)}></span>
                        <span>收货地址</span>
                    </header>
                    <main className="location-main">
                        <div>
                            <ul>
                                {
                                     this.state.location.map((item,idx) => {
                                        return (
                                            <li key={idx} id={idx}>
                                            <input type="radio" onClick={this.getAddress.bind(this,item)}/>

                                                {
                                                    this.getKeys(item).map((key) => {
                                                        return <span key={Math.random()}>{item[key]}</span>
                                                    })
                                                }
                                                 <i className="fa fa-trash-o" aria-hidden="true" onClick={this.del.bind(this)}></i>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </main>
                    <footer className="updata-foot">
                        <p onClick={this.nextTo.bind(this)}>添加新地址</p>
                    </footer>
                </div>
            )
        }
        return html
    }
}
export default LocationListComponent