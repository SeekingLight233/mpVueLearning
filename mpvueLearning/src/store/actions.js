//引入某个文件中的变量
import {RECEIVE_LIST} from './mutation-type'
import listData from '../datas/list-data'
export default{
  getList({commit}){
    //触发对应的mutation
    commit(RECEIVE_LIST,listData);
  }
}