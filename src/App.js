import { Fragment } from "react";
import Home from "./components/home/Home";
import BlogPost from "./components/blogPost/BlogPost";
import ContactUs from "./components/contactUs/ContactUs";
import Gallery from "./components/gallery/Gallery";
import Static from "./components/static/Static";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import PostDetails from "./components/blogPost/Postdetails";
import Comment from "./components/blogPost/Comment";
import AddBlogs from "./components/blogPost/AddBlogs";
import FormSubmitted from "./components/contactUs/FormSubmitted";

export default function App() {
  return (
    <Fragment>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="contact-us" element={<ContactUs/>} />
          <Route path="blogs" element={ <BlogPost/>} />
          <Route path="photos" element={<Gallery />} />
          <Route path="faq" element={<Static />} />
          <Route path="blogs/:id" element={<PostDetails />} />
          <Route path="blogs/:id/comment" element={<Comment />} />
          <Route path="addblogs" element={<AddBlogs />} />
          <Route path="submitted" element={<FormSubmitted/>} />
        </Routes>
        <Footer/>
    </Fragment>
  )
}