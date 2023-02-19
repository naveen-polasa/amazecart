const Footer = () => {
  return <div className="text-center bg-black text-white py-4 h-20">
    &copy; {new Date().getFullYear()}
    <span className="pl-4">AmazeCart</span>
    <h4 className="md:inline pl-4">All Rights Reserved</h4>
  </div>;
};
export default Footer;
