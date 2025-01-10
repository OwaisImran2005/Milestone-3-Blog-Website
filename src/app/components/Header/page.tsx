import Link from "next/link"
import logc from "../../../../images/sports-car-logo-icon-set-260nw-2341988433.jpg"
import Image from "next/image";


export default function Header(){

    return(
        <div className="bg-black h-32">

        <header>
  
          <Link className="logo top-3" href="/"><Image src={logc.src} alt="" className="logimg" width={75} height={80} /><span className="nme">CarFreaks</span></Link>
  
          <nav>
            <ul className="headlinks -mt-2  text-[#b4b4b4]">
              <Link className="nvlnk" href="/">Home</Link>
              <Link className="nvlnk" href="#">Latest </Link>
              <Link className="nvlnk" href="#">Contact</Link>
              <Link className="nvlnk" href="#">About</Link>
            </ul>
          </nav>
        </header>
    </div>
    )
};
