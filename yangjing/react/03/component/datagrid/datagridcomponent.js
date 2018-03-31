import React from 'react'
import ReactDOM from 'react-dom'
import http from '../../utile/httpclient.js'
import Spinner from '../spinner/spinner.js'
import './datagridcomponent.css'
import Com from '../../utile/common.js'

export default class DataGridComponent extends React.Component{
    componentWillMount(){
        this.setState({Spinnershow:true})
        http.get('http://localhost:5555/03/component/datagrid/datagrid.json',{page:1,pgeitems:10}).then((res)=>{
                console.log(res)
                this.setState({Spinnershow:false,dataset:res.data,rowsCount:res.rowsCount})
            })
        
    }
    state = {
        dataset:[],
        rowsCount:0,
        Spinnershow:false
    }
    sj(a){
        
        Com.data = a;
        this.props.filldata(a);console.log(this.props.filldata)
    }
    render(){
        return <div>
                    <Spinner show={this.state.Spinnershow}/>
                    <table>
                        <thead>
                            <tr>
                                <th>accout</th>
                                <th>phone</th>
                                <th>e-mail</th>
                                <th>project name</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.dataset.map((a)=>{
                                    return (
                                        <tr key={a.indexid} onDoubleClick={this.sj.bind(this,a)}>
                                            <td>{a.account}</td>
                                            <td>{a.phone}</td>
                                            <td>{a.mail}</td>
                                            <td>{a.projectname}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>       
                    </table>
               </div>
    }
}