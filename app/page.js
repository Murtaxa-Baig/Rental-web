import Image from "next/image";
import DateCard from "./(components)/ui/dateCard/DateCard";
import Card from "./(components)/ui/card/Card";
import car from '@/public/images/car.svg'
import sheet from '@/public/images/sheet.svg'
import cash from '@/public/images/cash.svg'
import shakeHand from '@/public/images/shakeHand.svg'
import revenue from '@/public/images/revenue.svg'
import cashBag from '@/public/images/cashBag.svg'

export default function Home() {
  return (
    <>

      <div class="flex items-center justify-between mt-10 ">
        <div class="container  py-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <DateCard date={"28/8 (Today)"} start={"0"} end={"0"} />
            <DateCard date={"29/8 (Tomorrow)"} start={"0"} end={"0"} />
            <DateCard date={"30/8"} start={"0"} end={"0"} />
            <DateCard date={"31/8"} start={"0"} end={"0"} />
          </div>

        </div>
      </div>


      <div class="flex items-center justify-between ">
        <div class="container p-6 bg-white rounded-lg">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card img={car} title={"3 of 3"} text={"Cars available on rent"} />
            <Card img={sheet} title={"1"} text={"Monthly rentals"} />
            <Card img={cash} title={"€30"} text={"Total monthly revenue"} />
            <Card img={cash} title={"€30"} text={"Total monthly profit"} />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between mt-5">
        <div class="container p-6 bg-white rounded-lg">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card img={car} title={"€30"} text={"Own cars monthly revenue"} />
            <Card img={shakeHand} title={"€0"} text={"Partners cars monthly revenue"} />
            <Card img={revenue} title={"€30"} text={"Total revenue"} />
            <Card img={cashBag} title={"€30"} text={"Total profit"} />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between my-5">
        <div class="container p-6 bg-white rounded-lg ">
          <h1 className="font-bold text-gray-500 text-center mb-3">Users statistics from 01 Aug 2024 to 28 Aug 2024</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <p className="font-bold text-gray-500 mb-3">Name</p>
              <p>Murtaxa Baig</p>
            </div>
            <div>
              <p className="font-bold text-gray-500 mb-3">Role</p>
              <p>Admin</p>
            </div>
            <div>
              <p className="font-bold text-gray-500 mb-3">Orders count</p>
              <p>2</p>
            </div>
            <div>
              <p className="font-bold text-gray-500 mb-3">Total revenue</p>
              <p>€30</p>
            </div>
            <div>
              <p className="font-bold text-gray-500 mb-3">Tatal profit</p>
              <p>€30</p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
