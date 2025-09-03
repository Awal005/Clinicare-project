import useMetaArgs from "../../hooks/useMeta";
import { RiUserLine, RiGroupLine, RiHeartPulseLine, RiBuildingLine, RiShieldLine, RiPulseLine, RiCalendarScheduleLine, RiUserHeartLine, RiFileTextLine, RiFileList2Line, RiNotification2Line,  } from "@remixicon/react";
import { Link } from "react-router";
import { NavLink } from "react-router";
export default function Home() {

    useMetaArgs({
        title: "Home - Clinicare",
        description: "Welcome to Clinicare, your health companion.",
        keywords: "healthcare, Clinic, Hospital, Patient, Doctor",
    });
  return (
<<<<<<< HEAD
    <div className="lg:pt-"> 
      <div className="container mx-auto flex flex-col items-center justify-end py-5 px-90 max-w-full min-h-[460px] static bg-gradient-to-b from-[#E2EBFF] to-[#E5EDFF] pt-30">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Welcome to
        <br/>
        <span className="text-blue-500 text-4xl md:text-6xl">Clinicare</span>
        </h1>
        <p className="mt-8 text-center text-zinc-800">Manage your hospital operations, patient records, and more with our powerful hospital management system.</p>
        {/* button div */}
        <div className="mt-8 flex gap-4 items-center justify-center">
          <NavLink to="/account/signup" className="btn btn-neutral">New Patient</NavLink>
          <NavLink to="/account/signin" className="btn btn-outline">Login to Clinicare</NavLink>
        </div>
        {/* hero img */}
        <div className="container mx-auto px-4 py-5 mt-10 w-[100%] md:h-[400px] ">
          <img src="/clinicare-dashboard.png" alt="clinicare" className="w-[867px] h-[350px]" />
        </div>
      </div>
        
        {/* Every user */}
      <div className="container mx-auto py-5 px-4 my-10">
        <div className="w-[1250px] px-85">
          <h1 className="text-xl md:text-2xl font-bold text-center">Key Features to Simplify Hospital Management</h1>
          <p className="text-center text-sm mt-3">
          Comprehensive tools designed to enhance efficiency, improve patient care, and streamline hospital operations
=======
    <main className="">
      <div className=" bg-gradient-to-bl from-[#E2EBFF] to-[#E5EDFF]">
        <div className="pt-45 mx-auto items-center w-[1440px] max-w-full">
          <h1 className="font-bold text-4xl md:text-[38px] text-center">
            Welcome to <br />{" "}
            <span className="text-6xl md:text-[70px] text-[#FF5703]">
              Clinicare
            </span>
          </h1>
          <p className="pt-4 text-zinc-800 text-center px-7 md:px-15 lg:w-[710px] mx-auto">
            Manage your hospital operations, patient records, and more with our
            powerful hospital management system.
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
          </p>
        </div> 
        {/* features */}
        <div className="grid grid-cols-3 px-20 mt-8 gap-4 lg:gap-8">
          <div className="border rounded-sm p-6">
            <div className="bg-[#D5E2FF] rounded-4xl p-2 w-[35px]">
              <RiCalendarScheduleLine size={20} className="text-blue-500"/>
            </div>
            <h1 className="pt-3">Appointment Scheduling</h1>
            <p className="text-sm pt-3">
              Let patients book and reschedule appointments easily online with real-time availability and automated confirmations  
            </p>
          </div>
<<<<<<< HEAD
          <div className="border rounded-sm p-4"> 
            <div className="bg-[#FFD7FF] rounded-4xl p-2 w-[35px]">
              <RiUserHeartLine size={20} className="text-pink-500"/>
            </div>
            <h1 className="pt-3">Doctor & Department Management</h1>
            <p className="text-sm pt-3">
              Manage staff availability, departmental organization, and resource allocation efficiently.
            </p>
=======
          <div className="container md:w-[867px] mx-auto px-4">
            <img
              className="rounded-xl"
              src="landing-page-img.png"
              alt="clinicare-dashboard"
            />
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
          </div>
          <div className="border rounded-sm p-4">
            <div className="bg-[#FFD7FF] rounded-4xl p-2 w-[35px]">
              <RiUserHeartLine size={20} className="text-pink-500"/>
            </div>
            <h1 className="pt-3">Analytics Dashboard</h1>
            <p className="text-sm pt-3">
              Get real-time insights into bookings, patients visits, revenue, and operational performance
            </p>
          </div>
          <div className="border rounded-sm p-4">
            <div className="bg-[#FFE2E2] rounded-4xl p-2 w-[35px]">
              <RiFileList2Line size={20} className="text-red-500"/>
            </div>
            <h1 className="pt-3">Billing & Invoicing</h1>
            <p className="text-sm pt-3">
              Get invoices, track payments, and integrate with insurance providers seamlessly.
            </p>
          </div>
          <div className="border rounded-sm p-4">
            <div className="bg-[#FFEFD2] rounded-4xl p-2 w-[35px]">
              <RiNotification2Line size={20} className="text-orange-500"/>
            </div>
            <h1 className="pt-3">Automated Reminders</h1>
            <p className="text-sm pt-3">
              Send SMS and email alerts for appointments, follow-ups, and medication reminders automatically.
            </p>
          </div>
          <div className="border rounded-sm p-4">
            <div className="bg-[#EBD7FF] rounded-4xl p-2 w-[35px]">
              <RiFileTextLine size={20} className="text-purple-500"/>
            </div>
            <h1 className="pt-3">Electronic Medical Records</h1>
            <p className="text-sm pt-3">
              Store, access and update patient records securely with comprehensive digital health documentation
            </p>
          </div>
       
        </div>
<<<<<<< HEAD
      {/* how it works */}
      <div id="how-it-works" className="container mx-auto py-5 px-4 my-14" >
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#130A5C]">
            How It Works{" "}
          </h1>
          <p className="text-black mt-4 text-sm md:text-xl ">
            Simple steps to transform your hospital management and improve
            patient experience
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 lg:gap-8 mt-8 relative" >
          {/* <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-300 transform -translate-x-1/2 z-0" /> */}
          {/* hospital profile */}
          <div className="md:flex justify-center items-center gap-8 bg-white col-span-12 rounded-xl shadow-2xl lg:shadow-none p-2 md:p-0   ">
            {/* text */}
            <div className=" max-w-xl">
              <div className="flex items-center gap-2"> 
              <div className="bg-[#1055F8] rounded-full w-10 h-10 flex justify-center items-center mb-2">
                <h1 className="font-bold text-white text-xl">1</h1>
=======
      </div>
      <div id="features" className="container mx-auto mt-10 py-5 px-4">
        <h1 className="font-bold text-[25px] md:text-[33px] text-center pb-3 text-[#130A5C]">
          Key Features to Simplify Hospital Management
        </h1>
        <p className="text-center mx-auto md:text-[20px] md:w-[700px] lg:w-[853px] pb-10">
          Comprehensive tools designed to enhance efficiency, improve patient
          care, and streamline hospital operations.
        </p>
        <div className="grid grid-cols-12 container gap-4 lg:gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-gray-500 rounded-lg p-[40px] h-[296px]">
            <img
              className="bg-[#D5E2FF] rounded-full p-3"
              src="formkit_datetime.svg"
              alt="formkit-icon"
            />
            <h1 className="font-semibold text-[22px] md:text-[23px] lg:text-[24px] mt-4">
              Appointment Scheduling
            </h1>
            <p className=" md:text-[17px] pt-3">
              Let patients book and reschedule appointments easily online with
              real-time availability and automated confirmations.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-gray-500 rounded-lg p-[40px] h-[296px]">
            <img
              className="bg-[#FFD7FF] rounded-full p-3"
              src="iconoir_user-love.svg"
              alt="user-love-icon"
            />
            <h1 className="font-semibold text-[22px] md:text-[24px] mt-4 leading-tight">
              Doctor & Department Management
            </h1>
            <p className=" md:text-[17px] pt-3">
              Manage staff availability, departmental organization, and resource
              allocation efficiently.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-gray-500 rounded-lg p-[40px] h-[296px]">
            <img
              className="bg-[#DDFFDD] rounded-full p-3"
              src="hugeicons_analytics-up.svg"
              alt="analytics-icon"
            />
            <h1 className="font-semibold text-[22px] md:text-[24px] mt-4">
              Analytics Dashboard
            </h1>
            <p className=" md:text-[17px] pt-3">
              Get real-time insights into bookings, patient visits, revenue, and
              operational performance.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-gray-500 rounded-lg p-[40px] h-[296px]">
            <img
              className="bg-[#FFE2E2] rounded-full p-3"
              src="iconamoon_invoice-thin.svg"
              alt="invoice-icon"
            />
            <h1 className="font-semibold text-[22px] md:text-[24px] mt-4">
              Billing & Invoicing
            </h1>
            <p className=" md:text-[17px] pt-3">
              Generate invoices, track payments, and integrate with insurance
              providers seamlessly.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-gray-500 rounded-lg p-[40px] h-[296px]">
            <img
              className="bg-[#FFEFD2] rounded-full p-3"
              src="hugeicons_analytics-up.svg"
              alt="analytic-icon"
            />
            <h1 className="font-semibold text-[22px] md:text-[24px] mt-4">
              Automated Reminders
            </h1>
            <p className=" md:text-[17px] pt-3">
              Send SMS and email alerts for appointments, follow-ups, and
              medication reminders automatically.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-gray-500 rounded-lg p-[40px] h-[296px]">
            <img
              className="bg-[#EBD7FF] rounded-full p-3"
              src="pepicons-pencil_file.svg"
              alt="pepicons-icon"
            />
            <h1 className="font-semibold text-[22px] md:text-[24px] mt-4 leading-tight">
              Electronic Medical Records
            </h1>
            <p className=" md:text-[17px] pt-3">
              Store, access, and update patient records securely with
              comprehensive digital health documentation.
            </p>
          </div>
        </div>
      </div>
      <section id="howitworks" className="mx-auto container md:h-[1080px] relative my-15 px-4">
        <h1 className="font-bold  text-[30px] md:text-[36px] text-[#130A5C] text-center">
          How it works
        </h1>
        <p className="text-[18px] md:text-[22px] md:w-[650px] lg:w-[790px] mx-auto text-center">
          Simple steps to transform your hospital management and improve patient
          experience.
        </p>
        {/* Parent Div */}
        <div className="mt-12 md:mt-15">
          <div className="hidden lg:block absolute top- bottom- left-1/2 h-[58rem] w-px bg-gray-300 transform translate-x-1/2 z-0"/>
          {/* Part Div */}
          <div className="md:flex md:flex-row items-center justify-between">
            <div className="">
              <div className="flex items-center gap-[12px]">
                <h1 className="w-8 h-8 bg-[#1055F8] text-white text-center rounded-full p-1 md:p-1.5 font-semibold">
                  1
                </h1>
                <h1 className="text-[20px] md:text-[24px] font-semibold">
                  Sign Up and Set Up Your Hospital Profile
                </h1>
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
              </div>
              <h2 className="text-xl font-semibold mb-2">
                Sign Up and Set Up Your Hospital Profile
              </h2>
              </div>
              <p className="text-zinc-800 mb-4 ">
                Add departments, doctors, rooms, and schedules to create a
                comprehensive hospital management system tailored to your
                facility.
              </p>
            </div>
            {/* img */}
            <div className="">
              <img src="Frame 36.svg" alt="img-1" className="w-full" />
            </div>
          </div>
<<<<<<< HEAD

          {/* online booking */}
          <div className="md:flex flex-row-reverse justify-center items-center  gap-25 bg-white col-span-12 rounded-xl shadow-2xl lg:shadow-none p-2 md:p-0 ">
            <div className=" max-w-xl">
               <div className="flex items-center gap-2"> 
              <div className="bg-[#1055F8] rounded-full w-10 h-10 flex justify-center items-center mb-2">
                <h1 className="font-bold text-white text-xl">2</h1>
=======
          <div className="md:flex md:flex-row-reverse items-center justify-between gap-[15px] mt-8">
            <div className="">
              <div className="flex items-center gap-[12px]">
                <h1 className="w-8 h-8 bg-[#1055F8] text-white text-center rounded-full p-1 md:p-1.5 font-semibold">
                  2
                </h1>
                <h1 className="text-[20px] md:text-[24px] font-semibold">
                  Enable Online Booking
                </h1>
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
              </div>
              <h2 className="text-xl font-semibold mb-2">
                Enable Online Booking
              </h2>
               </div>
              <p className="text-zinc-800 mb-4">
                Patients can view doctor availability and schedule appointments
                online through an intuitive booking interface available 24/7.
              </p>
            </div>
            {/* img */}
            <div>
              <img src="Frame 37.svg" alt="img of doctor" className="w-full" />
            </div>
          </div>
          {/* appointment */}
          <div className="md:flex justify-center items-center gap-8 bg-white col-span-12 rounded-xl shadow-2xl lg:shadow-none p-2 md:p-0">
            <div className=" max-w-xl">
               <div className="flex items-center gap-2"> 
              <div className="bg-[#1055F8] rounded-full w-10 h-10 flex justify-center items-center mb-2">
                <h1 className="font-bold text-white text-xl">3</h1>
              </div>
              <h2 className="text-xl font-semibold mb-2">
                Manage Appointments And Record
              </h2>
            </div>
              <p className="text-zinc-800 mb-4">
                Hospital staff can efficiently manage patient queues, update
                medical records, and send automated reminders from a centralized
                dashboard.
              </p>
            </div>

            {/* img */}
            <div>
              <img src="Frame 38.svg" alt="img of nurse" className="w-full" />
            </div>
          </div>
<<<<<<< HEAD
          {/* track everything */}
          <div className="md:flex flex-row-reverse justify-center items-center gap-25 bg-white col-span-12 rounded-xl shadow-2xl lg:shadow-none p-2 md:p-0">
            <div className=" max-w-[520px]">
               <div className="flex items-center gap-2"> 
                  <div className="bg-[#1055F8] rounded-full w-10 h-10 flex justify-center items-center mb-2">
                    <h1 className="font-bold text-white text-xl">4</h1>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                    Track Everything In One Dashboard
                  </h2>                                                                 
=======
          <div className="md:flex md:flex-row-reverse items-center justify-between gap-[15px] ">
            <div className="">
              <div className="flex items-center gap-[12px]">
                <h1 className="w-8 h-8 bg-[#1055F8] text-white text-center rounded-full p-1 md:p-1.5 font-semibold">
                  4
                </h1>
                <h1 className="text-[20px] md:text-[24px] font-semibold">
                  Track Everything In One Dashboard
                </h1>
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
              </div>
              <p className="text-zinc-800 mb-4">
                View comprehensive analytics including appointments, patient
                data, revenue metrics, and performance insights to optimize
                hospital operations.
              </p>
            </div>
            {/* img */}
            <div>
              <img
                src="Frame 35.svg"
                alt="img of computer"
                className="w-full"
              />
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======
      </section>
      <div className="flex flex-col md:flex-row items-center font-semibold justify-center md:h-[170px] gap-10 md:gap-35 lg:gap-52 bg-[#044FFE] text-white py-8 md:px-10 lg:px-0 mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="">100+</h1>
          <p>Hospitals</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="">1M+</h1>
          <p>Patients Served</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="">1000+</h1>
          Healthcare Professionals
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="">99.9%</h1>
          <p>System Uptime</p>
        </div>
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
      </div>
    
      {/*  */}
      <div className="my-20 py-5 px-4 bg-blue-500">
      <div className="container mx-auto grid grid-cols-12 gap-4 lg:gap-8">
      {/* hospital */}
      <div className="flex flex-col justify-center items-center text-white p-4 h-[100px] md:h-[200px] text-center col-span-12 md:col-span-3">
        <h1 className="text-4xl font-bold pb-2">100+</h1>
        <p>Hospital</p>
      </div>
      {/* Healthcare */}
       <div className="flex flex-col justify-center items-center text-white p-4 h-[100px] md:h-[200px] text-center col-span-12 md:col-span-3">
        <h1 className="text-4xl font-bold pb-2">1000+</h1>
        <p>Healthcare Professionals</p>
      </div>
      {/* patients served */}
       <div className="flex flex-col justify-center items-center text-white p-4 h-[100px] md:h-[200px] text-center col-span-12 md:col-span-3">
        <h1 className="text-4xl font-bold pb-2">1M+</h1>
        <p>patients Served</p>
      </div>
      {/* System Uptime */}
       <div className="flex flex-col justify-center items-center text-white p-4 h-[100px] md:h-[200px] text-center col-span-12 md:col-span-3">
        <h1 className="text-4xl font-bold pb-2">99.9%</h1>
        <p>System Uptime</p>
      </div>
      </div>
    </div>
    {/* ready to transform */}
    <div className="container mx-auto py-5 px-4 mt-20 pb-10 flex flex-col justify-center items-center gap-4 text-center">
      <h1 className="text-3xl font-bold">Ready to Transform Your Hospital Experience?</h1>
      <p>Take advantage of our awesome services and enjoy rich healthcare experience at the comfort of your home.</p>
      <button className="btn bg-blue-500 text-white ">Get Started</button>
    </div>
    </div>
    </div>
  )
}

