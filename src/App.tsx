import { useRef } from 'react'
import './App.css'
import { Container, Footer, useMantineTheme, createStyles } from '@mantine/core';

//import { Home } from "./Pages/Home"
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom"
import { NavBarX } from "./components/organisms/NavBarX"

import { About } from "./Pages/About"
//import { Bilgi } from "./Pages/Bilgi"
import { Donate } from "./Pages/Donate"
//import { Token } from "./Pages/Token"
import { Nft } from './Pages/Nft';
import { NFTCreatePage } from './Pages/NFTCreatePage';
import { HeaderActionProps } from './components/organisms/NftCard/types';




//https://www.linkpicture.com/view.php?img=LPic6384a1219711c535723408

function App() {
  const { ethereum } = window as any;
  const theme = useMantineTheme();

  const useStyles = createStyles((theme) => ({


    img: {
      //width: "250px",
      // height: "150px",
      margin: "0 auto",
      display: "block"
    }

  }
  ))

  // className={cx(classes.img)
  const { classes, cx } = useStyles();

/*   interface HeaderActionProps {
    links: { link: string; label: string; links: { link: string; label: string }[] }[];
  } */

  const data: HeaderActionProps["links"] = [
   
      {
        link: "/",
        label: "NFT Market",
      
      },
      {
        link: "/nftCreate",
        label: "NFT Create Page",
      
      },

      {
        link: "/about",
        label: "About",
      
      },

      {
        link: "/donate",
        label: "Donate",
      
      }
    ,
  ];


 /*  link: "/home",
        label: "Home",
        links: [
          {
            link: "/home/about",
            label: "About",
          },
          {
            link: "/home/contact",
            label: "Contact",
          },
        ], */

  console.log("1")
  console.log(window.location.pathname)

  return (
    <><div className="App">



      <div>

      </div>



      <HashRouter>
        <NavBarX links={data} />
        <Routes>
          <Route path="/" element={<Nft />} />
      
          <Route path="/about" element={<About />} />
          <Route path="/nftCreate" element={<NFTCreatePage />} />

          <Route path="/donate" element={<Donate />} />
        </Routes>
      </HashRouter>



      <Footer height={10}>
        <Container>
          <div >
            <img className={cx(classes.img)}
              src="https://i.ibb.co/w60nYLv/mylogo.jpg" alt="mylogo"
            />
          </div>
        </Container>
      </Footer>
    </div></>

  );
}

export default App;
