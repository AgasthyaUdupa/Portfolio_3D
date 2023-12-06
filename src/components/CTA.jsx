import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Know more About me...
      </p>
      <Link to='/contact' className='btn hover:text-black'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
