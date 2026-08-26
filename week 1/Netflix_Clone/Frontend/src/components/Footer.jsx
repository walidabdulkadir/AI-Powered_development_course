import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#141414] p-5 h-100">
      <div className="flex ml-10 mt-5 p-2 gap-5 ">
        <FaFacebookF size={30} />
        <FaInstagram size={30} />
        <FaTwitter size={30} />
        <FaYoutube size={30} />
      </div>

      <div className="flex items-center justify-center p-10 gap-23 tracking-wider mb-10 mt-2">
        <div className=" tracking-wider ">
          <h4>Audio description</h4>
          <h4>Investor Relation</h4>
          <h4>Legal Notice</h4>
        </div>
        <div>
          <h4>Help Center</h4>
          <h4>Jops</h4>
          <h4>Cookie Preferences</h4>
        </div>
        <div>
          <h4>Gift Cards</h4>
          <h4>Terms of Use</h4>
          <h4>Corporate information</h4>
        </div>
        <div>
          <h4>Media Centre</h4>
          <h4>Privacy</h4>
          <h4>Contact Us</h4>
        </div>
      </div>

      <div className="ml-10 mt-5 p-2 tracking-wider ">
        1997-2026 Netflix,Inc.
      </div>
    </div>
  );
}

export default Footer;
