import React from "react";
import {connect} from "react-redux"
import actionCreator from "./store"
class Detail extends React.Component {
  componentDidMount(){
    let id = this.props.location.state.id;
  }
  render() {
    return (
      <div>我是详情页</div>
    )
  }
}
const stateToProps=(staet)=>{
  return {

  }
}
const dipatchToProps=(dispatch)=>{
  return {
      getDetailById(id){
        dispatch(actionCreator.detail(id));
      }
  }
}
export default connect(stateToProps,dipatchToProps)(Detail);
