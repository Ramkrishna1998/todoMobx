import { observable, action, computed, configure } from 'mobx';
import { ChangeEvent } from 'react';
import { NewItem}  from './interface/interface';
configure({ enforceActions: 'always' });


class ListContain {

    @observable list: any = [];
    @observable tempList: string = '';
/* 
      constructor(){
          this.list = [];
          this.tempList = ''
      } */

    @action('Change the newItem value with user input ')
    handleOnChangeEvent = (e: any) => {
    
      this.tempList = e.target.value;
    }

    @action('submit item')
    handleOnSubmitEvent = (e: any) =>{ 
        e.preventDefault();        
        this.list = [...this.list, this.tempList];
        
    }
    @action('Delete item')
    removeItem = (value: any) => {

       this.list = this.list.filter((item: any) => item !== value)
        
    }
   @computed
   get totalItems() {
    return this.list.length;
  }
  
}

export default new ListContain();

