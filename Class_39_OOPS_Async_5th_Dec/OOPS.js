

 class Vehicle{
    constructor(wheels,company,model){

        this.wheels= wheels;
        this.company = company;
        this.model = model;
    }

    engineStart(){

        console.log(`${this.company}'s ${this.model} switched on.....`)
    }

    engineOff(){

        console.log(`${this.company}'s ${this.model} switched off.....`)
    }
 }

 class TwoWheeler extends Vehicle{
    constructor(wheels,company,model,stand,gearType){

        super(wheels,company,model);
        this.stand = stand;
        this.gearType= gearType;
    }
 }

 class ThreeWheeler extends Vehicle{
    constructor(wheels,company,model,lever,fueltype){

        super(wheels,company,model);
        this.lever = lever;
        this.fueltype= fueltype;
    }
 }

 class FourWheeler extends Vehicle{
    constructor(wheels,company,model,fueltype){

        super(wheels,company,model);
        this.fueltype= fueltype;
    }
 }

 const outputTwowheeler = new TwoWheeler(2,"Hero","X1",true,4)
 console.log(outputTwowheeler)

 const outputThreewheeler = new ThreeWheeler(3,"Bajaj","A1",true,"Diesel")
 console.log(outputThreewheeler)


 outputTwowheeler.engineStart()
 outputTwowheeler.engineOff()



