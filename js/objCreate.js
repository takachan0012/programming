// App Store Rizky
// ALGORITHM
/*  JENIS ROKOK ["SM","DJ","GG"]
SELL = HARGA JUAL KE KONSUMEN
BUY = HARGA BELI DARI TOKO/SALES
KAS = KAS LABA DARI PENJUALAN
*/
function MyStore(category,merk,kind,kas){
    this.category = category;
    this.merk = merk;
    this.kind = kind;
    this.kas = kas;
    this.buy = function(kindOfItems,amount,cost) {
      for( i = 0; i <= this.kind.length; i++){
        if(this.kind.length == 0 || (this.kind.includes(kindOfItems) == false)){
          this.kind.push(kindOfItems);
          this.kind.push(amount);
          this.kind.push(cost*amount);
          return kind;
        }
        else if(this.kind[i] == kindOfItems){
          if(kind[i+1] == undefined){
             kind[i+1] = 0;
             this.kind.splice(i+1,1,kind[i+1]+amount);
             return kind;
          }
          else{
             this.kind.splice(i+1,1,kind[i+1]+amount);
             if(kind[i+2] == 0){
               this.kind.splice(i+2,1,amount*cost);
             }
             else{
             this.kind.splice(i+2,1,kind[i+2]+cost);
             }
             return kind;
        }
        }
    }
  }
  
  this.sell = function (kindOfItems,amount,price){
    for(i = 0; i <= this.kind.length;i++){
      if(this.kind.length == 0 || (this.kind.includes(kindOfItems) == false) ){
        console.log("Out Of STOCK!");
        return this.kind;
      }
      else if(this.kind[i] == kindOfItems){
        if(amount == undefined || this.kind[i+1] < amount){
          console.log("input Is INCORRECT!")
          return this.kind;
        }
        else{
          this.kind.splice(i+1,1,kind[i+1]-amount);
          this.kind.splice(i+2,1,kind[i+2]/amount);  //PR ❌
          this.kas = this.kas + ((amount * price) - (this.kind[i+2]));
          console.log(this.kind, this.kas)
        }
      }
    }
  }
}


//  MAKE OBJECT AUTOMATIC
function NewObject(){
  let category,merk,kind;
  category = prompt("INPUT Category! ex : Snack , Cigaret , Beverage , Drug");
  merk = prompt("INPUT Merk Of Category! ex : Nabati, Sampoerna, Gudang Garam, Djarum, Etc.");
  kind = prompt("INPUT Kind Of Category! ex : kind of Snack is Taro, Malkist Crackers, Malkist Abon, Chitato, Etc.");
  
  // // Execute New Object
  this[merk] = new MyStore(category,merk,[kind,0,0],0);
  return this[merk];
}
