function NonQuack()
{
  this.Quack = () =>
  {
   
    console.log("NOOON , je peux pas QUACK :'( ")
  }
}

function Quack()
{
  this.Quack = () =>
  {
    
    console.log("QUAAAAAACK !!!!! ")
  }
}


function Quackcmpt()
{
  this.qck = ''
  this.setStrategy = qck =>
  {
    console.log(qck)
    this.qck = qck
    console.log(this.qck)
  }
  this.Quack = () => {
    this.qck.Quack()
  }
}


const non_quack = new NonQuack()
const quack = new Quack()
quackcmpt = new Quackcmpt()

function Canard_domestique(){
  this.Quacker = ''
  this.init =()=> {
    this.Quacker = new Quackcmpt()
  }
  this.setcomportment = (paramter) =>{
    this.Quacker.setStrategy(paramter)
  }
  this.getcomportment = () => {
    this.Quacker.Quack()
  }
}
canard = new Canard_domestique()
canard.init()
canard.setcomportment(quack)
canard.getcomportment()