import React, {Component } from 'react'
import XiaojiejieItem from './XiaojiejieItem'
// import axios from 'axios'
import "./style.css"
import Boss from './Boss'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.deleteItem=this.deleteItem.bind(this)
        this.state={
            inputValue:"",
            list:[]
        }
    }

    // componentWillMount (){
    //     console.log('componentwillmount------')
    // }

    // componentDidMount(){
    //     console.log('componentdidmount------')
    // }
    
    // shouldComponentUpdate(){
    //     console.log('1-shouldComponentupdate')
    //     return  true
    // }

    // componentWillUpdate(){
    //     console.log('2-componentwillupdate')
    // }

    // componentDidUpdate(){
    //     console.log('4-componentdidupdate')
    // }

    // componentDidMount(){
    //     axios.get('https://easy-mock.com/mock/5ea224d0af68063566222df9/Reactdemo01/xiaojiejie')
    //         .then((res)=>{console.log('axios huoqushujuchenggong:'+JSON.stringify(res))
    //         this.setState({
    //             list:res.data.data
    //         })
    //     })
    //         .catch((error)=>{console.log('axios huoqushjushibai:' + error)})
    // }

    render(){
        console.log('3-mounting-------')
        return(
            <div>
                <div>
                    <label htmlFor="jspang">zengjiafuwu:</label>
                    <input 
                        id="jspang" 
                        value= {this.state.inputValue} 
                        onChange={this.inputChange}
                        ref = {(input) => {this.input= input}}
                    /> 
                    <button onClick={this.addList.bind(this)}>zengjiafuwu</button>
                    </div>
                <ul ref={(ul)=>{this.ul=ul} } >
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                        <CSSTransition timeout={2000} classNames='boss-text' appear={true} unmountOnExit key={index+item}>
                                            <XiaojiejieItem 
                                                    
                                                    key = {index+item}
                                                    content={item}
                                                    index={index}
                                                    list={this.state.list}
                                                    deleteItem={this.deleteItem}
                                                />
                                        </CSSTransition>
                                        
                                    
                                    //    {/*
                                    //     <li 
                                    //         key={index+item}
                                    //         onClick={this.deleteItem.bind(this,index)}
                                    //         dangerouslySetInnerHTML = {{__html:item}}
                                    //     >
                                    //    </li>
                                    //    */}
                                    
                                    
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss/>
            </div>
            
        )
    }


     inputChange = () => {
        this.setState({
                    inputValue: this.input.value
                },()=>{console.log(this.state)})
        console.log(this.state)

    }
    // inputChange(){
    //     // console.log(e.target.value)
    //     // this.state.inputValue =e.target.value
    //     this.setState({
    //         inputValue: this.input.value
    //     },()=>{
    //         console.log(this.ul.querySelectorAll('li').length)
    //     })
       
    // }

    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
            // list:['jichuanmo','jingyoutuibei',this.state.inputValue]
        })
    }

    deleteItem(index){
        let list=this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}


export default Xiaojiejie

