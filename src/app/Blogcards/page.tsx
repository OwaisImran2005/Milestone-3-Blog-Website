import Link from "next/link";
import dodgec from "../../../images/dchlng.png"
import bugh from "../../../images/bugatti-png.png"
import mac from "../../../images/mclaren-png.png"
import lam from "../../../images/lambo.jpg"
import am from "../../../images/aston-martin-png.png"
import cam from "../../../images/camaro.png"
import ferr from "../../../images/ferrari.png"
import gtr from "../../../images/gtr.png"
import por from "../../../images/porsche.png"
import Image from 'next/image';


export default function Blogcards(){
    return(
        <div>
            
            <center>

<h1 className="text-5xl text-black font-extrabold mt-40">Read More...</h1>
</center>
<div className="main mt-32">

<section id="dodge" className="blog-space">
  <Link href="/Blog1">
    <h2 className="ctext">Dodge Challenger: Where Power Meets Style</h2>
    <ul className="bmve">


      <li className="textb">Experience raw power with the iconic Dodge Challenger, featuring legendary HEMI® V8 engines for thrilling performance.</li>
      <li className="textb">With its bold, retro look and customizable options, the Challenger is a true automotive standout.</li>
      <li className="textb">Stay connected with advanced infotainment and safety features designed <Link href="/Blog1" className="seemore text-gray-700 pl-2 text-">See More</Link></li>
      {/* for modern driving. */}
    </ul>
    <Image src={dodgec.src} alt="Dodge Car" width={250} height={250} className="imgd" />
  </Link>
</section>


<section id="bugatti" className="blog-space">
  <Link href="/Blog2">
    <h2 className="ctext">Bugatti Chiron: A Masterpiece of Automotive Engineering</h2>
    <ul className="bmve">
      <li className="textb">With an 8.0-liter quad-turbocharged W16 engine delivering 1,479 horsepower, the Chiron accelerates from 0 to 60 mph in just 2.4 seconds.</li>
      <li className="textb">Crafted from the finest materials, its luxurious interior offers comfort and sophistication.</li>
      <li className="textb">Equipped with cutting-edge technology, the Chiron ensures <Link href="/Blog2" className="seemore text-gray-700 pl-2 text-">See More</Link></li>
      {/* a seamless driving experience. */}
    </ul>
    <Image src={bugh.src} alt="Bugatti Car" width={230} height={220} className="bugh" />
  </Link>
</section>

<section id="mclaren" className="blog-space">
  <Link href="/Blog3">
    <h2 className="ctext">McLaren: Where Innovation Meets Performance</h2>
    <ul className="bmve">
      <li className="textb">With a twin-turbocharged V8 engine, McLaren delivers an exhilarating driving experience. Which accelerates from 0 to 60 mph in just 2.8 seconds</li>
      <li className="textb"> Striking aerodynamic shape enhances stability and handling, making it a head-turner on any road. Striking  </li>
      <li className="textb">Equipped with the latest in automotive technology, the McLaren offers seamless <Link href="/Blog3" className="seemore text-gray-700 pl-2 text-">See More</Link></li>
      {/* connectivity and a user-friendly interface.connectivity and a user-friendly interface. */}
    </ul>
    <Image src={mac.src} alt="McLaren Car" width={325} height={300} className="mac" />
  </Link>
</section>



<section id="b2" className="blog-space">
  <Link href="/Blog4">
    <h2 className="ctext">Ferrari: The Essence of Luxury and Speed</h2>
    <ul className="bmve">
      <li className="textb">Powered by a high-revving V8 or V12 engine, Ferrari delivers blistering acceleration from 0 to 60 mph in under 3 seconds, with top speeds exceeding 200 mph.</li>
      <li className="textb">The unmistakable silhouette combines aerodynamic efficiency with timeless elegance, ensuring you stand out on any road.</li>
      <li className="textb">Limited production and bespoke options make each Ferrari a rare masterpiece <Link href="/Blog4" className="seemore text-gray-700 pl-2 text-">See More</Link></li>
      {/* for discerning collectors. */}
    </ul>
    <Image src={ferr.src} className="ferr" alt="Ferrari Car" width={265} height={255} />
  </Link>

</section>

<section id="b2" className="blog-space">
  <Link href="/Blog5">
  <h2 className="ctext">Nissan GTR: A Legend Reimagined</h2>
  <ul className="bmve">

    <li className="textb">Equipped with a 3.8-liter twin-turbo V6 engine, the GTR delivers stunning acceleration from 0 to 60 mph in just 2.9 sec, with a top speed of around 196 mph.</li>
    <li className="textb">The bold, aerodynamic exterior not only looks aggressive but also enhances performance, ensuring stability at high speeds.</li>
    <li className="textb">The bold, aerodynamic exterior not only looks aggressive but also enhances performance <Link href="/Blog5" className="seemore text-gray-700 pl-2 text-">See More</Link></li>
    {/* , ensuring stability at high speeds. */}
  </ul>
  <Image src={gtr.src} className="gtr" alt="gtr Car" width={260} height={250} />
  </Link>

</section>

<section id="b2" className="blog-space">
  <Link href="/Blog6">
  <h2 className="ctext">Porsche: The Pinnacle of Performance and Luxury</h2>
  <ul className="bmve">

    <li className="textb">Porsche's engineering excellence is epitomized by powerful engines, including turbocharged flat-six options that deliver heart-pounding acceleration.</li>
    <li className="textb"> Equipped with a cutting-edge infotainment system, Porsche offers seamless connectivity and intuitive navigation.</li>
    <li className="textb">The signature silhouette combines classic aesthetics with modern aerodynamics, resulting <Link href="/Blog6" className="seemore text-gray-700 pl-2 text-">See More</Link>
      {/* in a striking exterior that enhances both performance and visual appeal. */}
    </li>
  </ul>
  <Image src={por.src} className="porsc" alt="Porsche Car" width={250} height={250} />
  </Link>
</section>

</div>
        </div>
    )
}