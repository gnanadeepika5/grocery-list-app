import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})
export class AppGroceryComponent implements OnInit
{
  // item: string;
  item={name : '', id : 0};
  list = [];
  errorMsg:string;
  hideErrorMsg:boolean;

  duplicateMsg:string;
  hideduplicateMsg: boolean;

  validitemMsg: string;
  hidevaliditemMsg: boolean;

  deleteitemsuccessMsg:string;
  hidedeleteitemsuccessMsg:boolean;
  constructor() { }

  ngOnInit(): void {
    // seting the initial values of the 4 booleans
  }

  private firstmessagevalues()
  {
    this.hideErrorMsg = true;
    this.hideduplicateMsg=true;
    this.hidevaliditemMsg=true;
    this.hidedeleteitemsuccessMsg=true;

  }

  addItemToList()
  {
    if(this.item.name.trim() != '')
    {
      this.firstmessagevalues();
      // CHECK IF ITEM ALREADY EXISTS IN LIST -
      // when typed as is, typed in singular form or in plural form
      if(this.list.some(li =>
        (li.name.trim() === this.item.name || li.name.trim() === this.item.name+'s' ||
        li.name.trim() === this.item.name.slice(0,-1) || li.name.trim() === this.item.name.slice(0,-2) || li.name.trim() === this.item.name+'es') && (this.item.id == 0)))
        {
          this.hideduplicateMsg = false;
          this.duplicateMsg = `The entered item "${this.item.name}" already exists in list.`
        }
      else
      {
        if(this.item.id == 0)
        {
          this.hideduplicateMsg = true;
          this.list.push({name: this.item.name.trim(), id: new Date().getTime()});
          console.log(this.list);
        }
      }
      this.item =
      {
        name: '',
        id: 0
      }
    }
    else
    {
      this.hideErrorMsg = false;
      this.errorMsg = 'Enter a valid item.'
    }
  }// end of addListItem







  deleteItemFromList(item)
  {
    this.firstmessagevalues();
       for(let i=0; i<this.list.length; i++)
         {
           if(item.id == this.list[i].id)
            {
              this.list.splice(i,1);
              this.hidedeleteitemsuccessMsg=false;
              this.deleteitemsuccessMsg=`the item ${item.name} deleted successfully`;
              break;
            }
         }
  }//end of deleteItemFromList function

}

