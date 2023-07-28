import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import {Cart} from "../Cart/Cart";
import { useSelector } from "react-redux";

export const Navbar = () => {

  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
        <div className="women">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="men">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          
        </div>


        <div className="center">
        <Link className ="link" to="/">
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAasAAAA8CAIAAABXZwJ1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjFiNjVhNzliNCwgMjAyMi8wNi8xMy0yMjowMTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkQwQ0FGRjkyMEU5MTFFRTgxMjhDMzEwRDAyMkNFRUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkQwQ0FGRkEyMEU5MTFFRTgxMjhDMzEwRDAyMkNFRUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRDBDQUZGNzIwRTkxMUVFODEyOEMzMTBEMDIyQ0VFRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRDBDQUZGODIwRTkxMUVFODEyOEMzMTBEMDIyQ0VFRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhoMA4IAAA3ASURBVHja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' alt="Not available" />
          </Link>
        </div>


        <div className="right">
        {/* <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div> */}
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            {/* <FavoriteBorderOutlinedIcon/> */}
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}
