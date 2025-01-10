import Image from 'next/image';
import Link from "next/link"
import style from "../Footer/page.module.css"
import logc from "../../../../images/sports-car-logo-icon-set-260nw-2341988433.jpg"
import Header from "../Header/page"
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import logo2 from "../../../../images/Screenshot (40).png"





export default function Footer() {

    return (

        <div className={style.bg_footer} >
          

            <Image src={logo2.src} alt="" className="f-logo absolute left-52 mt-5" width={270} height={100}/>
            <div className="ftr1 absolute">

                
                <h1 className=" text-white text-2xl font-semibold pt-4 pl-56">About Us</h1>

                <p className=" ftrt2 text-white text-lg font-extralight pl-56 pt-5">
                    Car Freaks: A community for auto  <br /> enthusiasts who share a passion for cars. <br />
                    Reviews, tips, and more  <br /> let's drive the conversation forward! 🚗💨</p>
            </div>

            <ul className="ftr_lnks1 text-white font-extralight absolute mt-5 ">
              <li className="mt-6"><Link href={''}>FAQs</Link></li>
              <li className="mt-6"><Link href={''}>Help/Support</Link></li>
              <li className="mt-6"><Link href={''}>Contact</Link></li>
              <li className="mt-6"><Link href={''}>Terms & Conditions</Link></li>
              <li className="mt-6"><Link href={''}>Partners</Link></li>
              <li className="mt-6"><Link href={''}>Team</Link></li>
    
            </ul>

            <ul className="ftr_lnks2 text-white font-extralight absolute mt-5 ">
              <li className="mt-6"><Link href="/">Home</Link></li>
              <li className="mt-6"><Link href={''}>Latest</Link></li>
              <li className="mt-6"><Link href={''}>Join us</Link></li>
              <li className="mt-6"><Link href={''}>Privacy Policy</Link></li>
              <li className="mt-6"><Link href={''}>Advance Controls</Link></li>
              <li className="mt-6"><Link href={''}>More Info</Link></li>
    
            </ul>

            <ul className="ftr_lnks3 text-white font-extralight absolute mt-5 ">
              <li className="mt-6"><Link href={''}>Facebook</Link></li>
              <li className="mt-6"><Link href={''}>Instagram</Link></li>
              <li className="mt-6"><Link href={''}>Twitter</Link></li>
              <li className="mt-6"><Link href={''}>Youtube</Link></li>
    
            </ul>
          
<div className={style.ftr2}>
<p className="ftr2-p text-white pl-20 pt-8">Copyright © 2024 by Muhammad Owais . All Rights Reserved</p>
<div className='logoftr flex '>

<IoLogoFacebook className="text-3xl mt-7 text-blue-900"  /><FaSquareInstagram className="insta text-3xl ml-10 mt-7 "/><IoLogoTwitter className="twt text-3xl ml-10 mt-7 text-blue-500"/><FaYoutube className="yt text-3xl ml-10 mt-7 text-red-600"/>
</div>





</div>



        </div>




    );
};