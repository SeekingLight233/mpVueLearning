import {RECEIVE_LIST} from './mutation-type'

export default{
  [RECEIVE_LIST](state,{list_data}){
    //数据初始化
    state.listTmp = list_data;
  }
}