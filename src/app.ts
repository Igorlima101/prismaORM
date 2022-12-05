import BookingController from "./controllers/BookingController";
import HouseController from "./controllers/HouseController"
import UserController from "./controllers/UserController"

async function main(){
    const userController = new UserController();
    const houseController = new HouseController();
    const bookingController = new BookingController();

    // const user = await userController.create({
      //  name: 'Igor',
        //email: 'igor@gmail.com'
    // })

    //const house = await houseController.create({
       //title: 'Studio completo',
       //description: 'com cozinha'
   // })

    const booking = await bookingController.create({
        startsAt: new Date(),
        endsAt: new Date("2021-12-30"),
        houseId: "30ee148e-052d-44d2-8474-3f5d522887c7",
        userId: "4b1c6094-a716-40ab-a32b-decc92b6fb88"

    })

    console.log(booking)
}

main()


   