import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser,FaAngleRight} from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";
import {BiUserCircle} from "react-icons/bi";

import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/Staff",
    name: "Staff",
    icon: <FaUser />,
  },

 
  {
    path: "/communication",
    name: "Communication",
    icon: <GiSpeaker />,
    subRoutes: [
      {
        path: "/communication/post",
        name: "Sticky Post ",
        icon: <FaAngleRight />,
      },
      {
        path: "/communication/notification",
        name: "Push Notifications",
        icon: <FaAngleRight />,
      },
      {
        path: "/communication/feed",
        name: "Social Feed",
        icon: <FaAngleRight />,
      },
    ],
  },

  {
    path: "/Residents",
    name: "Residents",
    icon: <BiUserCircle />,
    exact: true,
    subRoutes: [
      {
        path: "/Resident/nothing",
        name: "Nothing ",
        icon: <FaAngleRight />,
      },
      {
        path: "/Resident/nothing",
        name: "Nothing",
        icon: <FaAngleRight />,
      },
      {
        path: "/Resident/nothing",
        name: "Nothing",
        icon: <FaAngleRight />,
      },
      
    ],
  },
  {
    path: "/Visitors",
    name: "Visitors",
    icon: <FaHome />,
    exact: true,
    subRoutes: [
      {
        path: "/Visitor/nothing",
        name: "Nothing ",
        icon: <FaAngleRight />,
      },
      {
        path: "/Visitor/nothing",
        name: "Nothing",
        icon: <FaAngleRight />,
      },
      {
        path: "/Visitor/nothing",
        name: "Nothing",
        icon: <FaAngleRight />,
      },
      
    ],
  },
 
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "20%" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                 ResidentNow
                 
                </motion.h1>
              )}
            </AnimatePresence>

        
              <FaBars onClick={toggle} />
            
          </div>
         
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;